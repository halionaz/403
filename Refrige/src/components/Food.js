import style from "./style/Food.module.css";
const Food = ({ type, quantity, expiration }) => {
  return (
    <div className={style.div}>
      <div>
        {quantity > 1 &&
          (quantity > 99 ? (
            // 99보다 개수 많은 경우 그냥 99로 표시
            <div className={style.qty}> {99} </div>
          ) : (
            <div className={style.qty}> {quantity} </div>
          ))}
        <div
          // 유통기한을 탁한 정도로 표시
          className={style.expire}
          style={{ backgroundColor: `rgba(0,0,0,${80 * expiration}%)` }}
        ></div>
        <img className={style.circle} src={type.src} alt={`${type.name}`} />
      </div>
    </div>
  );
};

export default Food;
