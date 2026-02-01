// TARGET - interface your code expects
class OldPaymentGateway {
    pay(amount) {
        return `Paid ₹${amount}`;
    }
}

// ADAPTEE - new system with different interface
class NewPaymentGateway {
    processTransaction(data) {
        return `Processed ₹${data.value}`;
    }
}

// ADAPTER - translates old interface to new
class PaymentAdapter {
    constructor() {
        this.gateway = new NewPaymentGateway();
    }

    // Same interface as OldPaymentGateway
    pay(amount) {
        // Translates to new system's interface
        return this.gateway.processTransaction({ value: amount });
    }
}

// CLIENT - works with both!
function checkout(paymentGateway, amount) {
    return paymentGateway.pay(amount);
}

// Usage
const oldGateway = new OldPaymentGateway();
const adaptedGateway = new PaymentAdapter();

console.log(checkout(oldGateway, 1000));     // Paid ₹1000
console.log(checkout(adaptedGateway, 1000)); // Processed ₹1000 ✅ Works!
