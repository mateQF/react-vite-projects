import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <h1>PAGE NOT FOUND</h1>
      <img src='https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg' alt='cat 404' />
      <br />
      <Link to='/'>Home</Link>
    </>
  )
}
