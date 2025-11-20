import style from "./Loader.module.scss";

export function Loader() {
  return (
    <div className={style.loader}>
      <div className={style.loader__spinner}></div>
    </div>
  );
}
