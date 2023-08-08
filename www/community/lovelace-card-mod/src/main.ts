import { fireEvent } from "card-tools/src/event.js";
import "./card-mod";
import "./patch/ha-card";
import "./patch/hui-entities-card";
import "./patch/hui-glance-card";
import "./patch/hui-state-label-badge";
import "./patch/hui-view";
import "./patch/hui-root";
import "./patch/ha-more-info-dialog";
import "./patch/ha-sidebar";
import "./patch/hui-card-element-editor";
import "./patch/hui-picture-elements-card";
import "./patch/ha-icon";
import "./mod-card";
import "./theme-watcher";

import { getResources } from "./helpers";
(window as any).getResources = getResources;

const resources = getResources();
if (resources.some((r) => r.endsWith("card-mod.js"))) {
  console.info("Card-mod is loaded as a module");
} else {
  fireEvent("ll-rebuild", {});
  console.info(
    "You may not be getting optimal performance out of card-mod.\nSee https://github.com/thomasloven/lovelace-card-mod#performance-improvements"
  );
}
