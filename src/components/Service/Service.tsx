import { FunctionComponent } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionArea from "../SectionArea/SectionArea";
import "./Service.scss";
const services = require("../../assets/images/services.webp");


const Service: FunctionComponent = () => {
    return <div className="Service">
        <SectionArea>
            <SectionTitle title="Crafted For" helperText="Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!" />
            <div className="Service__contents">
                <div className="Service__points">
                    <div className="Service__point">
                        <div className="Service__content">
                            <i className="lni-bolt"></i>
                            <div className="Service__content-info">
                                <div className="Service__content-title">Startup</div>
                                <div className="Service__content-text">Short description for the ones <br></br> who look for something new.</div>
                            </div>
                        </div>
                    </div>
                    <div className="Service__point"><div className="Service__content">
                        <i className="lni-bar-chart"></i>
                        <div className="Service__content-info">
                            <div className="Service__content-title">SaaS Business</div>
                            <div className="Service__content-text">Short description for the ones <br></br> who look for something new.</div>
                        </div>
                    </div></div>
                    <div className="Service__point"><div className="Service__content">
                        <i className="lni-brush"></i>
                        <div className="Service__content-info">
                            <div className="Service__content-title">Agency</div>
                            <div className="Service__content-text">Short description for the ones <br></br> who look for something new.</div>
                        </div>
                    </div></div>
                    <div className="Service__point"><div className="Service__content">
                        <i className="lni-bulb"></i>
                        <div className="Service__content-info">
                            <div className="Service__content-title">App Landing</div>
                            <div className="Service__content-text">Short description for the ones <br></br> who look for something new.</div>
                        </div>
                    </div></div>
                </div>

            </div>

        </SectionArea>
        <div className="Service__image">
            <div className="Service__image-container">
                <img src={services} alt="Services" />
            </div>
        </div>
    </div>
}

export default Service;

