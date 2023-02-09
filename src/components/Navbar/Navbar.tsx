import { FunctionComponent, useEffect } from "react";
import "./Navbar.scss";

const Navbar: FunctionComponent = () => {
    //const elementRef = useRef<LegacyRef<HTMLDivElement> | undefined>();

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onScroll = () => {
        if (window.scrollY > 0)
            document.getElementById("TopNavbar")?.classList.add('sticky');
        else
            document.getElementById("TopNavbar")?.classList.remove('sticky')
    }

    return (<div className="navbar  d-flex" id="TopNavbar">
        <div className="container">
            <div className="navbar__brand">
                <a className="mt-30" href="/"><img src="https://preview.uideck.com/items/start/assets/images/logo.svg" alt="Logo" data-pagespeed-url-hash="3683179054" /></a>
            </div>
            <ul className="navbar__sections">
                <li><a href="/">HOME</a></li>
                <li><a href="/">SERVICES</a></li>
                <li><a href="/">PRICING</a></li>
                <li><a href="/">TESTIMONIAL</a></li>
            </ul>
            <ul className="navbar__socials">
                <li><span>FOLLOW US</span></li>
                <li><a href="/"><i className="lni-facebook-filled"></i></a></li>
                <li><a href="/"><i className="lni-twitter-original"></i></a></li>
                <li><a href="/"><i className="lni-instagram-original"></i></a></li>
                <li><a href="/"><i className="lni-linkedin-original"></i></a></li>
            </ul>
        </div>
    </div>);
}

export default Navbar;