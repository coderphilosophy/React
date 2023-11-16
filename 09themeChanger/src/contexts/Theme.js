import { createContext, useContext } from 'react'

//value inside the createContext are the default values 
//this means that when createContext is created the default values should already be present.
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}