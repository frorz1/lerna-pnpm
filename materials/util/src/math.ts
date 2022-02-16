import { isIOS } from '@yuue/device'
export const logUa = () => {
  console.log(isIOS())
}

export const add = (x: number, y: number) => {
  return x + y
}

export const isArray = (arr: []) => {
  return Array.isArray(arr)
}

export const testTs = () => {
  return 123
}
