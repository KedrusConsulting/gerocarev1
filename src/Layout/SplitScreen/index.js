import React from "react";

const SplitScreen = ({ children }) => {
  const [left, right] = React.Children.toArray(children);

  console.log(left, right);
  return (
    <div className="splitscreen">
      <div className="splitscreen__left">{left}</div>
      <div className="splitscreen__right">{right}</div>
    </div>
  );
};

export default SplitScreen;
