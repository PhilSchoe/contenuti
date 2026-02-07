import type { EntityType } from "./EntityType";

export interface Entity {
  title: string;
  previewImageUrl: string;
  type: EntityType;
}
