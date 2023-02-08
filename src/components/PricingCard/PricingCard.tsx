import { FunctionComponent } from "react";
import Card1 from '../../assets/svg/card1.svg';
import Card2 from '../../assets/svg/card2.svg';
import Card3 from '../../assets/svg/card3.svg';
import BalloonPro from '../../assets/svg/balloonPro.svg';
import FlowerEnterprise from '../../assets/svg/flowerEnterprise.svg';
import "./PricingCard.scss";

interface PriceCardProps {
    priceType: string
}


const PricingCard: FunctionComponent<PriceCardProps> = (props) => {

    const getBottomSvg = () => {
        const { priceType } = props;
        switch (priceType) {
            case 'basic':{
                return Card1;
            }
            case 'pro':{
                return Card2;
            }
            case 'enterprise':{
                return Card3;
            }
            default: {
                return Card1;
            }
        }
    }

    const getTopSectionForBasicPriceType = () => {
        return <>
            <div className="PricingCard__title text-center basic">
                Basic
            </div>
            <div className="PricingCard__pricing text-center">
                <div className="PricingCard__pricing-amount">$199</div>
                <div className="PricingCard__pricing-time">per year</div>
            </div>
        </>
    }

    const getTopSectionForEnterprisePriceType = () => {
        return <>
            <div className="PricingCard__title enterprise text-right">
                Enterprise
            </div>
            <div className="PricingCard__pricing text-right">
                <div className="PricingCard__pricing-amount">$799</div>
                <div className="PricingCard__pricing-time">per year</div>
            </div>
            <div className="PricingCard__priceFlower">
                <img src={FlowerEnterprise} alt="Flower"/>
            </div>
        </>
    }

    const getTopSectionForProPriceType = () => {
        return <>
            <div className="PricingCard__title pro">
                Pro
            </div>
            <div className="PricingCard__pricing">
                <div className="PricingCard__pricing-amount">$399</div>
                <div className="PricingCard__pricing-time">per year</div>
            </div>
            <div className="PricingCard__priceBalloon">
                <img src={BalloonPro} alt="Balloon"/>
            </div>
        </>
    }

    const getTopSection = () => {
        const { priceType } = props;
        switch (priceType) {
            case 'basic':{
                return getTopSectionForBasicPriceType();
            }
            case 'pro':{
                return getTopSectionForProPriceType();
            }
            case 'enterprise':{
                return getTopSectionForEnterprisePriceType();
            }
            default: {
                return getTopSectionForBasicPriceType();
            }
        }
    }

    
    return <div className="PricingCard">
        {getTopSection()}
        <div className="PricingCard__features">
            <ul className="PricingCard__featuresList">
                <li className="PricingCard__features-item">
                    <i className="lni-check-mark-circle"></i> Carefully crafted components
                </li>
                <li className="PricingCard__features-item">
                    <i className="lni-check-mark-circle"></i> Amazing page examples
                </li>
                <li className="PricingCard__features-item">
                    <i className="lni-check-mark-circle"></i> Super friendly support team
                </li>
                <li className="PricingCard__features-item">
                    <i className="lni-check-mark-circle"></i> Awesome support
                </li>
            </ul>
        </div>

        <div className="PricingCard__button">
            <button className="PricingCard__button-check action-button">GET STARTED</button>
        </div>
        <div className="PricingCard__banner">
            <img src={getBottomSvg()} className="App-logo" alt="logo" />
        </div>
    </div>;
}

export default PricingCard;