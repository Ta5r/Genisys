import React from "react";
import {Box} from "@chakra-ui/react";

const Timeline = () => {
  const contents = [
    {
      title: "Hello World",
      description:
        "An interactive webinar especially for beginners, where our mentors decoded different tech domains like AI/ML,Web Dev or App Dev.",
      img: "https://res.cloudinary.com/quote-muj/image/upload/v1637651513/carbon_a4nrg8.png",
    },
    {
      title: "RendezVous 2.0",
      description:
        "Suryansh Chauhan, an MUJ Alumnus who scored an astounding 332/40 in GRE, currently a MASTER'S student at London Business School,talked about GRE Preparations, research and much more in this QNA session.",
      img: "https://res.cloudinary.com/quote-muj/image/upload/v1637651582/carbon_1_f7elut.png",
    },
  ];
  return (
    <Box pt={"2vh"}>
      <div class="timeline__container">
        {contents.map((item, index) => (
          <div className="item__container">
            <div className="image__carbon">
              <img alt={item.title} src={item.img} />
            </div>
            <div className="bar__content">
              <span
                className={`${index % 2 === 0 ? `bar` : `dotted`} ${
                  index === 0 && `start`
                }`}
              ></span>
              <span class="circle"></span>
            </div>
            <div className="timeline__text__container">
              <h1 className="timeline__text">{item.title}</h1>
              <p className="timeline__subtext">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="bar__content">
          <span className="bar end"></span>
        </div>
      </div>
    </Box>
  );
};

export default Timeline;
