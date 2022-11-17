import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolio.map((project, index) => {
          return (
            <PortfolioItem
              key={index}
              title={project.title}
              image={project.image}
              stack={project.stack}
              link={project.link}
              repoLink={project.repoLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
