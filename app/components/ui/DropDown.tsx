import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const DropDownContainer = styled.View`
  width: 100%;
`;

const DropDownHeader = styled.TouchableOpacity`
  margin-bottom: 0.8em;
  padding: 0.7em 3em 0.7em 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  background: #ffffff;
`;


const DropDownList = styled.View`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
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
  };

  return (
    <DropDownContainer>
      <DropDownHeader onPress={toggling}>
        <Text>{selectedOption || `${nameDropDown} ▼`}</Text>
      </DropDownHeader>
      {isOpen && (
       
          <DropDownList>
            {options.map((option) => (
              <ListItem onPress={onOptionClicked(option)} key={Math.random()}>
                <Text>{option}</Text>
              </ListItem>
            ))}
          </DropDownList>
    
      )}
    </DropDownContainer>
  );
};

export default DropDown;
