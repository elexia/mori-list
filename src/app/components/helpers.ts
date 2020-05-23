/* ******************************************** */
/*  HELPER FUNCTIONS                            */
/*  Reusable functions with common use cases    */
/* ******************************************** */

export function getRange(start: number, end: number): number[] {
  let arr = [];
  for (let i = start; i < end+1; i++) {
    arr.push(i);
  }
  return arr;
}
