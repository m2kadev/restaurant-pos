import { useMemo, useState} from 'react'

export const useToggleOnFocus = (initialState = false) => {
  const [show, toggle] = useState(initialState)
  
  const eventHandlers = useMemo(() => ({
    onFocus: () => toggle(true),
    onBlur: () => toggle(false),
  }), [])

  return [show, eventHandlers]
}