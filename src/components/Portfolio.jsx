import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import '../styles/Portfolio.scss';
import { Link } from "react-router-dom";

function Portfolio() {

  const { data } = useContext(DataContext);
  const [isHovering, setIsHovering] = useState(data);

  const handleMouseOver = (index) => {
    setIsHovering(index);
    console.log('is hovering');
  };

  const handleMouseOut = () => {
    setIsHovering(null);
  };

  const projects = data && data.projects ? data.projects : [];

  if (projects.length === 0) {
    return <p>No hay proyectos disponibles</p>;
  }


  return (
    <div id="projects" className="projects" data-aos='fade-left'>
      <main>
        <section className="project-info-container">
          <h1>{data.projectsPage.infoTextTitle}</h1>
          <p>{data.projectsPage.infoText}</p>
        </section>
      </main>
      <div className="row d-flex justify-content-between">

        {
          projects.map((card, index) => (
            <Link
              key={index}
              className="col-12 col-md-4 project-card"
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
              to={`/project/${card.slug}`}
            >
              <div>
                <img src={card.mainImage} alt={card.title} />
              </div>
              <div className={isHovering === index ? 'card-text fade-in' : 'card-text'}>
                <h4>{card.title}</h4>
              </div>

            </Link>
          ))
        }

      </div>
    </div>
  );
}

export default Portfolio;
