import React, { useState } from "react"
import firebase from "./firebase"

// init analytics and firestore
let db = firebase.firestore()

const AppContext = React.createContext([{}, () => {}])

const AppProvider = props => {
  // post to firestore
  const postData = () => {
    db.collection("sandbox")
      .add({
        nudge: state.nudge,
      })
      .then(function() {
        console.log("Document successfully written!")
      })
      .catch(function(error) {
        console.error("Error writing document: ", error)
      })
  }

  const [state, setState] = useState({ nudge: 0, postData: postData })

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
