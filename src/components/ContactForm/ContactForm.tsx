import { FunctionComponent } from "react";
import SectionArea from "../SectionArea/SectionArea";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./ContactForm.scss";

const ContactForm: FunctionComponent = () => {
    return <SectionArea className="contactForm">
        <div>
            <div className="text-center contactForm__titleSection">
                <SectionTitle title="Get in touch" helperText="Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!" />
            </div>
        </div>
        <div className="contactForm__form">
            <div className="contactForm__formRow d-flex mt-30">
                <div className="contactForm__formInput">
                    <input type="text" placeholder="Name" />
                </div>
                <div className="contactForm__formInput">
                    <input type="text" placeholder="Email" />
                </div>
            </div>
            <div className="contactForm__formRow d-flex mt-30">
                <div className="contactForm__formInput">
                    <input type="text" placeholder="Text" />
                </div>
                <div className="contactForm__formInput">
                    <input type="text" placeholder="Phone" />
                </div>
            </div>
            <div className="contactForm__formRow d-flex mt-30">
                <div className="contactForm__formInput">
                    <textarea placeholder="Message"/>
                </div>   
            </div>
            <div className="contactForm__formRow d-flex mt-30 justify-content-center">
                <button type="submit" className="contactForm__form-submit action-button">Send Message</button>
            </div>
        </div>
    </SectionArea>;
}

export default ContactForm;