import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/pages/NavBar';
import EmployeeOfTheMonth from './components/pages/EmployeeOfTheMonth';
import Contest from './components/pages/Contest';
import Votes from './components/pages/Votes';
import CEMWinners from './components/pages/CEMWinners';
import sampleData from './sampleData.json'; //YNASC samples to delete

const sampleDataFields = {
  _id: "Id",
  name: "Name",
  votes: "Votes"
}

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/">Home</Route>
          <Route path="/employeeofthemonth" element={<EmployeeOfTheMonth/>}/>
          <Route path="/contest" element={<Contest data={sampleData} sampleDataFields={sampleDataFields}/>}/>
          <Route path="/votes" element={<Votes/>}/>
          <Route path="/cemwinners" element={<CEMWinners/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;