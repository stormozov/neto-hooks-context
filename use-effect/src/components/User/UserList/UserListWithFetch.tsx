import {
	type IUseEffectUserListItem,
	type IUserListProps,
	UserList,
} from "@components/User";
import { Loader } from "@components/ui";
import useFetch from "@hooks/useFetch";

/**
 * Интерфейс, описывающий свойства компонента UserListWithFetch
 */
export interface UserListWithFetchProps extends Omit<IUserListProps, "users"> {
	url: string;
}

/**
 * Компонент-контейнер для компонента UserList
 * 
 * @description
 * Компонент получает данные о пользователях с помощью кастомного хука useFetch.
 * Во время получения отображает компонент Loader. При успешном получении данных
 * отображает компонент UserList. В случае возникновения ошибки отображает
 * сообщение об ошибке.
 */
export function UserListWithFetch({
	url,
	activeUser,
	onClick,
}: UserListWithFetchProps) {
	const {
		data: users,
		loading,
		error,
	} = useFetch<IUseEffectUserListItem[]>(`${url}/users.json`);

	if (loading) return <Loader />;
	if (error)
		return (
			<div className="error">
				An error occurred when getting the list of users.
			</div>
		);
	if (!users) return (
    <div className="no-data">{"No user data available :("}</div>
  )

	return <UserList users={users} activeUser={activeUser} onClick={onClick} />;
}
