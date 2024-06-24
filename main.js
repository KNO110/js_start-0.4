function Fraction(numm, denom) {
    this.numm= numm
    this.denom = denom;
}
Fraction.prototype.divide = function(fraction) {
    return new Fraction(
        this.numm * fraction.denom,
        this.denom * fraction.numm
    );
};
Fraction.prototype.gcd = function(a, b) {   ///gcd самый большой общий делитель
    if (!b) {
        return a;
    }
    return this.gcd(b, a % b);
};

Fraction.prototype.simplify = function() {
    const gcd = this.gcd(this.numm, this.denom);
    return new Fraction(this.numm / gcd, this.denom / gcd);
};
const fraction_1 = new Fraction(3, 4);
const fraction_2 = new Fraction(5, 6);

const result = fraction_1.divide(fraction_2);
console.log(`Result: ${result.numm}/${result.denom}`);

const simp_result = result.simplify();
console.log(`Simplified Result: ${simp_result.numm}/${simp_result.denom}`);
