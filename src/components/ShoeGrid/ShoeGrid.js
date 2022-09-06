import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <Box>
          <ShoeCard key={shoe.slug} {...shoe} />
        </Box>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const Box = styled.div`
  min-width: 340px;
  flex: 1;
`;

export default ShoeGrid;
