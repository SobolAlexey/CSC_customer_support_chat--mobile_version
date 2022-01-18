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
  height: 40px;
  background: rgb(0, 122, 255);
  color: white;

  &:hover {
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
  }

  &:active {
    transform: scale(0.96);
  }
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
