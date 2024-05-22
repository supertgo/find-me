import { Cross1Icon } from '@radix-ui/react-icons';
import * as S from './Skill.styles';

export type SkillProps = {
	name: string;
	onClick?: () => void;
};

export const Skill = ({ name, onClick }: SkillProps) => {
	return (
		<S.Wrapper>
			<span>{name}</span>
			{!!onClick && (
				<i title={`Remover ${name}`} onClick={onClick}>
					<Cross1Icon />
				</i>
			)}
		</S.Wrapper>
	);
};
