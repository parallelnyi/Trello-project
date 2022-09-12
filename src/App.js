import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage'
import RegisterPage from './components/pages/RegisterPage'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
  
    <Routes>
      <Route path='/HomePage' element={<HomePage/>} />
      <Route path='/' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
    </Routes>
  
  );
}

export default App;
