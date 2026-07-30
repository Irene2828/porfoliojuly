import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Iryna Sheremeta. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
