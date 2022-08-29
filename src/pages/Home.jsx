import Vegetarian from "../components/Vaegetarian";
import Popular from "../components/Popular";

import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <Popular />
      <Vegetarian />
    </motion.div>
  );
};

export default HomePage;
