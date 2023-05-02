import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  position: relative;
  overflow: hidden;
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
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
  width: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;

  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 20px;
  background-color: transparent;

  cursor: pointer;
`;
const left = {
  left: "10px",
};
const right = {
  right: "10px",
};
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow style={left} onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon></ArrowLeftOutlinedIcon>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide bg="f5faad">
          <ImgContainer>
            <Image src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/07/25154415/virat.kohli_281862763_531633635136478_7864284279029382729_n.jpg?tr=w-1600"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE ON THIS SUMMER</Desc>
            <Button>SHOW NOW </Button>
          </InfoContainer>
        </Slide>
        <Slide bg="f5f112">
          <ImgContainer>
            <Image src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/07/25154415/virat.kohli_281862763_531633635136478_7864284279029382729_n.jpg?tr=w-1600"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE ON THIS WINTER</Desc>
            <Button>SHOW NOW </Button>
          </InfoContainer>
        </Slide>
        <Slide bg="f5f552">
          <ImgContainer>
            <Image src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/07/25154415/virat.kohli_281862763_531633635136478_7864284279029382729_n.jpg?tr=w-1600"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Desc>DON'T COMPROMISE ON STYLE ON THIS POPULAR</Desc>
            <Button>SHOW NOW </Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow style={right} onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon></ArrowRightOutlinedIcon>
      </Arrow>
    </Container>
  );
};

export default Slider;
