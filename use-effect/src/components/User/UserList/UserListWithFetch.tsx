import {
	type IUseEffectUserListItem,
	type IUserListProps,
	UserList,
} from "@components/User";
import { Loader } from "@components/ui";
import useFetch from "@hooks/useFetch";

export interface UserListWithFetchProps extends Omit<IUserListProps, "users"> {
	url: string;
}

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
