import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import FilterSlider from "./filterSlider";
import "../card/card.css";
import BasicTabs from "./tab";

export default function Filter() {
  const [Songs, SetSongs] = useState([]);
  const [Genre, SetGenre] = useState([]);

  const res = async () => {
    let fetch = await axios.get("https://qtify-backend-labs.crio.do/songs");
    SetSongs(fetch.data);
  };
  const res2 = async () => {
    let genre = await axios.get("https://qtify-backend-labs.crio.do/genres");
    SetGenre(genre.data.data);
  };
  useEffect(() => {
    res();
    res2();
  }, []);

  return (
    <>
      <div className="grid">
        <p className="heading1">Songs</p>
        <BasicTabs data={Songs} genre={Genre} />
      </div>
    </>
  );
}
