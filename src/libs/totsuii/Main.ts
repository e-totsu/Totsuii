import { Vector2 } from './Math';

const obj: Vector2 = new Vector2(3.32323, 0)
const obj_2: Vector2 = new Vector2(5.3123, 4)

obj.invert();

console.log(obj.get(), obj_2.get())
