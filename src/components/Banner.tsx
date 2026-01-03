import React, { useState } from "react";

interface Props {
  type: 'complete' | 'error' | 'svg' | 'image' | 'loading' | 'regular';
  message: string;
  position: 'center' | 'top' | 'bottom';
}

const Banner: React.FC<Props> = ({ type, message }) => {
  const [uiType, setUiType] = useState("");

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
      {uiType === "UI1" && <div>UI1</div>}
      {uiType === "UI2" && <div>UI2</div>}
      {uiType === "UI3" && <div>UI3</div>}
      {uiType === "UI4" && <div>UI4</div>}
      {uiType === "UI5" && <div>UI5</div>}
      {uiType === "UI6" && <div>UI6</div>}
    </div>
  );
};

export default Banner;
