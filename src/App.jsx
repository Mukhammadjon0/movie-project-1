import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { StateContext } from "./context";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Basket from "./Pages/Basket/Basket";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import MovieDetail from "./Pages/Kino/MovieDetail";
import { initialState, reducer } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state)
  return (
    <StateContext.Provider value={{state, dispatch}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movieDetail/:id" element={<MovieDetail />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
    </StateContext.Provider>
  );
}

export default App;
