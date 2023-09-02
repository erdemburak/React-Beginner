import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new ToDo List';
  const likes = 50;
  const link = "http://www.google.com";


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>{likes}</p>
        <p>{ "Hello hello"}</p>
        <p>{100} </p>

        <a href={link}>Google</a>
      </div>

    </div>
  );
}

export default App;
