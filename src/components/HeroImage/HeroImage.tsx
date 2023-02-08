import { FunctionComponent } from "react";
import HeadLine from "../HeadLine/HeadLine";
import Navbar from "../Navbar/Navbar";


import "./HeroImage.scss";

const HeroImage: FunctionComponent = () => {
    return (<div className="heroImage bg-cover">
        <Navbar/>
        <HeadLine/>
    </div>);
}
 
export default HeroImage;