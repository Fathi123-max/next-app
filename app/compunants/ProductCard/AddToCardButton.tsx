"use client";
import React from "react";

const AddToCardButton = () => {
  return (
    <div className="p-4">
      <button onClick={() => console.log("Add to Cart")}>Add to Cart</button>
    </div>
  );
};

export default AddToCardButton;
