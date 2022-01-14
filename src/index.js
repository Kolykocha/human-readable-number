module.exports = function toReadable(number) {
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const hundreds = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    switch (number.toString().length) {
        case (1): {
            return one[number];
        }

        case (2): {
            if (number % 10 === 0) {
                return hundreds[Math.floor(number / 10)];
            } else if (number > 9 && number < 20) {
                return tens[number % 10];
            } else return hundreds[Math.floor(number / 10)] + ' ' + one[number % 10];
        }
        case (3): {
            if (number % 100 === 0) {
                return one[number / 100] + ' hundred';
            } else if (Math.floor((number % 100) / 10) === 0) {
                return one[Math.floor(number / 100)] + ' hundred ' + one[((number % 100) % 10)];
            } else if (number % 100 > 9 && number % 100 < 20) {
                return one[Math.floor(number / 100)] + ' hundred ' + tens[((number % 100) % 10)];
            } else if (((number % 100) % 10) === 0) {
                return one[Math.floor(number / 100)] + ' hundred ' + hundreds[Math.floor((number % 100) / 10)];
            } else return one[Math.floor(number / 100)] + ' hundred ' + hundreds[Math.floor((number % 100) / 10)] + ' ' + one[((number % 100) % 10)];
        }
    }
}
