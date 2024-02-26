import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
export default function DescriptionTab({ tabIndex }) {
  const { productDetails } = useSelector((store) => store.product);
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      animate={{
        height: tabIndex === 0 ? "100%" : 0,
        opacity: tabIndex === 0 ? 1 : 0,
        display: tabIndex === 0 ? "flex" : "none",
      }}
    >
      <DescriptionTabContainer>
        <h2>Description</h2>
        <p>
          Introducing the revolutionary {productDetails?.title} Car, a
          groundbreaking fusion of cutting-edge technology and sustainable
          transportation. Designed to redefine the concept of driving, the{" "}
          {productDetails?.title} Car offers an unparalleled driving experience
          that combines exhilarating performance, state-of-the-art features, and
          an unwavering commitment to environmental responsibility. With its
          sleek and futuristic design, the {productDetails?.title} Car
          captivates onlookers and commands attention on the road. 
        </p>

        <div className="flex column gap-1">
          <p>Exterior Color: Black</p>
          <p>Interior Color: Brown (Beige)</p>
          <p>as Mileage: 15 MPG City | 25 MPG Highway | 19 MPG Combinedk</p>
          <p>Engine: 363 hp 5.7L V8</p>
          <p>Drivetrain: All Wheel Drive</p>
          <p>Fuel Type: Electric</p>
          <p>Stock ID: ABC4590099ZX</p>
          <p>
            Major Options: Leather Seats, Navigation System, Alloy Wheels,
            Chrome Wheels, Bluetooth, Backup Camera, Remote Start
          </p>
        </div>
      </DescriptionTabContainer>
    </motion.div>
  );
}

const DescriptionTabContainer = styled.div`
  background: var(--white);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  display: flex;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
  }
  p {
    font-size: 1.8rem;
    color: rgb(34, 34, 34);
    line-height: 1.7;
    font-family: "Barlow", sans-serif;
    @media (max-width: 680px) {
      font-size: 1.8rem;
    }
  }
`;
