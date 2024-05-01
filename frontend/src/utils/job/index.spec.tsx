import { describe, expect } from 'vitest';
import { filterJobLocation, translateEmploymentType } from '.';

describe('translateProposalsStatus', () => {
  it('should translate correctly', () => {
    expect(translateEmploymentType['part-time']).toStrictEqual('Meio Período');

    expect(translateEmploymentType['full-time']).toStrictEqual(
      'Tempo integral',
    );
  });
});

//Eduardo / Ana
describe('translateSalaryTimeUnit', () => {
  it('should translate correctly', () => {
  });
});

describe('filterJobLocation()', () => {
  it('should not filter job location if there is no break', () => {
    expect(filterJobLocation('Aparecida, Belo Horizonte')).toStrictEqual(
      'Aparecida, Belo Horizonte',
    );
  });
  it('should filter job location show only the content after break', () => {
    expect(filterJobLocation('96765 Candelario Forges\nWardberg, IL 77290')).toStrictEqual(
      'Wardberg, IL 77290',
    );
  });
  it('should be able to handle even when provided date does not behave like expected', () => {
    expect(filterJobLocation('96765 Candelario Forges\n')).toStrictEqual(
      '96765 Candelario Forges',
    );
    expect(filterJobLocation('96765 Candelario Forges')).toStrictEqual(
      '96765 Candelario Forges',
    );
  });
});
