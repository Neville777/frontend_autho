import { useState } from "react";
import "./App.css";
import Collections from "./Components/Collections";
import useFetch from "./Hooks/useFetch";

function App() {
  const { data, err } = useFetch("http://127.0.0.1:5000/collections");
  console.log(data, err);

  return (
    <>
      <Collections />
    </>
  );
}

export default App;
