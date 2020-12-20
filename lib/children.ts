import routes from './routes'
import { CalendarItem, Child, Fetch, RequestInit } from './types'
import { etjanst, child, calendarItem } from './parse'

export const list = (fetch: Fetch, init?: RequestInit) => async (): Promise<Child[]> => {
  const url = routes.children
  const response = await fetch(url, init)
  const data = await response.json()
  return etjanst(data).map(child)
}

export const calendar = (fetch: Fetch, init?:RequestInit) => async (childId: string): Promise<CalendarItem[]> => {
  const url = routes.calendar(childId)
  const response = await fetch(url, init)
  const data = await response.json()
  console.log(etjanst(data))
  return etjanst(data).map(calendarItem)
}

// export const details = (_fetch: Fetch) => async (_id: string): Promise<Child> => ({})
