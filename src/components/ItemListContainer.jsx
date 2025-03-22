import React from 'react'
import "../App.css";

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="item-list-container">
      <ul>
        <li>{mensaje}</li>
      </ul>
    </div>
  );
};

export default ItemListContainer;
