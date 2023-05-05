import React, { createContext, useState } from 'react'
const GlobalContext = createContext()
const AppContext = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState(false)
  return (
    <GlobalContext.Provider value={{ isSidebarOpen, setSidebar }}>
      {children}
    </GlobalContext.Provider>
  )
}
const useGlobalContext = () => {
  return React.useContext(GlobalContext)
}
export { AppContext, useGlobalContext }
