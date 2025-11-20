import style from "./Loader.module.scss";

/**
 * Компонент, отображающий индикатор загрузки
 */
export function Loader() {
  return (
    <div className={style.loader}>
      <div className={style.loader__spinner}></div>
    </div>
  );
}
