import './index.css'

const WordItem = props => {
  const {eachWord} = props
  const {word} = eachWord

  return (
    <li className="word-item-container">
      <p className="description">{word} :</p>
      <p className="description"> {word.length}</p>
    </li>
  )
}

export default WordItem
