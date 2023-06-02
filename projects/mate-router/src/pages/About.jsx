import { Link } from '../Link.jsx'

const i18n = {
  en: {
    title: 'About me',
    description: 'My name is Mateo',
    button: 'Home'
  },
  es: {
    title: 'Sobre mi',
    description: 'Mi nombre es Mateo',
    button: 'Página Principal'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || lang.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://media.licdn.com/dms/image/D4D03AQH51zPQu7GH9w/profile-displayphoto-shrink_400_400/0/1685478616013?e=1691020800&v=beta&t=-EzCCWGOA5H_xPL0CEeBgac-Y5yRarlCCFTh8-6strw' alt="Mateo's photo" />
        <p>{i18n.description}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
