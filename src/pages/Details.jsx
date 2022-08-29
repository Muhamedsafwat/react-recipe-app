import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/details-page.css";

const Details = () => {
  const [recipeData, setRecipeData] = useState({});
  const params = useParams();

  const getData = async (id) => {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=ed9a5aef3ecb4c2b8117e2bb3583ad71`;
    const res = await fetch(url);
    const data = await res.json();
    setRecipeData(data);
  };

  useEffect(() => {
    getData(params.id);
  }, [params.id]);

  const [activeTab, setActiveTab] = useState("instructions");

  return (
    <motion.section
      className="detail-page"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <div className="cover">
        <h2>{recipeData.title}</h2>
        <img src={recipeData.image} alt="" />
      </div>
      <div className="info">
        <div className="flex">
          <button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </button>
          <button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
        </div>
        {activeTab === "instructions" ? (
          <div>
            <setion
              dangerouslySetInnerHTML={{ __html: recipeData.summary }}
            ></setion>
            <section
              dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
            ></section>
          </div>
        ) : (
          <ol>
            {recipeData.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ol>
        )}
      </div>
    </motion.section>
  );
};

export default Details;
