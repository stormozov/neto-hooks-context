import type { UserDetailsData } from "../types";
import style from "./UserDetail.module.scss";

/**
 * Интерфейс, описывающий свойства компонента UserDetail
 */
interface UserDetailProps {
	userData: UserDetailsData;
}

/**
 * Компонент, отображающий детали о пользователе
 */
export function UserDetail({ userData }: UserDetailProps) {
	const mainSelector = "user-detail";

	const { avatar, name, details } = userData;
	const { city, company, position } = details;

	return (
		<div className={style[`${mainSelector}`]}>
			<img
				src={avatar}
				alt={name}
				className={style[`${mainSelector}__avatar`]}
			/>
			<div className={style[`${mainSelector}__details`]}>
				<h3 className={style[`${mainSelector}__name`]}>{name}</h3>
				<p className={style[`${mainSelector}__city`]}>City: {city}</p>
				<p className={style[`${mainSelector}__company`]}>Company: {company}</p>
				<p className={style[`${mainSelector}__position`]}>
					Position: {position}
				</p>
			</div>
		</div>
	);
}
