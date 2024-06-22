import Header from "./components/Header";
import TaskTracking from "./components/TaskTracking";
import './App.css'

function App() {
  return (
    <div className="App">
        <Header/>
        <TaskTracking/>
        <TaskTracking/>
    </div>
  );
}

export default App;
