
var rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
};

var discounts = {
    // values are in percentages.
    Apple: 10,
};

var taxes = {
    // values are in percentages.
    Carrot: 5,
    Guava: 10,
};

var purchases = [
    {
        item: 'Carrot',
        units: 20,
    },
    {
        item: 'Apple',
        units: 2,
    },
    {
        item: 'Guava',
        units: 1,
    },
];

/* Functions */
const getDiscountPercent = (lineItem) =>  (discounts[lineItem.item] || 0)/100; //Short Circuit Operator
//const getDiscountPercent = (lineItem) =>  discounts[lineItem.item] ? (discounts[lineItem.item] / 100) : 0;

const getTaxPercent = (lineItem) => (taxes[lineItem.item] || 0)/100;

const getUnitPrice = (lineItem) => {
    const discountAmount = rates[lineItem.item] * getDiscountPercent(lineItem);
    const taxAmount = rates[lineItem.item] * getTaxPercent(lineItem);

    return (rates[lineItem.item] - discountAmount + taxAmount);
}

const getLineItemPrice = (lineItem) =>  lineItem.units * getUnitPrice(lineItem);

const getSum = () => {
    const cartTotal = purchases.map(getLineItemPrice);

    return cartTotal.reduce((acc, cur) => acc + cur);
}

// Do not change below this line.
/* Main Function */
const main = () => console.log(getSum());


main();