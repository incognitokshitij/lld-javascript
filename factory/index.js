class EmailNotification {
    send(message) {
        console.log("sending email : ", message);
    }
}

class SMSNotification {
    send(message) {
        console.log("sending sms : ", message);
    }
}

class PushNotification {
    send(message) {
        console.log("sending push notification : ", message);
    }
}

class NotificationFactory {
    createNotification(type) {
        switch (type) {
            case "email":
                return new EmailNotification();
            case "sms":
                return new SMSNotification();
            case "push":
                return new PushNotification();
            default:
                throw new Error(`Unknown notification type: ${type}`);
        }
    }
}

// Usage
const notificationFactory = new NotificationFactory();

const email = notificationFactory.createNotification("email");
const sms = notificationFactory.createNotification("sms");
const push = notificationFactory.createNotification("push");

email.send("Welcome to our app!");  // Sending EMAIL: Welcome to our app!
sms.send("Your OTP is 1234");       // Sending SMS: Your OTP is 1234
push.send("You have a new message"); // Sending PUSH: You have a new message