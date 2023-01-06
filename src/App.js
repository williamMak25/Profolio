
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/header';
import HomePage from './component/Home/home';
import { Projects } from './component/project/project';


function App() {



  return (
    <div className="App">
  <BrowserRouter>
        <Header/>
      <Routes>
          <Route path='/' element ={<HomePage/>}/>
          <Route path='/project' element={<Projects/>}/>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
