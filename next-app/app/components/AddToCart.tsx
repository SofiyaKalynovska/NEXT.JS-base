"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => console.log("Add btn lick")}
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
