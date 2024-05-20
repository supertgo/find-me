import { Cross1Icon } from '@radix-ui/react-icons';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { CreateJobInputs } from 'hooks/useCreateJob/useCreateJob';
import { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { parseSkillsIntoCompetences } from 'utils/job';
import * as S from './AddSkills.styles';

export type AddSkillsProps = {
	maxSkillPerJob?: number;
	setValue: UseFormSetValue<CreateJobInputs>;
};

const DefaultMaxSkillPerJob = 5;

export const AddSkills = ({ maxSkillPerJob, setValue }: AddSkillsProps) => {
	const [inputValue, setInputValue] = useState<string>();
	const [skills, setSkills] = useState<string[]>([]);

	const getMaxSize = () => {
		if (!maxSkillPerJob || maxSkillPerJob <= 0) return DefaultMaxSkillPerJob;

		return Math.min(maxSkillPerJob, DefaultMaxSkillPerJob);
	};

	const maxSize = getMaxSize();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.currentTarget.value;
		setInputValue(newValue);
	};

	const appendNewSkill = (skill: string) => {
		if (skills.length === maxSize) return;

		if (skills.find((el) => el === skill)) return;

		setSkills((prevSkills) => {
			const newSkills = [...prevSkills, skill];
			setValue('competences', parseSkillsIntoCompetences(newSkills));
			return newSkills;
		});

		setInputValue('');
	};

	const removeSkill = (skill: string) => {
		const indexToBeRemoved = skills.indexOf(skill);

		if (indexToBeRemoved === -1) return;

		setSkills((prevSkills) => {
			const newSkillsArray = prevSkills.filter((el) => el !== skill);
			setValue('competences', parseSkillsIntoCompetences(newSkillsArray));

			return newSkillsArray;
		});
	};

	const shouldButtonBeDisabled =
		!inputValue || inputValue.trim() === '' || skills.length === maxSize;

	return (
		<S.Wrapper>
			<S.Row>
				<Input
					placeholder="Adicione uma skill"
					value={inputValue}
					onChange={onChange}
				/>
				<Button
					onClick={() => inputValue && appendNewSkill(inputValue)}
					disabled={shouldButtonBeDisabled}
				>
					Adicionar
				</Button>
			</S.Row>

			<S.SkillsWrapper>
				{skills.map((skill) => (
					<S.Skill key={skill}>
						<span>{skill}</span>
						<i title={`Remover ${skill}`} onClick={() => removeSkill(skill)}>
							<Cross1Icon />
						</i>
					</S.Skill>
				))}
			</S.SkillsWrapper>
		</S.Wrapper>
	);
};
