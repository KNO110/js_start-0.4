class Fraction {
    constructor(numm, denom) {
        this.numm = numm;
        this.denom = denom;
    }

    divide(fraction) {
        return new Fraction(
            this.numm * fraction.denom,
            this.denom * fraction.numm
        );
    }

    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    simplify() {
        const common = this.gcd(this.numm, this.denom);      ///gcd самый большой общий делитель
        return new Fraction(this.numm / common, this.denom / common);
    }

    toString() {
        return `${this.numm}/${this.denom}`;
    }
}

const fraction_1 = new Fraction(3, 4);
const fraction_2 = new Fraction(5, 6);

const result = fraction_1.divide(fraction_2);
console.log(`Result: ${result}`);

const simp_result = result.simplify();
console.log(`Simplified Result: ${simp_result}`);
