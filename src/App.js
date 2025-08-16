import { useNavigate } from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">👤 LW User Management System</h1>
        <p className="sub-title">Manage Users with easily user interface. </p>
        <button className='user-button' onClick={() => navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
