export type TTask = {
  id: number
  current: {
    start: number
    end: number
  } | null
  overall: number
  name: string
}
