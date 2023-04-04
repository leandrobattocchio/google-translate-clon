import { type AUTO_LANGUAGE, type TRANSLATE_LANGUAGES } from './consts/language.const'

export type AutoLanguage = typeof AUTO_LANGUAGE
export type ToLanguages = keyof typeof TRANSLATE_LANGUAGES
export type FromLanguages = AutoLanguage | ToLanguages

export interface TranslateStateType {
    fromLanguage: FromLanguages
    toLanguage: ToLanguages
    loading: boolean
    fromText: string
    response: string
}

export enum FromTo {
    FROM = 'from',
    TO = 'to'
}

export enum ACTIONS {
    SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
    SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
    SET_FROM_TEXT = 'SET_FROM_TEXT',
    SET_RESPONSE = 'SET_RESPONSE',
    INTERCHANGE_LANGUAGES = 'INTERCHANGE_LANGUAGES',
}

export type TranslateActionType =
| { type: ACTIONS.INTERCHANGE_LANGUAGES }
| { type: ACTIONS.SET_FROM_LANGUAGE, payload: FromLanguages }
| { type: ACTIONS.SET_TO_LANGUAGE, payload: ToLanguages }
| { type: ACTIONS.SET_FROM_TEXT, payload: string }
| { type: ACTIONS.SET_RESPONSE, payload: string }


export interface TextAreaProps {
    type: FromTo
    text: string
    changeText: (text: string) => void
    loading?: boolean
    language: FromLanguages | ToLanguages
}