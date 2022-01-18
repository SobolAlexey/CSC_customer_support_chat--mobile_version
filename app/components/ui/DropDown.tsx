import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const DropDownContainer = styled.View`
  width: 100%;
  margin: 0 auto;
`;

const DropDownHeader = styled.TouchableOpacity`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  background: #ffffff;
`;

const DropDownListContainer = styled.View``;

const DropDownList = styled.View`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.TouchableOpacity`
  list-style: none;
  margin-bottom: 0.8em;
`;

interface IDropDown {
  options: string[];
  nameDropDown: string;
}

const DropDown: FC<IDropDown> = ({ options, nameDropDown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onPress={toggling}>
        <Text>{selectedOption || `${nameDropDown} ▼`}</Text>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onPress={onOptionClicked(option)} key={Math.random()}>
                <Text>{option}</Text>
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
