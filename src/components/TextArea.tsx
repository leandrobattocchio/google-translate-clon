import useTextArea from '@/hooks/useTextArea'
import { FromLanguages, FromTo, TextAreaProps, ToLanguages } from '../types.d'
import { MicrophoneIcon, ReproductionIcon } from './Icons'

function TextArea ({ type, text, changeText, loading, language }: TextAreaProps) {

    const {
        backgroundColor,
        color,
        handleChange,
        handleKeyDown,
        handleSpeak,
        placeholder,
        value
    } = useTextArea({ changeText, language, text, type, loading })

    return (
        <div style={{ position: 'relative' }}>
            <textarea
                className="text-area"
                value={value}
                style={{ color, backgroundColor }}
                placeholder={placeholder}
                disabled={type === FromTo.TO}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                maxLength={284}
                rows={1}
                tabIndex={0}
                autoFocus
                required
            />
            <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', left: '2px', bottom: '2px' }}>
                <span style={{ padding: '10px', cursor: 'pointer' }}>
                    <ReproductionIcon className='icon-hover' onClick={handleSpeak} />
                </span>
            </div>
        </div>
    )
}

export default TextArea
