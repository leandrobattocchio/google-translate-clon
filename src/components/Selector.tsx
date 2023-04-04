import { AUTO_LANGUAGE, TRANSLATE_LANGUAGES } from '../consts/language.const'
import { FromTo, type ToLanguages, type FromLanguages } from '../types.d'

type SelectorProps =
    | { type: FromTo.FROM, language: FromLanguages, changeLanguage: (language: FromLanguages) => void }
    | { type: FromTo.TO, language: ToLanguages, changeLanguage: (language: ToLanguages) => void }

function Selector ({ type, language, changeLanguage }: SelectorProps) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value
        changeLanguage(value as ToLanguages)
    }

    return (
        <select className='select' onChange={handleChange} value={language}>
            {type === FromTo.FROM && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            {
                Object.entries(TRANSLATE_LANGUAGES).map(([key, literal]) => {
                    return <option key={key} value={key}>{literal}</option>
                })
            }
        </select>
    )
}

export default Selector
