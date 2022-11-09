import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import EmployeeOfTheMonth from './components/EmployeeOfTheMonth';
import Contents from './components/Contents';
import Votes from './components/Votes';
import CEMWinners from './components/CEMWinners';


function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/">Home</Route>
          <Route path="/employeeofthemonth" element={<EmployeeOfTheMonth/>}/>
          <Route path="/contents" element={<Contents/>}/>
          <Route path="/votes" element={<Votes/>}/>
          <Route path="/cemwinners" element={<CEMWinners/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;