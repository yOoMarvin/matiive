import React, { useState } from "react"
import firebase from "./firebase"

// init analytics and firestore
let db = firebase.firestore()

const AppContext = React.createContext([{}, () => {}])

const AppProvider = props => {
  // post to firestore with current data
  const postDataWithState = data => {
    db.collection("sandbox")
      .doc(state.id)
      .set({
        birthdate: data.birthdate,
        gender: data.gender,
        family: data.family,
        housing: data.housing,
        feedback: data.feedback,
        landingToInput: data.landingToInput,
        inputToChoice: data.inputToChoice,
        choiceToSubmit: data.choiceToSubmit,
        option: data.option,
        conversion: data.conversion,
        nudge: data.nudge,
        created: data.created,
      })
      .then(function() {
        console.log("Document successfully written!")
      })
      .catch(function(error) {
        console.error("Error writing document: ", error)
      })
  }

  // generate nudge
  const generatedNudge = Math.floor(Math.random() * 2 + 0)

  // generate userID
  const userID = Math.random()
    .toString(36)
    .substr(2, 9)

  // context hook
  const [state, setState] = useState({
    postDataWithState: postDataWithState,
    birthdate: null,
    gender: null,
    family: null,
    housing: null,
    feedback: null,
    landingToInput: false,
    inputToChoice: false,
    choiceToSubmit: false,
    option: null,
    conversion: false,
    id: userID,
    nudge: generatedNudge,
    created: new Date(),
  })

  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
