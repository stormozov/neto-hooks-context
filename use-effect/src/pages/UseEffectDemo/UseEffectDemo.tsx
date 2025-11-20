import {
  UserDetailWithFetch,
  UserListWithFetch
} from "@components/User";
import { useState } from "react";
import { DEFAULT_URL } from "./configurations";
import style from "./UseEffectDemo.module.scss";

/**
 * Компонент, отображающий страницу UseEffectDemo
 */
export function UseEffectDemoPage() {
  const mainSelector = "use-effect-demo";

  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  const handleUserClick = (userId: number) => setActiveUserId(userId);

  return (
			<div className={style[`${mainSelector}`]}>
				<div className="container">
					<header className={style[`${mainSelector}__header`]}>
						<h1 className={style[`${mainSelector}__title`]}>
              Приложение со списком пользователей
            </h1>
            <p className={style[`${mainSelector}__description`]}>
              Выберите пользователя из списка ниже, чтобы увидеть его детали
            </p>
					</header>

					<main className={style[`${mainSelector}__main`]}>
						<UserListWithFetch
							url={DEFAULT_URL}
							activeUser={activeUserId}
							onClick={handleUserClick}
						/>
						{activeUserId && (
							<UserDetailWithFetch url={DEFAULT_URL} userId={activeUserId} />
						)}
					</main>
				</div>
			</div>
		);
};
