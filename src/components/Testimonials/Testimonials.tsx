import { FunctionComponent } from "react";
import SectionArea from "../SectionArea/SectionArea";
import SectionTitle from "../SectionTitle/SectionTitle";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import Testimonial from '../../types/testimonial';
import AliceCarousel from 'react-alice-carousel';
import './Testimonials.scss';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


interface TestimonialsProps {
    testimonials: Testimonial[]
}

const Testimonials: FunctionComponent<TestimonialsProps> = (props) => {
    const { testimonials } = props;
    const items = testimonials.map((testimonial, index) => (<TestimonialsCard key={index} testimonial={testimonial} />))
    //const [activeSlide, setActiveSlide] = useState(0);
    return (<div className="Testimonials">
        <SectionArea>
            <div className="Testimonials__top">
                <SectionTitle title="Our Testimonials" helperText="Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!" />
            </div>
            <div className="Testimonials__cards">
                {/* <Carousel
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
                    
                </Carousel> */}
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                />
            </div>
        </SectionArea>
    </div>);
}

export default Testimonials;