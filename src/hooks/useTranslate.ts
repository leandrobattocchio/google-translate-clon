import { useStore } from "@/store"
import useDebounce from "./useDebounce"
import { useEffect } from "react"
import { translate } from "@/services"

function useTranslate() {
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
    } = useStore()
  
    const { textDebounced } = useDebounce(fromText)

    useEffect(() => {
        if (textDebounced !== '') {
            translate({ fromLanguage, toLanguage, text: textDebounced })
                .then((response) => {
                    if (response == null) return
                    setResponse(response)
                })
                .catch(e => { console.log(e) })
        }
    }, [textDebounced, fromLanguage, toLanguage])
  
    return {
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
    }
}

export default useTranslate