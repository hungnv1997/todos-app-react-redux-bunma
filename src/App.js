import Todos from "./components/Todos";

function App() {
  return (
    <div className="App" style = {{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Todos/>
    </div>
  );
}

export default App;
