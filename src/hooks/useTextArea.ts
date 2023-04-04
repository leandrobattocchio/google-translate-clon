import { FromLanguages, FromTo, TextAreaProps, ToLanguages } from '@/types.d'

function useTextArea({ type, language, loading, changeText, text}: TextAreaProps) {
  
    const placeholder = `${type === FromTo.FROM ? 'Inserte el texto aqui' : 'Traduccion'}`
    const backgroundColor = `${type === FromTo.TO ? '#303134' : '#202124'}`
    const color = `${type === FromTo.TO ? 'grey' : 'white'}`
    const value = loading ? 'Cargando...' : text
    const speakLanguage = language === 'es' ? 'es-ES' : language === 'en' ? 'en-GB' : language === 'de' ? 'de-AT' : 'es-ES'

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        changeText(event.target.value)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const textarea = event.currentTarget

        if (textarea.selectionStart === 0 && textarea.selectionEnd === textarea.value.length) {
            // Verificar si se ha presionado la tecla Backspace
            if (event.key === 'Backspace') {
                changeText('')
                console.log('a')
            }
        }
    }

    const handleSpeak = () => {
        if (text !== '') {
            const uterrance = new SpeechSynthesisUtterance(text)
            uterrance.lang = speakLanguage
            speechSynthesis.speak(uterrance)
        }
    }
  
    return {
        placeholder, 
        backgroundColor, 
        color, 
        value, 
        handleChange, 
        handleKeyDown, 
        handleSpeak
    }
}

export default useTextArea