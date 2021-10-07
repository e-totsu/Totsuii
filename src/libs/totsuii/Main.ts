import { Vector2 } from '@/libs/totsuii/Math';


///   ID Generator   ///
const gen_id = (): string => {
  return Math.random().toString(36).substr(2, 9)
}


///   Range Of Numbers   ///
const range = (num: number, range: Vector2): number => {
  if (num < range.x())
    return range.x()

  if (num > range.y())
    return range.y()

  return num;
}

export { gen_id, range }
