// SUBJECT - the one being observed (YouTube Channel)
class YouTubeChannel {
    constructor(name) {
        this.name = name;
        this.subscribers = [];  // List of observers
    }

    // Add observer
    subscribe(observer) {
        this.subscribers.push(observer);
        console.log(`${observer.name} subscribed to ${this.name}`);
    }

    // Remove observer
    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter(sub => sub !== observer);
        console.log(`${observer.name} unsubscribed from ${this.name}`);
    }

    // Notify all observers
    notify(videoTitle) {
        this.subscribers.forEach(subscriber => {
            subscriber.update(this.name, videoTitle);
        });
    }

    // When new video is uploaded
    uploadVideo(title) {
        console.log(`${this.name} uploaded: ${title}`);
        this.notify(title);
    }
}

// OBSERVER - the ones who watch (Subscribers)
class Subscriber {
    constructor(name) {
        this.name = name;
    }

    update(channelName, videoTitle) {
        console.log(`${this.name} received notification: ${channelName} uploaded "${videoTitle}"`);
    }
}

// USAGE
const channel = new YouTubeChannel("CodeWithMe");

const user1 = new Subscriber("Alice");
const user2 = new Subscriber("Bob");
const user3 = new Subscriber("Charlie");

channel.subscribe(user1);
channel.subscribe(user2);
channel.subscribe(user3);

channel.uploadVideo("Observer Pattern Explained");
// Output:
// CodeWithMe uploaded: Observer Pattern Explained
// Alice received notification: CodeWithMe uploaded "Observer Pattern Explained"
// Bob received notification: CodeWithMe uploaded "Observer Pattern Explained"
// Charlie received notification: CodeWithMe uploaded "Observer Pattern Explained"

channel.unsubscribe(user2);  // Bob unsubscribes

channel.uploadVideo("Factory Pattern Tutorial");
// Only Alice and Charlie get notified now
