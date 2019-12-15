import React, { useState } from "react"
import firebase from "./firebase"

// init analytics and firestore
let db = firebase.firestore()

const AppContext = React.createContext([{}, () => {}])

const AppProvider = props => {
  // post to firestore
  const postData = () => {
    db.collection("sandbox")
      .doc(state.id)
      .set({
        birthdate: state.birthdate,
        gener: state.gender,
        family: state.family,
        housing: state.housing,
        feedback: state.feedback,
        LandingToInput: state.LandingToInput,
        InputToChoice: state.InputToChoice,
        ChoiceToSubmit: state.ChoiceToSubmit,
        option: state.option,
        conversion: state.conversion,
        nudge: state.nudge,
        created: state.created,
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
    postData: postData,
    birthdate: null,
    gender: null,
    family: null,
    housing: null,
    feedback: null,
    LandingToInput: false,
    InputToChoice: false,
    ChoiceToSubmit: false,
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
