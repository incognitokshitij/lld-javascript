// STRATEGIES - Different ways to do the same thing
class CreditCardPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Credit Card`);
    }
}

class UPIPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using UPI`);
    }
}

class NetBankingPayment {
    pay(amount) {
        console.log(`Paid ₹${amount} using Net Banking`);
    }
}

// CONTEXT - Uses the strategy
class PaymentContext {
    constructor() {
        this.strategy = null;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
        console.log(`Payment method set to: ${strategy.constructor.name}`);
    }

    pay(amount) {
        if (!this.strategy) {
            throw new Error("Please select a payment method first!");
        }
        this.strategy.pay(amount);
    }
}

// USAGE
const payment = new PaymentContext();

// User selects Credit Card
payment.setStrategy(new CreditCardPayment());
payment.pay(1000);  // Paid ₹1000 using Credit Card

// User changes to UPI
payment.setStrategy(new UPIPayment());
payment.pay(500);   // Paid ₹500 using UPI

// User changes to Net Banking
payment.setStrategy(new NetBankingPayment());
payment.pay(2000);  // Paid ₹2000 using Net Banking
