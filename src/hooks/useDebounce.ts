import { useEffect, useState } from 'react'

function useDebounce<T> (text: T, delay = 500) {
    const [textDebounced, setTextDebounced] = useState(text)

    useEffect(() => {
        const time = setTimeout(() => {
            setTextDebounced(text)
        }, delay)

      return () => { clearTimeout(time) }
    }, [text, delay])

  return { textDebounced }
}

export default useDebounce
