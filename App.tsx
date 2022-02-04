import { Text, View } from "react-native";
import styled from "styled-components/native";
import Navigation from "./app/navigation/Navigation";

const AppWrapper = styled.View`
  min-width: 100%;
  min-height:  100vh;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: red;
`;


export default function App() {
  return (
    <AppWrapper>
       <Navigation />
    </AppWrapper> 
  );
}
