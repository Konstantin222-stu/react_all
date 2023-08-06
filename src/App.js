import "./App.css"
import Inputch from "./components/Inputch/Inputch";
import Types from "./components/Types/Types";
import Counter from "./components/Counter/Counter";
import Circlech from "./components/Circlech/Circlech";
import Circle from "./components/Circle/Circle";
import Messages from "./components/Messages/Messages";
import Stopwatch from "./components/Stopwatch/Stopwatch";

function App() {
          

    return (
            <div>
              <Counter/>
              <Types/>
              <Inputch/>
              <Circlech/>
              <Circle/>
              <Messages/>
              <Stopwatch/>
            </div>
            
          );
}

export default App;
