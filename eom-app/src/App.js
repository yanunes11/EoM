import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import EmployeeOfTheMonth from './components/EmployeeOfTheMonth';
import Contest from './components/Contest';
import Votes from './components/Votes';
import CEMWinners from './components/CEMWinners';
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