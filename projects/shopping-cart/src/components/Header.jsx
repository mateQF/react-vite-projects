import { Filters } from './Filters.jsx'

export function Header ({ changeFilters }) { // eslint-disable-line
  return (
    <header>
      <h1>React shop</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  )
}
