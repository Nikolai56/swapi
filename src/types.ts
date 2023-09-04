type Url = string
type Timestamp = string

export type People = {
  count: number
  next: string | null
  previous: string | null
  results: Person[]
}

export type Person = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: Url
  films: Url[]
  species: Url[]
  vehicles: Url[]
  starships: Url[]
  created: Timestamp
  edited: Timestamp
  url: Url
  [key: string]: string | Url[]
}
