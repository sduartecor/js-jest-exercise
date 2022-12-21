
const fromDollarToYen = (dollarValue) => {
	return dollarValue * 106.5;
}

const fromEuroToDollar = (euroValue) => {
	return euroValue * 1.2;
}

const fromYenToPound = (yanValue) => {
	return yanValue * 0.006;
}

module.exports = { fromEuroToDollar, fromYenToPound,fromDollarToYen};
