import React, { FC, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Button from "../ui/Button";
import DropDown from "../ui/DropDown";
import Field from "../ui/Field";

const ViewMain = styled.View`
  background-color: rgb(242,242,242);
  min-height: 100%;
  min-width: 100%;
  padding: 20px;
`;
const MarginView = styled.View`
 height: 100%;
 width: 100%;
 display: flex;
 flex-direction: column;
  justify-content: space-between;
  padding-top: 90px;
  font-weight: 400;
  font-size: 1.2rem;
  
`;

const StartView: FC = () => {
  const [name, setName] = useState<string>("");
  const options = ["Mangoes", "Apples", "Oranges","Mangoes", "Apples",  "Oranges", "Mangoes", "Apples", "Oranges","Mangoes", "Apples",  "Oranges"];
  const startDialogHandler = async () => {};
  return (
    <ViewMain>
      <MarginView>
      <Field
        val={name}
        placeholder='Enter Your Name'
        onChange={(val) => setName(val)}
      />

      <DropDown
        nameDropDown='Enter the theme of the message'
        options={options}
      />
      <DropDown
        nameDropDown='Enter the subtheme of the message'
        options={options}
      />
      <Button title='Start Dialog' onPress={startDialogHandler} />
      </MarginView>
    </ViewMain>
  );
};

export default StartView;
