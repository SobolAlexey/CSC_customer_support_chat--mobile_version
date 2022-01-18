import React, { FC, useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import DropDown from "../ui/DropDown";
import Field from "../ui/Field";

const ViewMain = styled.View`
  max-height: 100%;
  height: 100%;
  color: rgb(73, 73, 73);
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 90px;
  padding-top: 190px;
  font-weight: 400;
  font-size: 1.2rem;
  color: #52595e;
`;

const StartView: FC = () => {
  const [name, setName] = useState<string>("");
  const options = ["Mangoes", "Apples", "Oranges"];
  return (
    <ViewMain>
      <Field
        val={name}
        placeholder='Enter Name'
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
    </ViewMain>
  );
};

export default StartView;
