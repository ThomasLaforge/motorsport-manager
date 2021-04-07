import './App.scss';
import {Engineer} from 'motorsport-manager_model'

function App() {
  const engineer = new Engineer('Thomas', 'Laforge', new Date('March 4, 1992 11:30:00'))
  return (
    <div className="App">
      {engineer.getFullName()} a {engineer.getAge()} ans.
    </div>
  );
}

export default App;
