import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom' 
export const Navbar = () => {
  return (
    <Nav >
      <Nav.Item>
        <Nav.Link>
            <Link to='/' >Home</Link>  
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link>
        <Link to='posts' >Posts</Link>
      </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link>
        <Link to='users' >Users</Link>
      </Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link>
        <Link to='photos' >Photos</Link>
      </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
