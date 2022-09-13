import { useState,useEffect } from "react";
import { Navbar, Container,  Nav } from "react-bootstrap"
export const NavBar =()=>{

    const[activeLink,setActiveLink] = useState('home');
    const[scrolled,setscrolled] = useState(false);
    useEffect(() => {
      const onScroll=()=>{
if(window.scrollY>50){
    setscrolled (true);
}else{
    setscrolled (false)
}
      }
    
  window.addEventListener("scroll",onScroll);  
  return ()=>window.removeEventListener("scroll",onScroll) 
    },[])
    
    return(
        <Navbar  expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
          <div className="social-icons">
           <a href="#"></a>
           <a href="#"></a>
           <a href="#"></a>

        </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}