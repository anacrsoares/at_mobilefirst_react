import React from "react";
import listItems from "./mock.js";
import "./listaDeCompras.css";
import { useState, useEffect } from "react";
import { Switch, FormControlLabel } from "@mui/material"; // Importando o Switch do MUI

export default function ListadeCompras() {
  const partialTotal = (price, quantity) => {
    return price * quantity;
  };

  const [toggleDark, setToggleDark] = useState(() => {
    const check = localStorage.getItem("darkTheme");
    return check ? JSON.parse(check) : true;
  });

  useEffect(() => {
    // setToggleDark(true);
    localStorage.setItem("darkTheme", toggleDark), [];
  });

  const handleToggle = () => {
    setToggleDark(!toggleDark);
    localStorage.setItem("darkTheme", toggleDark);
  };

  return (
    <div
      className={toggleDark ? "container-super dark-theme" : " container-super"}
    >
      <h1>Supermercado Minas é D+</h1>

      <FormControlLabel
        control={<Switch checked={!toggleDark} onChange={handleToggle} />}
      />

      <h2>Todos os Itens Comprados</h2>

      <div className="container-cards">
        {listItems.map((item, index) => (
          <div className="card-info" key={index}>
            <h3 className="card-name">{item.name}</h3>
            <p className="card-price">R$ {item.price}</p>
            <p className="card-quantity">qtd: {item.quantity}</p>

            <div className="hidden-info">
              <p>Subtotal: R$ {partialTotal(item.price, item.quantity)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container-total">
        <h2>Valor total da compra</h2>
        <p className="valor-total-compra">
          R${" "}
          {listItems.reduce((acc, item) => {
            return acc + item.price * item.quantity;
          }, 0)}
        </p>
      </div>
    </div>
  );
}
