import React from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;

  margin: auto;
`;
const left = {
  left: "10px",
};
const Slider = () => {
  return (
    <Container>
      <Arrow className={left}>
        <ArrowLeftOutlinedIcon></ArrowLeftOutlinedIcon>
      </Arrow>
      <Arrow className="right">
        <ArrowRightOutlinedIcon></ArrowRightOutlinedIcon>
      </Arrow>
    </Container>
  );
};

export default Slider;
