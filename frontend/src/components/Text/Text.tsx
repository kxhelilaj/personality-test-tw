import { Typography } from "antd";
import React from "react";
import { TextProps } from "../../types";



const TextComponent: React.FC<TextProps> = ({
  text,
  fontSize,
  color,
  fontFamily,
  fontWeight,
}) => {
  return (
    <Typography.Text
      style={{ fontSize: fontSize, color: color, fontFamily, fontWeight }}
    >
      {text}
    </Typography.Text>
  );
};

export default TextComponent;
