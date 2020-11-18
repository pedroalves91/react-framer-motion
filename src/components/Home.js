import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const buttonVariant = {
  hover: {
    scale: 1.1, //[1, 1.1, 1, 1.1, 1, 1.1, 1],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity // Repeat animation
      // yoyo: 10 repeat animation 10 times
    }
  }
};

const containerVariants = {
  init: {
    opacity: 0
  },
  animation: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="init"
      animate="animation"
      exit="exit"
    >
      <h2>Welcome to pizza joint!</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
