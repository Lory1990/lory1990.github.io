import React, { useState } from "react"
import { HeaderColor } from "../types/HeaderColor"

export interface IThemeContext {
  headerColor: string
  setHeaderColor: React.Dispatch<React.SetStateAction<HeaderColor>>
}

const defaultThemeContext = {
  headerColor: HeaderColor.WHITE,
  setHeaderColor: () => { console.log("setHeaderNotDefined") }
}


export const ThemeContext = React.createContext<IThemeContext>(defaultThemeContext)

const ThemeProvider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  const [headerColor, setHeaderColor] = useState<HeaderColor>(HeaderColor.TRANSPARENT)
  const value = {
    headerColor,
    setHeaderColor
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
