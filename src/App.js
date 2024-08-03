import './index.css';
// import Sidebar from './Components/Sidebar';
import Daskboard from './Components/Daskboard';
import Topbar from './Components/Topbar';
import SideNav from './Components/Sidebar';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
          {/* <div className='col-md-2'><Sidebar/></div> */}
          
          <div className='col-md-12'> 
            <SideNav/>
            <Topbar/>
            <Daskboard/>
          </div>
      </div>
    </div>
  );
}

export default App;
