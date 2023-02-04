import { useEffect, useState } from "react";

import Card from "./components/Card";
import Profile from "./components/Profile";

import "./App.scss";

function useData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return data;
}

export default function App() {
  const [filter, setFilter] = useState("weekly");
  const data = useData();

  const el = data.map((obj) => {
    return (
      <Card
        key={obj.title}
        title={obj.title}
        current={obj.timeframes[filter].current}
        previous={obj.timeframes[filter].previous}
        bg={obj.title}
      />
    );
  });

  return (
    <main className="main">
      <Profile setFilter={setFilter} filter={filter} />
      {el}
    </main>
  );
}
