import { FunctionComponent } from "react";
import "./CallToAction.scss";
const callToAction = require('../../assets/images/callToAction.webp');

const CallToAction: FunctionComponent = () => {

    return <div className="callToAction d-flex">
        <div className="callToAction__image callToAction__flex-item">
            <img src={callToAction} alt="Logo" />
        </div>
        <div className="callToAction__info callToAction__flex-item">
            <div className="callToAction__info-container text-center">
                <div className="callToAction__info-title text-center">
                    Curious to Learn More? Stay Tuned
                </div>
                <div className="callToAction__info-text text-center">
                    You let us know whenever you want us to update anything or think something can be optimised.
                </div>
                <div className="callToAction__input">
                    <i className="lni-envelope"></i>
                    <input type="text" placeholder="john@email.com" />
                    <button type="submit" className="action-button">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>;
}

export default CallToAction;