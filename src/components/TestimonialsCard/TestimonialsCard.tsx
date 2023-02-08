import { FunctionComponent } from "react";
import Testimonial from '../../types/testimonial';
import './TestimonialsCard.scss';

interface TestimonialsCardProps {
    testimonial: Testimonial
}

const TestimonialsCard: FunctionComponent<TestimonialsCardProps> = (props) => {
    const { testimonial } = props;
    console.log(testimonial);
    return <div className="TestimonialsCard">
        <div className="TestimonialsCard__image">
            <img src={testimonial.photoUrl || 'https://preview.uideck.com/items/start/assets/images/xauthor-4.jpg.pagespeed.ic.LIfPfIw1SL.webp'} />
        </div>
        <div className="TestimonialsCard__content">{testimonial.description} </div>
        <div className="TestimonialsCard__meta">
            <div className="TestimonialsCard__meta-author">{testimonial.name}</div>
            <div className="TestimonialsCard__meta-designation">{testimonial.post}</div>
        </div>
    </div>
}

export default TestimonialsCard;
