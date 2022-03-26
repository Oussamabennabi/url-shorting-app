import Container  from "../Navbar/Navbar.styles";

// assets :
import Logo from '../../images/logo.svg'

export default function Navbar() {
  

  return (
    <Container>
      <img src={Logo} alt="logo"/>
      <div className="left-Links">
        <a href="#" className="link">Features</a>
        <a href="#" className="link">Pricing</a>
        <a href="#" className="link">Resources</a>
      </div>
      <div className="right-Links">
        <a href="#" className="link">Login</a>
        <button >Sign Up</button>
      </div>
      
    </Container>
  );
}