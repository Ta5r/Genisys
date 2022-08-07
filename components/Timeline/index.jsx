import React from "react";
import { Box } from "@chakra-ui/react";
import events from "./events.js";

const Timeline = () => {
  return (
    <Box pt={"2vh"}>
      <div class="timeline__container">
        {events.map((item, index) => (
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
