import React from 'react'
import { Image, StyleSheet } from 'react-native'
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const HomeView = styled.View`
  width: ${wp("100%")};
  height: ${hp("100%")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #E5E5E5;

  
`;
