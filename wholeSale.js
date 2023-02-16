var UnitPrices = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
};

var Discounts = {
    // values are percentages
    Apple: 10,
};

var Taxes = {
    // values are percentages
    Carrot: 5,
    Guava: 10,
};
var Bills = [
    [
        {
            item: 'Carrot',
            units: 200,
        },
        {
            item: 'Apple',
            units: 150,
        },
        {
            item: 'Guava',
            units: 40,
        },
    ],
    [
        {
            item: 'Carrot',
            units: 20,
        },
    ],
    [
        {
            item: 'Apple',
            units: 30,
        },
        {
            item: 'Guava',
            units: 80,
        },
    ]
];
var PaymentsMade = [
    10000,
    3000,
    7500,
];

const getDiscountPercent = (lineItem) => (Discounts[lineItem.item] || 0) / 100; //Short Circuit Operator

const getTaxPercent = (lineItem) => (Taxes[lineItem.item] || 0) / 100;

const getUnitPrice = (lineItem) => {
    const discountAmount = UnitPrices[lineItem.item] * getDiscountPercent(lineItem);
    const taxAmount = UnitPrices[lineItem.item] * getTaxPercent(lineItem);

    return (UnitPrices[lineItem.item] - discountAmount + taxAmount);
}

const getLineItemPrice = (lineItem) => lineItem.units * getUnitPrice(lineItem);

const getSum = (purchases) => {
    const cartTotal = purchases.map(getLineItemPrice);

    return cartTotal.reduce((acc, cur) => acc + cur);
}

/* Programme */
const PendingPayments = () => {
    const billTotal = Bills.map(getSum);
    const wholeSaleBill = billTotal.reduce((acc,cur) => acc+cur);
    const paymentMadeTotal = PaymentsMade.reduce((acc,cur) => acc+cur);
    return (wholeSaleBill-paymentMadeTotal);
}

// Do not change below this line.

/* Main Function */
const main = () => console.log(PendingPayments());

main();



