import { CombinedFacadeComponent } from "./combined-facade.component";
import { FacadeComponent } from "./facade-component";
import { GeometryComponent } from "./geometry.component";
import { PriceComponent } from "./price.component";
import { WorksComponent } from "./works.component";

const componentKeys = [
  "component_geometry",
  "component_works",
  "component_panel",
  "component_profile",
  "component_facade",
  "component_combined_facade",
  "component_product_profile",
  "component_shield",
  "component_column",
  "component_koromyslo",
  "component_cornice",
  "component_light_bar",
  "component_plinth",
  "component_carved_decor",
  "component_trim_panel",
  "component_pillar",
  "component_CMZ",
  "component_work",
  "component_price",
] as const;
export type ComponentKey = typeof componentKeys[number];


interface ComponentMap {
  "component_geometry": GeometryComponent
  "component_works": WorksComponent
  "component_panel": null
  "component_profile": null
  "component_facade": FacadeComponent
  "component_combined_facade": CombinedFacadeComponent;
  "component_product_profile": null
  "component_shield": null
  "component_column": null
  "component_koromyslo": null
  "component_cornice": null
  "component_light_bar": null
  "component_plinth": null
  "component_carved_decor": null
  "component_trim_panel": null
  "component_pillar": null
  "component_CMZ": null
  "component_work": null
  "component_price": PriceComponent
}

export type ECSComponent<T extends keyof ComponentMap> = {
  [K in keyof ComponentMap[T]]:ComponentMap[T][K]
};




