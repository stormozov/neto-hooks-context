export interface IUseEffectUserListItem {
	id: number;
	name: string;
}

export interface UserDetailsData extends IUseEffectUserListItem {
	avatar: string;
	details: {
		city: string;
		company: string;
		position: string;
	};
}
