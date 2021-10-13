import { Vector2 } from "@/libs/totsuii/Math";
import Prefab from "@/editor/objects/Prefab";

export class Object extends Prefab {
  constructor(size: Vector2, position: Vector2 = new Vector2(0, 0)) {
    super(size, position);
  }
}