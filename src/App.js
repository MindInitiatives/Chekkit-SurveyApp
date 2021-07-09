import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home'
import Survey from './components/Survey'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        start: false
    }
  }
  
  commenceSurvey = () => {
    this.setState({
      start : !this.state.start
    })
  }
  render() {

    return (
      <Provider store={store}>
    <div className="quiz">
      { this.state.start ? <Survey /> : <Home start={this.commenceSurvey} />} 
    </div>
    </Provider>
    )
  }
}

export default App;
