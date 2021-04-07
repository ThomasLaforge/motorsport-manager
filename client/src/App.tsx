import { Router } from "@reach/router"
import Home from './pages/Home'
import Team from "./pages/Team";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Team path="team" />
      </Router>
    </div>
  );
}

export default App;
