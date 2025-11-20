import type { UserDetailsData } from "@components/User";
import { Loader } from "@components/ui";
import useFetch from "@hooks/useFetch";
import React, { useMemo } from "react";
import { UserDetail } from "./UserDetail";

export interface UserDetailWithFetchProps {
	url: string;
	userId: number;
}

const UserDetailWithFetchComponent = ({
	url,
	userId,
}: UserDetailWithFetchProps) => {
	const fullUrl = useMemo(() => `${url}/${userId}.json`, [url, userId]);
	const { data, loading, error } = useFetch<UserDetailsData>(fullUrl);

	if (loading) return <Loader />;
	if (error) return <div className="error">An error occurred</div>;
	if (!data) return <div className="no-data">No user data available</div>;

	return <UserDetail userData={data} />;
};

UserDetailWithFetchComponent.displayName = "UserDetailWithFetch";

export const UserDetailWithFetch = React.memo(
	UserDetailWithFetchComponent,
	(prevProps, nextProps) =>
		prevProps.userId === nextProps.userId && prevProps.url === nextProps.url,
);
