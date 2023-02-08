import { FunctionComponent } from "react";
import "./Footer.scss";

const Footer: FunctionComponent = () => {
    return <div className="Footer">
        <div className="Footer__widget">
            <div className="container">
                <div className="row">
                    <div className="footer-logo d-flex align-items-end">
                        <a className="mt-30" href="#"><img src="https://preview.uideck.com/items/start/assets/images/logo.svg" alt="Logo" data-pagespeed-url-hash="3683179054" /></a>
                        <ul className="Footer__widget-social mt-30 mb-0">
                            <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                            <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                            <li><a href="#"><i className="lni-instagram-original"></i></a></li>
                            <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="Footer__links">
            <div className="container">
                <div className="row">
                    <div className="Footer__links-group col-lg-2 col-md-4 col-sm-6">
                        <h6 className="Footer__links-category">
                            Company
                        </h6>
                        <ul className="Footer__links-link">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className="Footer__links-group col-lg-3 col-md-4 col-sm-6">
                        <h6 className="Footer__links-category">
                            Products & Services
                        </h6>
                        <ul className="Footer__links-link">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Developer</a></li>
                        </ul>
                    </div>
                    <div className="Footer__links-group col-lg-3 col-md-4 col-sm-6">
                        <h6 className="Footer__links-category">
                            Help & Support
                        </h6>
                        <ul className="Footer__links-link">
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="Footer__links-group col-lg-4 col-md-6 col-sm-7">
                        <h6 className="Footer__links-category">
                            Subscribe Newsletter
                        </h6>
                        <div className="Footer__links-input">
                            <input type="text" placeholder="Your Email"/>
                            <button type="submit"><i className="lni-angle-double-right"></i></button>
                        </div>
                        <div className="Footer__links-para">
                            Subscribe weekly newsletter to stay upto date. We don’t send spam.
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <div className="Footer__copyright row">
            <div className="Footer__copyright-text container">
                Template Crafted by <a rel="nofollow" href="https://uideck.com">UIdeck</a> - UI Powered by <a href="https://rebrand.ly/ayroui">AyroUI</a>
            </div>
        </div>
    </div>
}

export default Footer;

