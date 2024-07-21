import { ReactNode } from "react";
import { AccordionContext, useAccordion } from "../../hooks/Accordion";
import AccordionItem from "./AccordionItem";
import "../../styles/Accordion.scss";

type AccordionProps = {
  children?: ReactNode,
  defaultActiveKey?: string,
}

const Accordion = (props: AccordionProps) => {
  const {
    children,
    defaultActiveKey,
  } = props;
  const { activeKey, setActiveKey } = useAccordion(defaultActiveKey);

  return (
    <AccordionContext.Provider value={{ activeKey, setActiveKey }}>
      <div className="accordion-container">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Object.assign(Accordion, {
  Item: AccordionItem,
});
