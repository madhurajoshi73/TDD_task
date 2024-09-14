import { expect  } from 'chai';
import { add } from '../app.js'
describe('Math Functions', () => {
  it('should add numbers', () => {
    const result = add("2, 3");
    expect(result).to.equal(5);
  });
  it('empty string', () => {
    const result = add("");
    expect(result).to.equal(0);
  });
  it('one number string', () => {
    const result = add("2");
    expect(result).to.equal(2);
  });
  it('empty string with limiter', () => {
    const result = add(",");
    expect(result).to.equal(0);
  });
})
