import { getUserAgent } from '@yuue/device'

export const logUa = () => {
  console.log(getUserAgent())
}

export const add = (x: number, y: number) => {
  return x + y
}

export const isArray = (arr: []) => {
  return Array.isArray(arr)
}
