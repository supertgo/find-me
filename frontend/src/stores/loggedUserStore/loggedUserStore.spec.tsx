import { renderHook, act } from 'utils/test/test-utils';
import { useLoggedUserStore } from './loggedUserStore';
import { UserEnum } from 'protocols/external/user/user';

describe('loggedUserStore()', () => {
	it('should start with initial config', () => {
		const { result } = renderHook(() => useLoggedUserStore());

		expect(result.current.name).toBe('');
		expect(result.current.email).toBe('');
		expect(result.current.type).toBe(UserEnum.RECRUITER);
	});

	it('should be able to setUser', () => {
		const { result } = renderHook(() => useLoggedUserStore());

		act(() =>
			result.current.setUser({
				name: 'davi',
				type: 'employee',
				email: 'davi@onfly.com',
			}),
		);

		expect(result.current.name).toBe('davi');
		expect(result.current.email).toBe('davi@onfly.com');
		expect(result.current.type).toBe(UserEnum.EMPLOYEE);
	});
});
