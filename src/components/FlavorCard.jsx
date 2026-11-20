import style from "./flavorCard.module.css";

const FlavorCard = (props) => {
  return (
    <section className={style.flavor_card}>
      <div className={style.flavor_info}>
        <span className={style.flavor_icon}>{props.flavor_icon}</span>
        <p className={style.flavor_name}>{props.flavor_name}</p>
        <p className={style.scoopsSelector}>Scoops: {props.scoopsSelector}</p>

        <div className={style.buttons_div}>
          <button
            className={style.plus_button}
            onClick={() => {
              props.addScoop();
            }}
            disabled={props.isSold || props.total_scoops === 5}
          >
            +
          </button>
          <button
            className={style.minus_button}
            onClick={() => {
              props.removeScoop();
            }}
            disabled={props.isSold}
          >
            -
          </button>
        </div>

        {props.isSold && <span className={style.sold_out_tag}>Sold out</span>}
      </div>
    </section>
  );
};

export default FlavorCard;
