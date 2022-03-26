import Container  from "../Section/Section.styles";
// LOGOS :
import brandIcon from '../../images/icon-brand-recognition.svg' 
import detailedIcon from '../../images/icon-detailed-records.svg' 
import custumizableIcon from '../../images/icon-fully-customizable.svg' 


export default function Section() {
  

  return (
    <Container>
      <div className="section-info">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

      </div>
      <div className="section-cards">
        <div className="section-card">
          <img src={brandIcon} alt="logo"/>
          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className="section-card">
          <img src={detailedIcon} alt="logo"/>
          <h3>Detailed Records</h3>
          <p> Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
        </div>
        <div className="section-card">
          <img src={custumizableIcon} alt="logo"/>
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
        </div>
      </div>
      <div className="section-footer">
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>
    </Container>
  );
}