import { Router } from "@reach/router"
import { observer } from "mobx-react";
import Home from './pages/Home'
import Team from "./pages/Team";
import { useStores } from "./stores/use-store";

import './styles/App.scss';

const App = observer(() => {
  const { gameStore } = useStores();
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Team path="team" />
      </Router>
    </div>
  );
})

export default App;
