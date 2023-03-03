import {Component} from 'react'

import {v4} from 'uuid'
import WordItem from './components/WordItem'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    userInput: '',
    wordLists: [],
  }

  onChangeUser = event => {
    this.setState({userInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {userInput} = this.state

    const newComment = {
      id: v4(),
      word: userInput,
    }
    this.setState(prevState => ({
      wordLists: [...prevState.wordLists, newComment],
      userInput: '',
    }))
  }

  getRenderImage = () => (
    <div className="image-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
        alt="no user inputs"
      />
    </div>
  )

  render() {
    const {userInput, wordLists} = this.state
    console.log(wordLists.wordCount)

    return (
      <div className="app-container">
        <div className="home-container">
          <div className="left-container">
            <h1 className="heading">Count the characters like a Boss...</h1>
            <div className="display-container">
              {wordLists.length === 0
                ? this.getRenderImage()
                : wordLists.map(eachWord => (
                    <WordItem key={eachWord.id} eachWord={eachWord} />
                  ))}
            </div>
          </div>
          <div className="right-container">
            <h1 className="heading-right">Character Counter</h1>
            <form className="input-container" onSubmit={this.onAddComment}>
              <input
                type="text"
                className="user-input"
                placeholder="Enter the Characters here"
                onChange={this.onChangeUser}
                value={userInput}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
