import style from "./header.module.css";

const Header = (props) => {
  return (
    <header>
      <h1 className={style.header_text}>{props.header_text}</h1>
    </header>
  );
};

export default Header;
