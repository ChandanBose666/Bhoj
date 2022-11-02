import React from "react";
import { Searchbar } from "react-native-paper";
import {
  SafeArea,
  SearchContainer,
  RestaurantList,
} from "./restaurant-screen-styled-components";

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
