import './HeroSection.css';
import vibratingHeadphoneImage from "../../assets/vibrating-headphone.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div>
        <h1>100 Thousand songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={vibratingHeadphoneImage} width={212} alt="headphones" />
      </div>
    </div>
  );
};

export default HeroSection;
