import {uii_Vector2} from "@/libs/totsuii/Math";
import uii_Prefab from "@/editor/objects/Prefab";

export default class uii_Object extends uii_Prefab {
  constructor(size: uii_Vector2, position: uii_Vector2 = new uii_Vector2(0, 0)) {
    super(size, position)
  }
}
