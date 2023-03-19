import './App.css';
import data from "./data";
import Card from "./Card";
import NavBar from "./NavBar";

function App() {
  const cards = data.map((item, index) => <Card key={index} {...item} />);

  return (
    <div className="App h-screen">
      <NavBar />
      <main className='flex flex-col'>
        {cards}
      </main>
    </div>
  )
}

export default App
