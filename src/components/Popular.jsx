import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Card from "./Card";

const Popular = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const getData = async () => {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=ed9a5aef3ecb4c2b8117e2bb3583ad71&number=9`;
    const res = await fetch(url);
    const data = await res.json();
    setPopularRecipes(data.recipes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <h2>Our popular recipes</h2>
      <Splide
        options={{
          perPage: 3,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {popularRecipes.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card {...recipe} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Popular;
