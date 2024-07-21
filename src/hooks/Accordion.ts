import { createContext, Dispatch, SetStateAction, useState } from "react";

type AccordionContextType = {
  activeKey: string,
  setActiveKey: Dispatch<SetStateAction<string>>,
}

const AccordionContext = createContext<AccordionContextType>({activeKey: "", setActiveKey: () => null});

const useAccordion = (defaultActiveKey: string = "") => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  return { activeKey, setActiveKey };
};

export {
  AccordionContext,
  useAccordion,
};
