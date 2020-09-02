import React from "react";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../assets/carousel/left-arrow.svg";
import { ReactComponent as RightArrow } from "../assets/carousel/right-arrow.svg";

class Carousel extends React.Component {
  handleOnClickPrev = () => {
    let index = this.state.activeIndex; //0
    let artWorkLength = this.state.artWorkLength; //4
    index < 1 ? (index = artWorkLength - 1) : index--;

    this.setState({ activeIndex: index });
  };

  handleOnClickNext = () => {
    let index = this.state.activeIndex;
    let artWorkLength = this.state.artWorkLength;
    index === artWorkLength - 1 ? (index = 0) : index++;

    this.setState({ activeIndex: index });
  };

  artWork = [
    {
      name: "Alm. B. J. Habibie",
      title: "Presiden Indonesia ke-3",
      testimonials:
        "Tidak ada gunanya IQ anda tinggi namun malas, tidak miliki disiplin, yang penting adalah Anda sehat dan mau berkorban untuk masa depan yang cerah",
      image: `${require("../assets/carousel/BJHabibi.jpg")}`,
      link: "",
    },
    {
      name: "Steve Jobs",
      title: "ex CEO Apple Inc",
      testimonials: " If I try my best and fail, well, i've try my best .",
      image: `${require("../assets/carousel/SteveJobs.jpg")}`,
      link: "",
    },
    {
      name: "Jack Ma ",
      title: "Former Chairman and CEO, Alibaba Group",
      testimonials: "When we have money, we start making mistakes.",
      image: `${require("../assets/carousel/JackMa.jpg")}`,
      link: "",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      artWorkLength: this.artWork.length,
    };
    this.artObject = null;
    this.artAnimation = null;
  }

  render() {
    const artwork = this.artWork[this.state.activeIndex];
    return (
      <X>
        <Slider>
          <ArrowLeft onClick={this.handleOnClickPrev} />
          <Inner>
            <TileContainer>
              <Tile src={artwork.image} alt={artwork.title}></Tile>
            </TileContainer>
            <Content>
              <Item>
                <Testimonials>{artwork.testimonials}</Testimonials>
                <Name ref={(div) => (this.artObject = div)}>
                  {artwork.name}
                </Name>
                <Title>{artwork.title} </Title>
              </Item>
            </Content>
          </Inner>
          <ArrowRight onClick={this.handleOnClickNext} />
        </Slider>
      </X>
    );
  }
}

export default Carousel;

//GENERAL SLIDER
const X = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 500px;
  padding-top: 1.5rem;
`;

const Slider = styled.div`
  display: flex;

  @media (max-width: 580px) {
    position: relative;
  }
`;

//ARROWS
const ArrowLeft = styled(LeftArrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
  width: 75px;
  top: 0;
  left: 0;
  cursor: pointer;
  transition: 0.3s ease-ease-in-out;

  @media (max-width: 580px) {
    position: absolute;
    height: 55px;
    width: 55px;
    top: unset;
    bottom: 5%;
    left: 20%;
  }
`;

const ArrowRight = styled(RightArrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 460px;
  width: 75px;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: 0.3s ease-ease-in-out;

  @media (max-width: 580px) {
    position: absolute;
    height: 55px;
    width: 55px;
    top: unset;
    bottom: 5%;
    right: 20%;
  }
`;

//INNER CONTENT
const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 28rem 0 2rem;
  transition: all 0.3s;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 3rem;
    transition: all 0.3s;
  }

  @media (max-width: 580px) {
  }
`;

// IMAGES
const TileContainer = styled.div`
  box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
  display: flex;
  overflow: hidden;
  height: 460px;
  width: 340px;
  border-radius: 10px;

  @media (max-width: 580px) {
    width: 300px;
  }
`;

const Tile = styled.img`
  height: 100%;
`;

//  TEXT CONTENT
const Content = styled.div`
  display: flex;
`;

const Item = styled.div`
  position: absolute;
  margin: 0 0 0 4rem;
  transition: all 0.3s;
  opacity: 0;
  width: 340px;
  text-align: justify;
  opacity: 1;

  @media (max-width: 992px) {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s;
  }

  @media (max-width: 580px) {
    width: 300px;
  }
`;

const Testimonials = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const Name = styled.div`
  color: #a1a1a8;
  font-size: 17px;
  font-weight: 600;
`;

const Title = styled.div`
  font-size: 15px;
  color: #a1a1a8;
`;
