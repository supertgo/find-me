import { fireEvent, render, screen } from 'utils/test/test-utils';
import { vi } from 'vitest';
import { Skill } from './Skill';

const props = {
	name: 'PHP',
};

describe('<Skill />', () => {
	it('should render the component', () => {
    const onClick = vi.fn()
		render(<Skill {...props} onClick={onClick} />);

		expect(screen.getByText('PHP')).toBeInTheDocument();

    const removeIcon = screen.getByTitle('Remover PHP')

    fireEvent.click(removeIcon)

    expect(onClick).toHaveBeenCalled()
	});
});
