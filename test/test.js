import { expect  } from 'chai';
import { add } from '../app.js'
describe('Math Functions', () => {
  it('should add numbers', () => {
    const result = add("2, 3");
    expect(result).to.equal(5);
  });
  it('should add many numbers', () => {
    const result = add("1,2,3,4,5,6");
    expect(result).to.equal(21);
  });
  it('should add many numbers with space', () => {
    const result = add("1, ,3,4,5,6");
    expect(result).to.equal(19);
  });
  it('empty string', () => {
    const result = add("");
    expect(result).to.equal(0);
  });
  it('empty string with space', () => {
    const result = add(" ");
    expect(result).to.equal(0);
  });
  it('one number string', () => {
    const result = add("2");
    expect(result).to.equal(2);
  });
  it('empty string with only limiter', () => {
    const result = add(",");
    expect(result).to.equal(0);
  });
  it('string with \\n limiter', () => {
    const result = add("1\n2,3");
    expect(result).to.equal(6);
  });
  it('string with custom limiter', () => {
    const result = add("//;\n1;2;3");
    expect(result).to.equal(6);
  });
  it('string with custom limiter & with \\n', () => {
    const result = add("//;\n1;2\n3");
    expect(result).to.equal(6);
  });
  it('string with custom limiter & with \\n and ","', () => {
    const result = add("//;\n1;2\n3,4");
    expect(result).to.equal(10);
  });
  it('empty string with custom limiter', () => {
    const result = add("//;\n ; ");
    expect(result).to.equal(0);
  });
  it('empty string with custom limiter & with \\n and ","', () => {
    const result = add("//;\n,;");
    expect(result).to.equal(0);
  });
  it('empty string with custom limiter & with \\n and "," with space', () => {
    const result = add("//;\n, ;");
    expect(result).to.equal(0);
  });
  it('should add many numbers', () => {
    const result = add("//;\n1;2;3;4;5;6");
    expect(result).to.equal(21);
  });
  it('should add many numbers with space', () => {
    const result = add("//;\n1; ;3;4;5;6");
    expect(result).to.equal(19);
  });
  it('string with negative number', () => {
    const result = add("-1,2,-3");
    expect(result).to.equal("Negative numbers not allowed -1,-3");
  });
  it('string with negative number and custom limiter', () => {
    const result = add("//;\n1;2;-3");
    expect(result).to.equal("Negative numbers not allowed -3")
  });
  it('string with negative number and custom limiter with space', () => {
    const result = add("//;\n1; ;-3");
    expect(result).to.equal("Negative numbers not allowed -3")
  });
  it('string with negative number and custom limiter & \\n with space', () => {
    const result = add("//;\n1\n ;-3");
    expect(result).to.equal("Negative numbers not allowed -3")
  });
  it('string with negative number and custom limiter & "," with space', () => {
    const result = add("//;\n1, ;-3");
    expect(result).to.equal("Negative numbers not allowed -3")
  });
  it('empty string with custom limiter & with \\n and ","', () => {
    const result = add("//;\n , ");
    expect(result).to.equal(0);
  });
})
