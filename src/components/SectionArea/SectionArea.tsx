import { FunctionComponent } from "react";
import "./SectionArea.scss";
import classNames from "classnames";

interface SectionAreaProps {
    children: string | JSX.Element | JSX.Element[];
    className?:string;
}

const SectionArea: FunctionComponent<SectionAreaProps> = (props) => (<div className={classNames("sectionArea","container",`${props.className || ''}`)}>{props.children}</div>);

export default SectionArea;

