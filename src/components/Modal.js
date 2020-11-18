import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariant = {
  init: {
    opacity: 0
  },
  animation: {
    opacity: 1
  }
};

const modalVariant = {
  init: {
    y: "-100vh",
    opacity: 0
  },
  animation: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5
    }
  }
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariant}
          initial="init"
          animate="animation"
          exit="init"
        >
          <motion.div className="modal" variants={modalVariant}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
