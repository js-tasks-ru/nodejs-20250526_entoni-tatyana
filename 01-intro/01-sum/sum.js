import { error } from "console"

export default function sum(a, b) {
  if(typeof a === 'number' && typeof b === 'number') return a + b
  throw new TypeError('TypeError')
}
