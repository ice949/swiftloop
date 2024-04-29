import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Dashboard from './Pages/Dashboard/Dashboard'
import './App.css';
import Autheticatation from './Pages/Home/Auth';
import SignupPage from './Pages/Home/SignupPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Autheticatation />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;