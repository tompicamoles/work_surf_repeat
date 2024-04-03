
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';


function Root() {
  return(
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root;
