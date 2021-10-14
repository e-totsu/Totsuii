import { uii_Vector2 } from '@/libs/totsuii/Math';



///   Get DOOM   ///
function uii_get     ( target: any ) { return document.querySelector    ( target ) }
function uii_get_all ( target: any ) { return document.querySelectorAll ( target ) }



///   ID Generator   ///
const gen_id = (): string => {
  return Math.random().toString(36).substr(2, 9)
}


///   Range Of Numbers   ///
const range = (num: number, range: uii_Vector2): number => {
  if (num < range.x())
    return range.x()

  if (num > range.y())
    return range.y()

  return num;
}

export { gen_id, range, uii_get, uii_get_all }
