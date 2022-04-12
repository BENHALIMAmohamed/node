// import logo from './logo.svg';
import './App.css';
import mercedes from "./image/my-visit-to-he-mercedes.jpg"
import bmw from "./image/saga-bmw-m.jpg"
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 class="title red">Your name here</h1>

<br />

<img src={mercedes} alt="" />

<br />

<img src={bmw} alt="" />

</div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/JgOvtsWsW5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
