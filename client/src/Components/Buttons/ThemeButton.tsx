import React, { useState, useEffect } from 'react'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import '../../App.css'

export default function ThemeButton() {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      className='opacity-75 text-xl text-white p-1 hover:opacity-75 hidden md:inline-block'
      onClick={handleThemeSwitch}
    >
      {theme === 'dark' ? <MdOutlineDarkMode /> : <MdDarkMode />}
    </button>
  )
}
