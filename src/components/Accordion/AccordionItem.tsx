import { useContext } from "react";
import { AccordionContext } from "../../hooks/Accordion";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import SvgIcon from "../SvgIcon";

type AccordionItemProps = {
  itemKey: string,
  title: string,
  content: string,
}

const AccordionItem = (props: AccordionItemProps) => {
  const {
    itemKey,
    title,
    content,
  } = props;
  const { activeKey, setActiveKey } = useContext(AccordionContext);

  return (
    <div className={`accordion-item-container ${activeKey === itemKey ? "active" : ""}`}>
      <div
        className="accordion-item-header"
        onClick={() => activeKey === itemKey ? setActiveKey("") : setActiveKey(itemKey)}
      >
        <p>{title}</p>
        <div className="icon-container">
          {
            activeKey === itemKey
              ? <SvgIcon Svg={IoMdClose} className="svg-icon" />
                : <SvgIcon Svg={AiOutlinePlus} className="svg-icon" />
          }
        </div>
      </div>
      <div className="accordion-item-body">
        <p dangerouslySetInnerHTML={{__html: content}}></p>
      </div>
    </div>
  );
};

export default AccordionItem;
