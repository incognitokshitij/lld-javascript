class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;// Return existing instance
        }
        this.logs = [];
        Logger.instance = this;
    }

    log(message) {
        this.logs.push(message);
        console.log("Log:", message);
    }

    printLogs() {
        console.log(this.logs);
    }
}

// Usage
const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("First message");
logger2.log("Second message");

console.log(logger1 === logger2);// true
logger1.printLogs();// ["First message", "Second message"]

