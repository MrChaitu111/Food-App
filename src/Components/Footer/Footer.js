import './Footer.css';
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
              <div className="footer" id="footer">
                  <div className="footer-content">
                      <div className="footer-content-left">
                          <h2>Chaitu</h2>
                          <p>Savor delicious dishes delivered fast to your door.</p>
                          <div className="footer-social-icons">
                              <img src={assets.facebook_icon} alt="facebook"/>
                              <img src={assets.twitter_icon} alt="twitter"/>
                              <img src={assets.linkedin_icon} alt="linkedin"/>
                          </div>
                      </div>
                  <div className="footer-content-center">
                      <h2>COMPANY</h2>
                          <ul>
                              <li> <a href='/'>Home</a></li>
                              <li>About us</li>
                              <li>Delivery</li>
                              <li>Privacy Policy</li>
                          </ul>
                  </div>
              <div className="footer-content-right">
                  <h2>Get In Touch</h2>
                       <ul>
                          <li> +91 0987654321</li>
                          <li> dchaitanya373@gmail.com</li>
                      </ul>
                  <div className="app-downlode-platforms">
                      <img src={assets.play_store} alt="playstore-app"/>
                      <img src={assets.app_store} alt="appstore-app"/>
                  </div>
              </div>
          </div>
          <hr/>
          <p className="footer-copyright"> Copy Right 2025 &copy; dchaitanya373@gmail.com All Rights Reserved</p>
      </div>
  )
}

export default Footer