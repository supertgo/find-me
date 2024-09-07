import { renderHook } from '@testing-library/react';
import { useAcademicRecord } from './useAcademicRecord';
import { vi } from 'vitest';
import { Toast } from 'utils/toast';

describe('useAcademicRecord', () => {
  const spySuccess = vi.spyOn(Toast, 'success')
  const spyError = vi.spyOn(Toast, 'error')

	describe('deleteAcademicRecord()', () => {
		it('should throw error on a invalid id', async () => {
			const { result } = renderHook(useAcademicRecord);

			await result.current.deleteAcademicRecord({
				id: -Infinity,
			});
      
      expect(spyError).toHaveBeenCalledWith(
				'Mock Error',
			);
			expect(spyError).toHaveBeenCalledTimes(1);
		});

		it('should call create function', async () => {
			const { result } = renderHook(useAcademicRecord);

			await result.current.deleteAcademicRecord({
				id: 15,
			});

			expect(spySuccess).toHaveBeenCalledWith(
				'Registro acadêmico removido com sucesso!',
			);
			expect(spySuccess).toHaveBeenCalledTimes(1);
		});
	});
});
