import Todos from "./components/Todos";
import "./dist/css/index.css"
function App() {
  return (
    <div className="App container is-max-960" style = {{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Todos className="block"/>
    </div>
  );
}

export default App;
