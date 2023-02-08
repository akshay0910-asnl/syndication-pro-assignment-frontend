import { FunctionComponent } from "react";
import SectionArea from "../SectionArea/SectionArea";
import "./ClientList.scss";
const accenture = require("../../assets/images/accenture.webp");
const microsoft = require("../../assets/images/microsoft.webp");
const google = require("../../assets/images/google.webp");
const medianet = require("../../assets/images/medianet.webp");

const ClientList: FunctionComponent = () => {

    return <div className="clientList">
        <SectionArea>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="clientList__item">
                            <img src={accenture} alt="Logo" className="align-middle" />
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="clientList__item">
                            <img src={microsoft} alt="Logo" className="align-middle" />
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="clientList__item">
                            <img src={google} alt="Logo" className="align-middle" />
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="clientList__item">
                            <img src={medianet} alt="Logo" className="align-middle" />
                        </div>
                    </div>
                </div>
            </div>
        </SectionArea>
    </div>;
}

export default ClientList;