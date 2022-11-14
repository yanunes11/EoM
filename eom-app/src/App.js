import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/pages/NavBar';
import EmployeeOfTheMonth from './components/pages/EmployeeOfTheMonth';
import Contest from './components/pages/Contest';
import Votes from './components/pages/Votes';
import CEMWinners from './components/pages/CEMWinners';
import sampleData from './sampleData.json'; //YNASC samples to delete
import NewContest from './components/pages/NewContest';

const sampleDataFields = {
  votingStartDate: "Voting Start Date",
  votingEndDate: "Voting End Date",
  name: "Name",
  description: "Description",
  state: "State"
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
          <Route path="/newcontest" element={<NewContest/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;