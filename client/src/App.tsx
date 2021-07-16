import { Router } from "@reach/router"
import { observer } from "mobx-react";
import Home from './pages/Home/Home'
import Team from "./pages/Team";
import TestDay from "./pages/TestDay/TestDay";

import './styles/App.scss';

const App = observer(() => {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Team path="team" />
        <TestDay path="testday" />
      </Router>
    </div>
  );
})

export default App;
