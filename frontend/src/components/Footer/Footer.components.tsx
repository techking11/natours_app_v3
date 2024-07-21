import LogoGreen from "../../assets/img/logo-green.png"

export default function Footer() {
  return <div className="footer">
    <div className="footer__logo">
      <img src={LogoGreen} alt="Natours logo" />
    </div>
    <ul className="footer__nav">
      <li><a href="/about-us">About us</a></li>
      <li><a href="/download">Download apps</a></li>
      <li><a href="/guide">Become a guide</a></li>
      <li><a href="/careers">Careers</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <p className="footer__copyright">
      &copy; by Nay Myo Aung - Software Engineer. All rights reserved.
    </p>
  </div>
}