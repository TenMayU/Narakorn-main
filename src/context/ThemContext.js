"use client"
import { createContext } from "react"
import { useState } from "react"
export const ThemContext = createContext()

export const ThemProvider = ({children})=>{
    const [mode, setMode] = useState("light")
    const toggle =()=>{
        setMode((prev) => (prev ==="light" ? "dark" : "light"))
    }
    return (
    <ThemContext.Provider value={{toggle,mode}}>
    <div className={`Them ${mode}`}>
    {children}
    </div>
    
    </ThemContext.Provider>
    );
}