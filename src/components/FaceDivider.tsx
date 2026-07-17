import './FaceDivider.css';
import faceImage from '../assets/2.png';

export default function FaceDivider() {
  return (
    <section className="face-divider-section">
      <div className="face-divider-container">
        <img src={faceImage} alt="Central face detail" className="face-banner-image" />
      </div>
    </section>
  );
}
