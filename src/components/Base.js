import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  init: {
    opacity: 0,
    x: "100vw"
  },
  animation: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
};

const nextVariants = {
  init: {
    x: "-100vw"
  },
  animation: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120
    }
  }
};

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

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="init"
      animate="animation"
      //transition={{ type: "spring", delay: 0.5 }}
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>

      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";

          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          //? Doesn't need this properties in children elements because they have the same name
          //initial="init"
          //animate="animation"
          //transition={{ type: "spring", stiffness: 120 }}
        >
          <Link to="/toppings">
            <motion.button variants={buttonVariant} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
