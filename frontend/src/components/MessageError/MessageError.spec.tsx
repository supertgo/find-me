import { render, screen } from 'utils/test/test-utils';
import { MessageError } from './MessageError';

describe('<MessageError />', () => {
	it('should render the component', () => {
		render(
			<MessageError
				error={{
					type: 'pattern',
					root: undefined,
					ref: undefined,
					types: undefined,
					message: 'Ocorreu um erro',
				}}
			/>,
		);

		expect(screen.getByText('Ocorreu um erro')).toBeInTheDocument();
	});
});
