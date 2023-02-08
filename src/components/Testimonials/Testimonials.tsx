import { FunctionComponent, useState } from "react";
import SectionArea from "../SectionArea/SectionArea";
import SectionTitle from "../SectionTitle/SectionTitle";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import Testimonial from '../../types/testimonial';
import Slider from "react-slick";
import Carousel from "react-simply-carousel";
import './Testimonials.scss';

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

interface TestimonialsProps {
    testimonials: Testimonial[]
}

const Testimonials: FunctionComponent<TestimonialsProps> = (props) => {
    const { testimonials } = props;
    const [activeSlide, setActiveSlide] = useState(0);
    return (<div className="Testimonials">
        <SectionArea>
            <div className="Testimonials__top">
                <SectionTitle title="Our Testimonials" helperText="Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!" />
            </div>
            <div className="Testimonials__cards">
                <Carousel
                    containerProps={{
                        style: {
                            width: "100%",
                            justifyContent: "center",
                            userSelect: "text"
                        }
                    }}
                    activeSlideIndex={activeSlide}
                    activeSlideProps={{
                        style: {
                            background: "blue"
                        }
                    }}
                    onRequestChange={setActiveSlide}
                    forwardBtnProps={{
                        children: ">",
                        style: {
                            width: 60,
                            height: 60,
                            minWidth: 60,
                            alignSelf: "center",
                            display: "none"
                        }
                    }}
                    backwardBtnProps={{
                        children: "<",
                        style: {
                            width: 60,
                            height: 60,
                            minWidth: 60,
                            alignSelf: "center",
                            display: "none"
                        }
                    }}
                    dotsNav={{
                        show: true,
                        itemBtnProps: {
                            style: {
                                height: 16,
                                width: 16,
                                borderRadius: "50%",
                                border: 0
                            }
                        },
                        activeItemBtnProps: {
                            style: {
                                height: 16,
                                width: 16,
                                borderRadius: "50%",
                                border: 0,
                                background: "black"
                            }
                        }
                    }}
                    itemsToShow={2}
                    speed={400}>
                    {testimonials.map((testimonial, index) => (<TestimonialsCard key={index} testimonial={testimonial} />))}
                </Carousel>
            </div>
        </SectionArea>
    </div>);
}

export default Testimonials;