import { FunctionComponent } from "react";
import SectionArea from "../SectionArea/SectionArea";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./HeadLine.scss";

const HeadLine: FunctionComponent = () => {
    //const elementRef = useRef<LegacyRef<HTMLDivElement> | undefined>();


    return (<div className="HeadLine">
        <SectionArea>
            <div className="HeadLine__top">
                <SectionTitle title="Handcrafted Landing Page for Startups and SaaS Businesses" helperText="A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!" />
            </div>
            <div className="HeadLine__bottom text-center">
                <a className="connect-button" href="/">GET IN TOUCH</a>
                <a className="video-button" href="https://www.youtube.com/watch?v=r44RKWyfcFw">WATCH THE VIDEO <i className="lni-play"></i></a>
            </div>    
        </SectionArea>
    </div>)
}

export default HeadLine;