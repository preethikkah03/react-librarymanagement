import './Header.css';
import {Link} from 'react-router-dom';


export default function Header()
{
    return( <div className= "container-fixed">
        <ul className="nav nav-tabs bg-dark" role="tablist">
      <li className="nav-item">
        
      </li>
      <li className="nav-item ">
      <Link to="/Home" className="nav-link text-warning" data-bs-toggle="tab" > Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/About" className="nav-link text-warning" data-bs-toggle="tab" > About</Link>
      </li>
     
   
      <li className="nav-item">
      <Link to="/PriceCard" className="nav-link text-warning" data-bs-toggle="tab" >Price Card </Link>
      </li>
      <li className="nav-item" >
      <form className="form-inline my-2 my-lg-0">
               <Link to="/Register"><button align="right" className="btn btn-warning submit-register" type="submit">Sign up</button></Link> 
               <Link to="/Login"><button align="right" className="btn btn-warning" type="submit">Login</button></Link> 
              </form>
   </li>
    </ul>
    
    </div>)
}