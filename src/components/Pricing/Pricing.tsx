import { FunctionComponent } from "react";
import PricingCard from "../PricingCard/PricingCard";
import SectionArea from "../SectionArea/SectionArea";
import SectionTitle from "../SectionTitle/SectionTitle";
import './Pricing.scss';

const Pricing: FunctionComponent = () => {

    return (<div className="Pricing">
        <SectionArea>
            <div className="Pricing__top">
                <SectionTitle title="Our Pricing" helperText="Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!" />
            </div>
            <div className="Pricing__cards d-flex mt-50">
                <PricingCard priceType="basic" />
                <PricingCard priceType="pro" />
                <PricingCard priceType="enterprise" />
            </div>
        </SectionArea>
    </div>);
}

export default Pricing;