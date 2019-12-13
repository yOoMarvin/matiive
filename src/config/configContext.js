import React, { Component, createContext } from "react"

// Provider and Consumer are connected through their "parent" context
const { Provider, Consumer } = createContext()

// Provider will be exported wrapped in ConfigProvider component.
class ConfigProvider extends Component {
  // set a global nudge index
  // 0 = no nudge
  // 1 = threat nudge
  state = {
    // nudge: Math.floor(Math.random() * 2 + 0),
    nudge: 1,
    count: 0,
  }

  render() {
    return (
      <Provider
        value={{
          nudge: this.state.nudge,
          count: this.state.count,
          setCount: () => this.setState({ count: this.state.count + 1 }),
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { ConfigProvider }

// I make this default since it will probably be exported most often.
export default Consumer
