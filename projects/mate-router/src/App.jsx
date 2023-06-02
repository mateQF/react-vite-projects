import { lazy, Suspense } from 'react' // dynamic import form for components
import { Router } from './Router.jsx'
import Route from './Route.jsx'

// import AboutPage from './pages/About.jsx' -> estatic import, dynamic import -> import('./pages/About.jsx')
const AboutPage = lazy(() => import('./pages/About.jsx')) // lazy loading, we import when we need it
const HomePage = lazy(() => import('./pages/Home.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const Page404 = lazy(() => import('./pages/Page404.jsx'))

const routes = [
  {
    path: '/:lang/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading....</div>}> {/* Fixing lazy error, suspended state */}
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
