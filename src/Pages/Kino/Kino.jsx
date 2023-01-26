import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../context";
import "./Kino.css";

function Kino({ id, name, image, item }) {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(StateContext);

  const getDetailBtn = () => {
    navigate(`movieDetail/${id}`);
  };
  const addBtn = () => {
    const check = state.basket.some((item) => item.id === id);
    if (check) alert("bu oldin qoshilgan");
    else dispatch({ type: "ADD_TO_BASKET", payload: item });
  };
  return (
    <div className="kinolar">
      <img onClick={getDetailBtn} src={image} alt="kino rasm" />
      <h2>{name}</h2>
      <h2>ID: {id}</h2>
      <button onClick={addBtn}>Add to Basket</button>
    </div>
  );
}

export default Kino;
