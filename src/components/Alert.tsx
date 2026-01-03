import * as React from "react";

export interface Props {
  type: 'complete' | 'error' | 'svg' | 'image' | 'loading' | 'regular';
  description: string;
  message: string;
}

const Alert: React.FC<Props> = ({ type, message, description }) => {
  const [uiType, setUiType] = React.useState("");

  if (type === "complete") {
    setUiType("UI1");
  } else if (type === "error") {
    setUiType("UI2");
  } else if (type === "svg") {
    setUiType("UI3");
  } else if (type === "image") {
    setUiType("UI4");
  } else if (type === "loading") {
    setUiType("UI5");
  } else if (type === "regular") {
    setUiType("UI6");
  }

  return (
    <div>
      {uiType === "UI1" && }
      {uiType === "UI2" && }
      {uiType === "UI3" && }
      {uiType === "UI4" && }
      {uiType === "UI5" && }
      {uiType === "UI6" && }
    </div>
  );
};

export default Alert;
