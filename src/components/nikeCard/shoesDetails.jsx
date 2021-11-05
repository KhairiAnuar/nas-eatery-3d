import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

import naseaterylogo from "../../assets/images/ne-logo.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.a`
  padding: 10px 16px;
  background-color: #2b3289;
  color: #FFF;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  href:https://naseatery.menubn.com;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #2b3289;
  }

`;

const naslogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 13px;
  }
`;

export function ShoesDetails(props) {
  return (
    <DetailsContainer>
      <SmallText>International Cuisine</SmallText>
      <SpacedHorizontalContainer>
        <MediumText>Nas Eatery Restaurant</MediumText>
        <MediumText></MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        <MediumText>Make a Call or Whatsapp</MediumText>
        <BuyButton href="https://wa.me/6738345703">ORDER</BuyButton>
      </SpacedHorizontalContainer>

    </DetailsContainer>
  );
}
