import classnames from "classnames";
import type { IUseEffectUserListItem } from "../types";
import userList from "./UserList.module.scss";

export interface IUserListProps {
	users: IUseEffectUserListItem[];
  activeUser: number | null;
	onClick: (userId: number) => void;
}

export function UserList({ users, activeUser, onClick }: IUserListProps) {
  const mainSelector = "user-list";
  
  const getActiveButtonClass = (
    user: IUseEffectUserListItem,
    activeUser: number | null,
  ) => {
    return classnames(userList[`${mainSelector}__btn`], {
      [userList[`${mainSelector}__btn--active`]]: activeUser === user.id,
    });
  }

	return (
		<ul className={userList[`${mainSelector}`]}>
			{users.map((user) => (
				<li key={user.id} className={userList[`${mainSelector}__item`]}>
					<button
						type="button"
						className={getActiveButtonClass(user, activeUser)}
						onClick={() => onClick(user.id)}
					>
						{user.name}
					</button>
				</li>
			))}
		</ul>
	);
}
