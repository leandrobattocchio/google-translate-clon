import { type FromLanguages, type ToLanguages } from '../types.d'
import Selector from './Selector'
import TextArea from './TextArea'

interface TranslateFormProps {
    type: any
    language: FromLanguages | ToLanguages
    text: string
    changeLanguage: (language: any) => void
    changeText: (text: string) => void
    loading?: boolean
}

function TranslateForm ({ type, language, text, changeLanguage, changeText, loading }: TranslateFormProps) {
    return (
        <div>
            <Selector type={type} language={language} changeLanguage={changeLanguage} />
            <TextArea type={type} text={text} changeText={changeText} loading={loading} language={language} />
        </div>
    )
}

export default TranslateForm
