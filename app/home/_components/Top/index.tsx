import React from "react";
import Slider from "react-slick";
import MainThings from "../MainThings";

const TopSection = ({ data }: any) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <Slider {...settings}>
      {data.category?.map((item: any) => {
        return (
          <MainThings src={`/img/${item.imgSrcList[0]}`} width={200} height={400} key={item.id} />
        );
      })}
    </Slider>
  );
};

export default TopSection;
