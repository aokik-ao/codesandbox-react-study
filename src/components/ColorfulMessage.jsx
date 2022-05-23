import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入すれば毎回propsを使わなくてOK;
  const { color, children } = props;
  // オブジェクトのプロパティ名と変数名が同じなら省略できる
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
