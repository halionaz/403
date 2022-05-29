import Add from "./components/Add";
import MyRefrige from "./components/MyRefrige";
import ToBuy from "./components/ToBuy";
import Top from "./components/Top";
import "./App.css";
import { useEffect, useState } from "react";

const example = [
  {
    type: {
      name: "우유",
      src:
        "http://img.danawa.com/prod_img/500000/057/121/img/4121057_1.jpg?shrink=330:330&_v=20170905095637"
    },
    quantity: 4,
    expiration: 0.1
  },
  {
    type: {
      name: "크리스피 치킨",
      src:
        "http://m.thepostmall.com/web/product/big/202201/9bb208f4e511e54b5319f8c0186559da.jpg"
    },
    quantity: 1,
    expiration: 0.7
  }
];
localStorage.setItem("foods", JSON.stringify(example));

export default function App() {
  const [loading, setLoading] = useState(false);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    setLoading(true);
    let foodsData = JSON.parse(localStorage.getItem("foods"));
    if (foodsData === null) {
      foodsData = [];
    }
    setFoods(foodsData);
    setLoading(false);
  }, []);
  return (
    <div>
      <Top />
      {loading ? <div>loading</div> : <MyRefrige foods={foods} />}
      <Add />
      <ToBuy />
    </div>
  );
}
