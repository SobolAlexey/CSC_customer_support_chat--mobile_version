import React, { FC } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const TextInputStyle = styled.TextInput`
  width: 100%;
  font-size: 1.2em;
  height: 40px;
  border: none;
  background: white;
  padding-left: 5px;
`;

const Field: FC<IField> = ({ onChange, val, placeholder, isSecure }) => {
  return (
    <TextInputStyle
      showSoftInputOnFocus={false}
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      autoCapitalize='none'
    />
  );
};

export default Field;
