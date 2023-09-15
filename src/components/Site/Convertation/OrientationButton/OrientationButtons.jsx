import React, { useRef, useState } from "react";
import OrientationButton from "./OrientationButton";

const OrientationButtons = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="flex gap-[10px]">
      <OrientationButton type={"portrait"} />
      <OrientationButton type={"landscape"} />
    </div>
  );
};

export default OrientationButtons;
