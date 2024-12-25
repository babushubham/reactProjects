import { useState } from 'react'
import useTheme, { ThemeContext,ThemeProvider } from './Context/ThemeContext'
import { useEffect } from 'react'
import ToggleBtn from './component/Toggle'
import Card from './component/Card'

function App() {
  const [themeMode,setThemeMode] = useState('light')

const LightTheme = ()=> {
  setThemeMode("light")
}
const DarkTheme = ()=> {
  setThemeMode("dark")
}

//actual change in theme

useEffect(()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(themeMode)
},
[themeMode])

  return (
<ThemeProvider value={{ themeMode , DarkTheme,LightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ToggleBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
