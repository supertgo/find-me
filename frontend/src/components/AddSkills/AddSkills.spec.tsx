import { fireEvent, render, screen } from 'utils/test/test-utils';
import { vi } from 'vitest'
import { AddSkills } from './AddSkills';

const props = {
  setValue: vi.fn()
}

describe('<AddSkills />', () => {
	it('should render the component', () => {
		render(<AddSkills {...props} />);

		const addSkillButton: HTMLButtonElement = screen.getByRole('button', {
			name: /Adicionar/i,
		});

		expect(addSkillButton).toBeDisabled();
	});

	it('should add a new skill', () => {
		render(<AddSkills {...props} />);

		const addSkillButton: HTMLButtonElement = screen.getByRole('button', {
			name: /Adicionar/i,
		});

		const skillInput: HTMLInputElement =
			screen.getByPlaceholderText(/Adicione uma skill/i);

		expect(addSkillButton).toBeDisabled();

		fireEvent.change(skillInput, { target: { value: 'PHP' } });

		expect(addSkillButton).toBeEnabled();

		fireEvent.click(addSkillButton);

		expect(screen.getByText('PHP')).toBeInTheDocument();

		expect(skillInput.value).toBe('');
		expect(addSkillButton).toBeDisabled();
	});

	it('should remove a new skill', () => {
		render(<AddSkills {...props} />);

		const addSkillButton: HTMLButtonElement = screen.getByRole('button', {
			name: /Adicionar/i,
		});

		const skillInput: HTMLInputElement =
			screen.getByPlaceholderText(/Adicione uma skill/i);

		expect(addSkillButton).toBeDisabled();

		fireEvent.change(skillInput, { target: { value: 'PHP' } });

		fireEvent.click(addSkillButton);

		expect(screen.getByText('PHP')).toBeInTheDocument();

		fireEvent.click(screen.getByTitle('Remover PHP'));

		expect(screen.queryByText('PHP')).not.toBeInTheDocument();
	});

	it('should not append more than maxSize', () => {
		render(<AddSkills {...props} maxSkillPerJob={1} />);

		const addSkillButton: HTMLButtonElement = screen.getByRole('button', {
			name: /Adicionar/i,
		});

		const skillInput: HTMLInputElement =
			screen.getByPlaceholderText(/Adicione uma skill/i);

		expect(addSkillButton).toBeDisabled();

		fireEvent.change(skillInput, { target: { value: 'PHP' } });

		fireEvent.click(addSkillButton);

		expect(screen.getByText('PHP')).toBeInTheDocument();

    fireEvent.change(skillInput, { target: { value: 'R' } });

		expect(addSkillButton).toBeDisabled();
	});

  it('should not allow repeated skills', () => {
		render(<AddSkills {...props} maxSkillPerJob={2} />);

		const addSkillButton: HTMLButtonElement = screen.getByRole('button', {
			name: /Adicionar/i,
		});

		const skillInput: HTMLInputElement =
			screen.getByPlaceholderText(/Adicione uma skill/i);

		expect(addSkillButton).toBeDisabled();

		fireEvent.change(skillInput, { target: { value: 'PHP' } });

		fireEvent.click(addSkillButton);

		expect(screen.getByText('PHP')).toBeInTheDocument();

    fireEvent.change(skillInput, { target: { value: 'PHP' } });

		expect(addSkillButton).toBeEnabled();
		fireEvent.click(addSkillButton);

    fireEvent.change(skillInput, { target: { value: 'New Skill' } });
		fireEvent.click(addSkillButton);
    
    expect(screen.getAllByText('PHP')).toHaveLength(1)
    expect(screen.getByText('New Skill')).toBeInTheDocument()
	});
});
