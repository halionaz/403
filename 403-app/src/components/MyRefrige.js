import Food from "./Food";
import style from "./style/MyRefrige.module.css";

const MyRefrige = ({ foods }) => {
  return (
    <div className={style.refrige}>
      <h2 className={style.h2}>내 냉장고</h2>
      <div>
        {foods.map((food, i) => {
          return (
            <Food
              key={i}
              type={food.type}
              quantity={food.quantity}
              expiration={food.expiration}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyRefrige;
