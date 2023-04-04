import { FromTo } from '../types.d'
import { InterchangeIcon } from './Icons'
import TranslateForm from './TranslateForm'
import useTranslate from '@/hooks/useTranslate'

function TranslateContainer () {
    const {
        fromLanguage,
        fromText,
        loading,
        response,
        setFromLanguage,
        setFromText,
        toLanguage,
        setToLanguage,
        interchangeLanguages,
        setResponse
    } = useTranslate()

    return (
        <div className="translate-container">
            <TranslateForm
                type={FromTo.FROM}
                language={fromLanguage}
                text={fromText}
                changeLanguage={setFromLanguage}
                changeText={setFromText}
            />
            <InterchangeIcon style={{ cursor: 'pointer' }} className='interchange-icon icon-hover' onClick={interchangeLanguages} />
            <TranslateForm
                type={FromTo.TO}
                language={toLanguage}
                text={response}
                changeLanguage={setToLanguage}
                changeText={setResponse}
                loading={loading}
            />
        </div>
    )
}

export default TranslateContainer
