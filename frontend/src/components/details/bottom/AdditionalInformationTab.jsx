import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
export default function AdditionalInformationTab({ tabIndex }) {
  const { productDetails } = useSelector((store) => store.product);
  return (
    <motion.div
    className='w-100'
      transition={{ duration: 0.2 }}
      animate={{
        height: tabIndex === 2 ? "100%" : 0,
        opacity: tabIndex === 2 ? 1 : 0,
        display: tabIndex === 2 ? "flex" : "none",
      }}
    >
      <AdditionalInformationTabContainer>
        <h2>Additional information</h2>
        <div className="py-4 flex item-start column gap-2">
          <div className="wrappers item-center gap-4">
            <h4>Features</h4>
            <p>
              Plenty of safety, Reasonable price, Sizable space, High fuel
              economy, Easy-to-use entertainment system
            </p>
          </div>

          <div className="wrappers item-center gap-4">
            <h4>Color</h4>
            <p>Black</p>
          </div>

          <div className="wrappers item-center gap-4">
            <h4>Body Type</h4>
            <p>Sedan</p>
          </div>
        </div>
      </AdditionalInformationTabContainer>
    </motion.div>
  );
}

const AdditionalInformationTabContainer = styled.div`
  background: var(--white);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width:100%;
  .wrappers {
    display: grid;
    grid-template-columns: 20% 1fr;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-color);
  }

  h4 {
    font-size: 1.8rem;
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
