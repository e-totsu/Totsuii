import { uii_Vector2 } from "@/libs/totsuii/Math";
import { uii_Prefab } from "@/editor/objects/Prefab";

export class uii_Object extends uii_Prefab {
  constructor(size: uii_Vector2 = new uii_Vector2(50, 50), position?: uii_Vector2) {
    super(size, position);
  }
}
