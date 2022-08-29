import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Card from "../components/Card";

const Searched = () => {
  const [results, setResults] = useState([]);
  const params = useParams();

  const getResults = async (name) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=ed9a5aef3ecb4c2b8117e2bb3583ad71&query=${name}`;
    const res = await fetch(url);
    const data = await res.json();
    setResults(data.results);
  };

  useEffect(() => {
    getResults(params.search);
  }, [params.search]);

  return (
    <section className="grid">
      {results.map((recipe) => (
        <Card key={recipe.id} {...recipe} />
      ))}
    </section>
  );
};

export default Searched;
