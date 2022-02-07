import React, { FC } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styled from "styled-components/native";

interface IButton {
  onPress: () => void;
  title: string;
}

const TouchableHighlightStyle = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  padding: 20px;
  background: rgb(0, 122, 255);
`;

const TextButton = styled.Text`
  color: #ffffff;
`;

const Button: FC<IButton> = ({ onPress, title }) => {
  return (
    <TouchableHighlightStyle
      activeOpacity={0.6}
      onPress={onPress}
    >
      <TextButton>{title}</TextButton>
    </TouchableHighlightStyle>
  );
};

export default Button;
