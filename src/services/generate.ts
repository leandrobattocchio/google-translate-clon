import { type FromLanguages, type ToLanguages } from '../types'
import { TRANSLATE_LANGUAGES } from '../consts/language.const'

export async function translate ({
  fromLanguage,
  toLanguage,
  text
}: {
  fromLanguage: FromLanguages
  toLanguage: ToLanguages
  text: string
}) {
  if (fromLanguage === toLanguage || text === '') return text


  const from = fromLanguage === 'auto' ? 'auto' : TRANSLATE_LANGUAGES[fromLanguage]
  const to = TRANSLATE_LANGUAGES[toLanguage]

  const response = await fetch('/api/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from, to, text })
  })

  const {res} = await response.json()
  return res
}
