import './Footer.css'
import {Link} from 'react-router-dom'

import logo1 from './ThateLogo.png';
function Footer() {
    return (
        <footer className='footer'>
           <div className="footer-logo">
        <img src= {logo1} alt="Company Logo" className="footer-logo-img" />
        <p> Thate Electrical is focused on and committed to delivering electrical quality products and projects ,on time to an agreed budget.</p>
      </div>
      
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to='/Home'> Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Services">Services</Link></li>
          <li><Link to="/Request">Request a Quote</Link></li>
          <li><Link to='/contactUs'> Contact Us</Link></li>
        </ul>
      </div>
      
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p><i className="fas fa-map-marker-alt"></i> Rainbow Empowered Industries Building, No.55 Rietfontein Rd, Primrose, Johannesburg, 1401</p>
        <p><i className="fas fa-envelope"></i> sales@thate.co.za</p>
        <p><i className="fas fa-phone-alt"></i> +27 82 442 5771</p>
        <p><i className="fas fa-tty"></i> 011 074 5999</p>
        <p><i className="fas fa-globe"></i> www.thateelectricalsupplies.co.za</p>
      </div>
      
      <div className="footer-hours">
        <h4>Opening Hours</h4>
        <table className="hours-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mon - Fri</td>
              <td>8:00 AM - 5:00 PM</td>
            </tr>
            <tr>
              <td>Sat </td>
              <td>8:00 AM - 12:00 PM</td>
            </tr>
            <tr>
              <td>Sun </td>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer-copyright">
    <p>&copy; 2024 Thate Electrical Supplies. All rights reserved.</p>
  </div>
        </footer>
    )
}

export default Footer;