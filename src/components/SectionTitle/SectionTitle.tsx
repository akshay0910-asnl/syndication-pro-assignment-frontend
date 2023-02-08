import { FunctionComponent } from "react";
import "./SectionTitle.scss";

interface SectionTitleProps {
    title:string;
    helperText: string
}
 
const SectionTitle: FunctionComponent<SectionTitleProps> = (props) => {
    const { title, helperText } = props;
    return (<>
    <div className="sectionTitle">
        <div className="sectionTitle__title">{title}</div>
        <div className="sectionTitle__helperText">{helperText}</div>
    </div>
    </>);
}
 
export default SectionTitle;

