import React, { FC } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styled from "styled-components/native";

interface IButton {
  onPress: () => void;
  title: string;
}

const TouchableHighlightStyle = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: rgb(0, 122, 255);
`;

const TextButton = styled.Text``;

const Button: FC<IButton> = ({ onPress, title }) => {
  return (
    <TouchableHighlightStyle onPress={onPress}>
      <Text>{title}</Text>
    </TouchableHighlightStyle>
  );
};

export default Button;
