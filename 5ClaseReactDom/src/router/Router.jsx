import { Route, Routes } from "react-router-dom"
import Card from './../components/card/Card';
import { v4 } from 'uuid';

const Router = () => {

  const planets = {
    mercury: {
      url: '/mercury',
      image: '/planet-mercury-internal.svg',
    },
    venus: {
      url: '/venus',
      image: '/planet-venus-internal.svg',
    },
    earth: {
      url: '/earth',
      image: '/planet-earth-internal.svg',
    },
    mars: {
      url: '/mars',
      image: '/planet-mars-internal.svg',
    },
    jupiter: {
      url: '/jupiter',
      image: '/planet-jupiter-internal.svg',
    },
    saturn: {
      url: '/saturn',
      image: '/planet-saturn-internal.svg',
    },
    uranus: {
      url: '/uranus',
      image: '/planet-uranus-internal.svg',
    },
    neptune: {
      url: '/neptune',
      image: '/planet-neptune-internal.svg',
    }
  };

  return (
    <Routes>
      {Object.keys(planets).map(planetName => {
        const planetData = planets[planetName];
        return (
          <Route
            key={v4()} 
            path={planetData.url} 
            element={<Card planet={planetName} image={planetData.image} />} 
          />
        );
      })}
    </Routes>
  );
} 

export default Router;
