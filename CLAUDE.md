# Claude Code - Home Assistant Cremerboulevard

## Project
- Config dir: `/config`
- Git repo, main branch
- Packages in `/config/packages/`
- ESPHome configs in `/config/esphome/`
- Auto-generated docs: [entities.md](entities.md), [devices.md](devices.md), [integrations.md](integrations.md)

## Home Assistant API
- URL: `http://homeassistant.local:8123`
- Token: stored in `/config/.ha_token` (gitignored, expires ~2036)

### Useful queries
```bash
TOKEN=$(cat /config/.ha_token)

# All states
curl -s -H "Authorization: Bearer $TOKEN" http://homeassistant.local:8123/api/states

# Single entity
curl -s -H "Authorization: Bearer $TOKEN" http://homeassistant.local:8123/api/states/sensor.foo

# Render template
curl -s -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"template": "{{ states(\"sensor.foo\") }}"}' \
  http://homeassistant.local:8123/api/template

# Config entries (integrations)
curl -s -H "Authorization: Bearer $TOKEN" http://homeassistant.local:8123/api/config/config_entries/entry
```

### Refresh entities.md, devices.md and integrations.md
```bash
python3 << 'EOF'
import json, re, datetime, urllib.request

TOKEN = open('/config/.ha_token').read().strip()
BASE = 'http://homeassistant.local:8123'
TODAY = datetime.date.today()

def api_json(endpoint):
    req = urllib.request.Request(BASE + endpoint,
        headers={'Authorization': f'Bearer {TOKEN}'})
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())

def template(tmpl):
    req = urllib.request.Request(BASE + '/api/template',
        data=json.dumps({'template': tmpl}).encode(),
        headers={'Authorization': f'Bearer {TOKEN}', 'Content-Type': 'application/json'})
    with urllib.request.urlopen(req) as r:
        return r.read().decode()

# ── entities.md ───────────────────────────────────────────────────────────────
states = api_json('/api/states')
index = {}
for s in states:
    domain = s['entity_id'].split('.')[0]
    name = s.get('attributes', {}).get('friendly_name', s['entity_id'])
    index.setdefault(domain, []).append({'id': s['entity_id'], 'name': name})
for domain in sorted(index):
    index[domain].sort(key=lambda x: x['name'])
lines = [f'# Home Assistant Entities\n',
         f'Auto-generated. Last updated: {TODAY}.\n']
for domain in sorted(index):
    lines += [f'\n## {domain.replace("_", " ").title()} ({len(index[domain])})\n',
              '| Entity ID | Friendly Name |', '|-----------|---------------|']
    for e in index[domain]:
        lines.append(f'| `{e["id"]}` | {e["name"]} |')
open('/config/entities.md', 'w').write('\n'.join(lines) + '\n')
print(f'entities.md: {len(states)} entities')

# ── devices.md ────────────────────────────────────────────────────────────────
raw_ids = template("{% set ns = namespace(out=[]) %}{% for s in states %}{% set did = device_id(s.entity_id) %}{% if did and did not in ns.out %}{% set ns.out = ns.out + [did] %}{% endif %}{% endfor %}{{ ns.out | join(',') }}")
device_ids = raw_ids.strip().split(',')
devices = []
for did in device_ids:
    d = {
        'id': did,
        'name':         template(f"{{{{ device_attr('{did}', 'name') }}}}"),
        'manufacturer': template(f"{{{{ device_attr('{did}', 'manufacturer') }}}}"),
        'model':        template(f"{{{{ device_attr('{did}', 'model') }}}}"),
        'sw_version':   template(f"{{{{ device_attr('{did}', 'sw_version') }}}}"),
        'hw_version':   template(f"{{{{ device_attr('{did}', 'hw_version') }}}}"),
        'integration':  template(f"{{{{ device_attr('{did}', 'identifiers') }}}}"),
        'area':         template(f"{{{{ area_name('{did}') }}}}"),
        'connections':  template(f"{{{{ device_attr('{did}', 'connections') }}}}"),
        'entities':     [e for e in template(f"{{{{ device_entities('{did}') | list | join(',') }}}}").split(',') if e],
    }
    for k in ('manufacturer','model','sw_version','hw_version','area'):
        if d[k] == 'None': d[k] = None
    devices.append(d)

def parse_integration(raw):
    m = re.search(r"'([^']+)'", raw); return m.group(1) if m else 'unknown'
def parse_connections(raw):
    return {k: v for k, v in re.findall(r"\('([^']+)',\s*'([^']+)'\)", raw)}

by_integration = {}
for d in sorted(devices, key=lambda x: (x.get('manufacturer') or '', x.get('name') or '')):
    by_integration.setdefault(parse_integration(d.get('integration','')), []).append(d)

lines2 = [f'# Home Assistant Devices\n',
          f'Auto-generated. Last updated: {TODAY}. Total: {len(devices)} devices.\n']
for integ in sorted(by_integration):
    devs = by_integration[integ]
    lines2 += [f'\n## {integ} ({len(devs)})\n',
               '| Name | Manufacturer | Model | SW Version | HW Version | Area | Connections | Entities |',
               '|------|-------------|-------|-----------|-----------|------|-------------|----------|']
    for d in devs:
        conns = parse_connections(d.get('connections',''))
        conn_str = ', '.join(f"{k}: `{v}`" for k, v in conns.items())
        ents = d.get('entities', [])
        ent_str = ', '.join(f'`{e}`' for e in ents[:5]) + (f' +{len(ents)-5} more' if len(ents) > 5 else '')
        lines2.append(f"| {d['name'] or ''} | {d['manufacturer'] or ''} | {d['model'] or ''} | {d['sw_version'] or ''} | {d['hw_version'] or ''} | {d['area'] or ''} | {conn_str} | {ent_str} |")
open('/config/devices.md', 'w').write('\n'.join(lines2) + '\n')
print(f'devices.md: {len(devices)} devices')

# ── integrations.md ───────────────────────────────────────────────────────────
entries = api_json('/api/config/config_entries/entry')
by_domain = {}
for e in entries:
    by_domain.setdefault(e['domain'], []).append(e)
lines3 = [f'# Home Assistant Integrations\n',
          f'Auto-generated. Last updated: {TODAY}. Total: {len(entries)} config entries.\n',
          '| Domain | Title | Source | State | Disabled | Error |',
          '|--------|-------|--------|-------|----------|-------|']
for domain in sorted(by_domain):
    for e in by_domain[domain]:
        lines3.append(f"| `{domain}` | {e['title']} | {e['source']} | {e['state']} | {e['disabled_by'] or ''} | {e['reason'] or ''} |")
open('/config/integrations.md', 'w').write('\n'.join(lines3) + '\n')
print(f'integrations.md: {len(entries)} entries')
EOF
```
