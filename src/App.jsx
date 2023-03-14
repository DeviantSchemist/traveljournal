import './App.css';
import data from "./data";
import Card from "./Card";

function App() {
  const cards = data.map(item => {
    return (
      <Card {...item} />
    )
  })

  return (
    <div className="App">
      {cards}
    </div>
  )
}

export default App
