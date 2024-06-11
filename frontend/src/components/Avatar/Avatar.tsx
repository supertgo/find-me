import * as S from './Avatar.styles';

export type AvatarProps = {
	user?: string;
	showUsername?: boolean;
	showOnlyFirstName?: boolean;
  size?: 'small' | 'large'
};

export const Avatar = ({
	user,
	showUsername = true,
	showOnlyFirstName = false,
  size
}: AvatarProps) => {
	const getInitialLetters = (name: string): string => {
		const splitUserName = name.split(' ');
		const firstLetter =
			splitUserName.length > 0 ? splitUserName[0][0] : '';
		const secondLetter =
			splitUserName.length > 1 ? splitUserName[1][0] : '';

		return `${firstLetter}${secondLetter}`.toUpperCase();
	};

	const handleName = (name: string) => {
		return showOnlyFirstName ? name.split(' ')[0] : name;
	};

	return (
		<S.Wrapper>
			<S.AvatarRoot $size={size}>
				<S.AvatarFallback delayMs={600}>
					{!!user ? (
						getInitialLetters(user)
					) : (
						<S.PersonIcon height={20} width={20} />
					)}
				</S.AvatarFallback>
			</S.AvatarRoot>
			{showUsername && !!user && <S.Username>{handleName(user)}</S.Username>}
		</S.Wrapper>
	);
};
