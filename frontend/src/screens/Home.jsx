import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InventoryIndex from "../components/home/inventory";
import Heroindex from "../components/home/hero";
import SearchIndex from "../components/home/search";
import ServicesIndex from "../components/home/services";
import LocationIndex from "../components/home/location";
import Blogindex from "../components/home/blog";
import styled from "styled-components";
import Brandindex from "../components/home/brands";
import ChoiceIndex from "../components/home/choice";
import {
  getAllProduct,
  clearProductAlert,
  clearProductDetails,
} from "../Features";

import {
  Banner3,
  Banner4,
  Newsletter,
  Footer,
  Meta,
} from "../components/common";
export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(clearProductDetails());
    dispatch(clearProductAlert());
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <Meta />

      <HomeContainer>
        <>
          <Heroindex />
          <SearchIndex />
          <ServicesIndex />
          <Brandindex />
          <InventoryIndex />
          <ChoiceIndex />
          <LocationIndex />
          <Banner3 />
          <Banner4 />
          <Blogindex />
        </>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
width:100%;
min-height:100vh;
background:#fff;
`;
