import { contries } from './contries';
describe('contries', () => {
  it('should contain countries codes', () => {
    const result = contries();
    expect(result).toContain('RU');
  });
});
