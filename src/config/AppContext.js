import React, { useState } from "react"

const AppContext = React.createContext([{}, () => {}])

const AppProvider = props => {
  const [state, setState] = useState({ nudge: 0 })
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
