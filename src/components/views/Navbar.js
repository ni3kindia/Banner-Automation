
import { Navbar,Nav} from 'react-bootstrap';
import logo from '../../../src/logo.svg';
import '../../../src/App.css';
import UploadView from './UploadDesign';

import NotFound from './NotFound';
import Fashion from './Fashion';
import Freeatthree  from './Freeatthree';

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function NavbarMenu ()
{
    console.warn("UploadView---",UploadView)
    const logoCss={
        height: '10vmin',
        pointerEvents: 'none'
    }
    const disabledCursor= { 
        cursor: 'default'
      };
    return (<>
    <Router>
<Navbar expand="lg" variant="light" bg="info">

    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <img src={logo} className=" App-logo " style={logoCss} alt="logo" />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Nav.Link   > <Link to="/upload" style={disabledCursor}>Upload_Design</Link></Nav.Link>
        {/* <Nav.Link href="#link"></Nav.Link> */}
        <Nav.Link   > <Link to="/fashion" style={disabledCursor}>Fashion Banner</Link></Nav.Link>
       
        <Nav.Link   > <Link to="/freeatthree" style={disabledCursor}>Freeatthree Banner</Link></Nav.Link>
       
      </Nav>
    </Navbar.Collapse>

</Navbar>
<Routes>
{/* <Route path="*" element={<Navigate to ="/upload" />}/>
          <Route exact redirect="/upload" element={<UploadView/>}>
          </Route> */}
          <Route exact path="/upload" element={<UploadView/>}>
              </Route>
              <Route exact path="/fashion" element={<Fashion/>}>
              </Route>
              <Route exact path="/freeatthree" element={<Freeatthree/>}>
              </Route>
          <Route exact path="/*" element={<NotFound/>}>
          </Route>
        </Routes></Router></>)
}
export default NavbarMenu