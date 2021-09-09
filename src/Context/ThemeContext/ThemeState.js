import React, { useState,useEffect } from 'react'
import ThemeContext from './ThemeContext';
const ThemeState = (props) => {
    const [isDark, setisDark] = useState(false);

    useEffect(() => {
        
            if(!isDark){
                document.body.classList.remove('dark');
            }else{
                document.body.classList.add('dark')
            }
        
      
    }, [isDark])
    

    const setTheme = () =>{
        if(isDark){
            setisDark(false)
        }else{
            setisDark(true)
        }
    }
    
    return (
        <ThemeContext.Provider value={{
            isDark,
            setTheme,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState;
