import React from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, View } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Quench your hunger" />
    </SearchContainer>
    <RestaurantList>
      <RestaurantInfoCard />
    </RestaurantList>
  </SafeArea>
);

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
