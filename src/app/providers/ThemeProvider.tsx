'use client'
import React, { createContext, useState, useEffect } from 'react'

type ContextType = {
    dark: boolean,
    toggleDark: () => void
}

export const ThemeContext = createContext<ContextType>({
    dark: false,
    toggleDark: () => {}
})

const ThemeProvider = ({ children }: {children : React.ReactNode}) => {
    const [dark, setDark] = useState(false);
    
    const toggleDark = () => {
        setDark(dark => !dark)
    }
    useEffect(() => {
        document.documentElement.classList.toggle('dark_mode')
    }, [dark])

  return (
    <ThemeContext.Provider value={{dark, toggleDark}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider