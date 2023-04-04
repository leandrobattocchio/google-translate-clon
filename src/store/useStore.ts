import { useReducer } from 'react'
import { AUTO_LANGUAGE } from '../consts/language.const'
import { ACTIONS, type FromLanguages, type ToLanguages, type TranslateActionType, type TranslateStateType } from '../types.d'

const INITIAL_STATE: TranslateStateType = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    loading: false,
    fromText: '',
    response: ''
}

function languageReducer (state: TranslateStateType, action: TranslateActionType): TranslateStateType {
    const { type } = action

    if (type === ACTIONS.INTERCHANGE_LANGUAGES) {
        if (state.fromLanguage === AUTO_LANGUAGE) return state

        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage,
            loading: true
        }
    }

    if (type === ACTIONS.SET_FROM_LANGUAGE) {

        const loading = state.fromText !== ''

        return {
            ...state,
            fromLanguage: action.payload,
            loading
        }
    }

    if (type === ACTIONS.SET_TO_LANGUAGE) {

        const loading = state.fromText !== ''
        return {
            ...state,
            toLanguage: action.payload,
            loading
        }
    }

    if (type === ACTIONS.SET_FROM_TEXT) {

        const loading = action.payload !== ''

        if(!loading) {
            return {...state, fromText: '', response: '', loading}
        }

        return {
            ...state,
            fromText: action.payload,
            loading
        }
    }

    if (type === ACTIONS.SET_RESPONSE) {

        return {
            ...state,
            response: action.payload,
            loading: false
        }
    }

    return state
}

export function useStore () {
    const [{
        fromLanguage,
        fromText,
        loading,
        response,
        toLanguage
    }, dispatch] = useReducer(languageReducer, INITIAL_STATE)

    const interchangeLanguages = () => {
        dispatch({ type: ACTIONS.INTERCHANGE_LANGUAGES })
    }

    const setFromLanguage = (payload: FromLanguages) => {
        dispatch({ type: ACTIONS.SET_FROM_LANGUAGE, payload })
    }

    const setToLanguage = (payload: ToLanguages) => {
        dispatch({ type: ACTIONS.SET_TO_LANGUAGE, payload })
    }

    const setFromText = (payload: string) => {
        dispatch({ type: ACTIONS.SET_FROM_TEXT, payload })
    }

    const setResponse = (payload: string) => {
        dispatch({ type: ACTIONS.SET_RESPONSE, payload })
    }

    return {
        fromLanguage,
        fromText,
        loading,
        response,
        toLanguage,
        setFromLanguage,
        setToLanguage,
        setFromText,
        interchangeLanguages,
        setResponse
    }
}
