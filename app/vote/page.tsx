"use client";

import Container from "@/components/Container";
import React from "react";
import Slider from "react-slick";

const Vote = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <div
              style={{
                height: "200px",
                background: "#6c757d",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Vote;
