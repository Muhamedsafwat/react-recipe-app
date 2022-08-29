import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import Card from "../components/Card";

const Cuisine = () => {
  const [recipes, setRecipes] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ed9a5aef3ecb4c2b8117e2bb3583ad71&cuisine=${name}`;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.results);
  };

  useEffect(() => {
    getCuisine(params.category);
  }, [params.category]);

  return (
    <motion.section
      className="grid"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {recipes.map((recipe) => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </motion.section>
  );
};

export default Cuisine;
