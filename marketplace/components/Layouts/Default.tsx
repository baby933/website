import { useState, useEffect } from 'react'
import Nav from 'components/Nav/index'
import Footer from 'components/Footer/index'

type Props = {
  hideHeader?: boolean
  hideFooter?: boolean
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const { hideHeader = false, hideFooter = false, children } = props
  const [darkMode, setDarkMode] = useState<boolean>(true)

  useEffect(() => {
   
    const isDarkMode = localStorage.getItem('fonosterDarkMode')

    if (isDarkMode) {
      setDarkMode(isDarkMode === 'true')
      document.documentElement.className = isDarkMode === 'true' ? 'dark' : ''
    } else {
      setDarkMode(true)
      document.documentElement.className = 'dark';
    }
  }, [])

  const updateTheme = (isDarkMode: boolean) => {
    document.documentElement.className = isDarkMode ? 'dark' : ''
    setDarkMode(isDarkMode)
  }

  return (
    <>
      {!hideHeader && <Nav darkMode={darkMode} />}
      <div className="bg-white dark:bg-gray-800">
        <main>{children}</main>
      </div>
      {!hideFooter && <Footer darkMode={darkMode} updateTheme={updateTheme} />}
    </>
  )
}

export default DefaultLayout
