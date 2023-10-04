//For this exercise, you will have to go through a sales profit data of multiple products and return the product with:

//Highest sales profit

//Lowest sales profit

//Profit nearest to 0


const productProfitArray = [
    {
        "product A": -75,
    },
    {
        "product B": -70,
    },
    {
        "product C": 95,
    },
    {
        "product D": 5,
    },
    {
        "product E": 88,
    },
    {
        "product F": 29,
    },
];
//highest sales profit
function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data";
    }

    productProfitArray.sort((a,b) => {
        const ProfitA = Object.values(a)[0];
        const ProfitB = Object.values(b)[0];
        return ProfitB - ProfitA;
    });
    return Object.keys(productProfitArray[0]);
}
console.log(`Top Product: ${topProduct(productProfitArray)}`);

//lowest sales profit
function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data";
    }

    productProfitArray.sort((a, b) => {
        const profitA = Object.values(a)[0];
        const profitB = Object.values(b)[0];
        return profitA - profitB;
    });

    return Object.keys(productProfitArray[0]);
}
console.log(`Bottom Product: ${bottomProduct(productProfitArray)}`);

//profit nearest to 0
function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data";
    }

    let closestProduct = null;
    let closestProfit = Infinity;

    for (const product of productProfitArray) {
        const productName = Object.keys(product)[0];
        const profit = Object.values(product)[0];
        const absoluteProfit = Math.abs(profit);

        if (absoluteProfit < closestProfit || (absoluteProfit === closestProfit && profit > 0)) {
            closestProduct = productName;
            closestProfit = absoluteProfit;
        }
    }

    return closestProduct;
}

console.log(`Zero Profit Product: ${zeroProfitProduct(productProfitArray)}`);




