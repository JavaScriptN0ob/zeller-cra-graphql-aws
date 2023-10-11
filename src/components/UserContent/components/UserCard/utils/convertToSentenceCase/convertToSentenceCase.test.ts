import convertToSentenceCase from './convertToSentenceCase';

describe('convertToSentenceCase', () => {
  it('should convert a string to sentence case', () => {
    expect(convertToSentenceCase('ADMIN')).toBe('Admin');
  });
});
