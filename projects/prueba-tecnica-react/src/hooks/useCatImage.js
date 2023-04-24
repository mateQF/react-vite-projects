import { useEffect, useState } from 'react'
import { getCatImageUrl } from '../services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)
  useEffect(() => {
    if (!fact) return
    // just one word -> const firstWord = fact.split(' ')[0]

    // more than one word                             words
    // const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

    // another option                     words
    const firstThreeWords = fact.split(' ', 3).join(' ')
    getCatImageUrl(firstThreeWords).then(newImageurl => setImageUrl(newImageurl))
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
