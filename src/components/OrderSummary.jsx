import style from "./orderSummary.module.css";

const OrderSummary = (props) => {
  return (
    <div className={style.order_summary_div}>
      <p className={style.order_empty_p}>
        {props.total_scoops === 0 ? "Your order is empty" : ""}
      </p>
      <p
        className={style.total_scoop_p}
      >{`Total scoops: ${props.total_scoops}`}</p>
      <p className={style.price}>{`Simple price: 50`}</p>
    </div>
  );
};

export default OrderSummary;
