import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/Netflix_Logo.png'
import { CiSearch } from "react-icons/ci";

function NavScrollExample() {
  return (
    <Navbar variant="dark" expand="lg" id='navigation' className="bg-black">
      <Container fluid>
        <Navbar.Brand href="/" className='navigation-logo'>
          <img id='logo-img' width={100} src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            id='navigation-all-item'
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <Nav.Link id='navigation-item' href="/">홈</Nav.Link>
              <Nav.Link id='navigation-item' href="/">시리즈</Nav.Link>
              <Nav.Link id='navigation-item' href="/movies">영화</Nav.Link>
              <Nav.Link id='navigation-item' href="/">NEW! 요즘 대세 콘텐츠</Nav.Link>
              <Nav.Link id='navigation-item' href="/">내기 찜한 리스트</Nav.Link>
              <Nav.Link id='navigation-item' href="/">언어별로 찾아보기</Nav.Link>
          </Nav>
          <Form id='navigation-input' className="d-flex">
          <div id='input-group'>
            <button id='search-icon'>
              <CiSearch id='search-icon' color='white' />
            </button>
              <Form.Control
                id='form'
                type="search"
                placeholder="제목, 사람, 장르"
                className="me-2"
                aria-label="Search"
              >
              </Form.Control>
              <Button id='input-button' variant="outline-danger">
                <p id='input-check'>확인</p>
              </Button>
          </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;