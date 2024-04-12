import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-content-container">
      <div>
        <h1 className="company-logo">Carbon Cell</h1>
      </div>

      <div className="footer-links">
        <h4 className="footer-heading">Resources</h4>
        <ul className="footer-unordered-list-container">
          <li>Blogs</li>
          <li>Introduction</li>
        </ul>
      </div>

      <div className="footer-links">
        <h4 className="footer-heading">Company</h4>
        <ul className="footer-unordered-list-container">
          <li>About Us</li>
          <li>Build with Us</li>
        </ul>
      </div>
    </div>
    <div className="copyright-text">© 2000-2023. All Rights Reserved</div>
  </div>
)

export default Footer
