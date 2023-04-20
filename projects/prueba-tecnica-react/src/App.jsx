import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        if (!res.ok) {
          throw new Error('No se ha podido recuperar la cita') // if we use async await, use try catch
        }
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    // just one word -> const firstWord = fact.split(' ')[0]

    // more than one word                             words
    // const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

    // another option                     words
    const firstThreeWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Cats App</h1>
      {/* <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words from ${fact}`} />}
      </section> */}
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words from ${fact}`} />}
    </main>
  )
}
