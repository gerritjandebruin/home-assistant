# Claude Code - Home Assistant Cremerboulevard

## Project
- Config dir: `/config`
- Git repo, main branch
- Packages in `/config/packages/`
- ESPHome configs in `/config/esphome/`

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
