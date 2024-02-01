const num1 = 31
const num2 = 2
const multiply = num1 * num2

const max = Math.max(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);

const num3 = 4
const num4 = 5
const mod = num3 % num4;

const random = Math.floor(Math.random() * 10)+ 1;

it("is an equation whose multiplied results will equal 62", function() {
    expect(num1).to.be.a('number');  // Corrected this line
    expect(num2).to.be.a('number');
    expect(multiply).to.eq(62);
  });