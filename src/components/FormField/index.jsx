import {Container,LinksContainer}  from "../FormField/Form.styles";


export default function Form() {
  

  return (
    <>
    <Container>
      <input placeholder="Shorten a link here..."/>
      <button>Shorten it!</button>
    </Container>
    <LinksContainer>
        
    </LinksContainer>
    </>
  );
}