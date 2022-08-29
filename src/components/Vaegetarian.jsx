import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Card from "./Card";

const Vegetarian = () => {
  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);

  const getData = async () => {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=ed9a5aef3ecb4c2b8117e2bb3583ad71&number=9&tags=vegetarian`;
    const api = await fetch(url);
    const data = await api.json();
    setVegetarianRecipes(data.recipes);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <h2>Our vegetarian picks</h2>
      <Splide
        options={{
          perPage: 4,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {vegetarianRecipes.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <Card {...recipe} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Vegetarian;
