class Checkout {
    constructor(openBalance) {
        this.openBalance = openBalance;
        this.transactions = [];
        this.totalIn = 0;
        this.totalOut = 0;
        this.closeBalance = openBalance;
    }
}

export default Checkout;