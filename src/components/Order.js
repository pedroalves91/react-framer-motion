import React, { useState, useEffect } from "react";
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
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.5
    }
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut"
    }
  }
};

const childVariants = {
  init: {
    opacity: 0
  },
  animation: {
    opacity: 1
  }
};

const Order = ({ pizza, setShowModal }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 2000);

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="init"
      animate="animation"
      exit="exit"
    >
      <h2>Thank You For Your Order!!</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
