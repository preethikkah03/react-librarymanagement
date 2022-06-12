//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import PriceCard from './components/PriceCard/PriceCard';
import AddBook from './components/AddBook/AddBook';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
//import './assets/font-awesome/css/font-awesome.min.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function App() 
{
  return (<div className="App">
   
   <BrowserRouter>
          <Header/> 
         
           <Routes>
            <Route path='/About' element={<About/>}/>
            <Route path='/PriceCard' element={<PriceCard/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/AddBook' element={<AddBook/>}/>
              
          
          </Routes>
          </BrowserRouter>
           </div> )}


export default App;
