import React from 'react'

function App() {
  return (
    <div>
      爸爸
      <Son />
    </div>
  )
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      n: 0,
      m: 100,
    }
  }
  addN() {
    this.setState({ n: this.state.n + 1 })
  }
  subM() {
    this.setState({ m: this.state.m - 1 })
  }
  render() {
    return (
      <div className="Son">
        儿子:n {this.state.n}
        儿子:m {this.state.m}
        <button onClick={() => this.addN()}>点我n+1</button>
        <button onClick={() => this.subM()}>点我m-1</button>
        <GrandSon />
      </div>
    )
  }
}

const GrandSon = () => {
  const [n, setN] = React.useState(0)
  const [m, setM] = React.useState(100)
  return (
    <div className="GrandSon">
      孙子:n {n}
      孙子:m {m}
      <button onClick={() => setN(n + 1)}>点我n+1</button>
      <button onClick={() => setM(m - 1)}>点我m-1</button>
    </div>
  )
}

export default App
