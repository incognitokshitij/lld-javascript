// RECEIVER - knows how to do the actual work
class Light {
    constructor(location) {
        this.location = location;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        console.log(`${this.location} light is ON`);
    }

    turnOff() {
        this.isOn = false;
        console.log(`${this.location} light is OFF`);
    }
}

class Fan {
    constructor(location) {
        this.location = location;
        this.speed = 0;
    }

    on() {
        this.speed = 1;
        console.log(`${this.location} fan is ON`);
    }

    off() {
        this.speed = 0;
        console.log(`${this.location} fan is OFF`);
    }
}

// COMMAND INTERFACE
class Command {
    execute() { }
    undo() { }
}

// CONCRETE COMMANDS
class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }

    undo() {
        this.light.turnOff();
    }
}

class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }

    undo() {
        this.light.turnOn();
    }
}

class FanOnCommand extends Command {
    constructor(fan) {
        super();
        this.fan = fan;
    }

    execute() {
        this.fan.on();
    }

    undo() {
        this.fan.off();
    }
}

// INVOKER - triggers commands
class RemoteControl {
    constructor() {
        this.history = [];
    }

    submit(command) {
        command.execute();
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        if (command) {
            command.undo();
        } else {
            console.log("Nothing to undo!");
        }
    }
}

// USAGE
const livingRoomLight = new Light("Living Room");
const bedroomFan = new Fan("Bedroom");

const lightOn = new LightOnCommand(livingRoomLight);
const lightOff = new LightOffCommand(livingRoomLight);
const fanOn = new FanOnCommand(bedroomFan);

const remote = new RemoteControl();

console.log("=== Executing Commands ===");
console.log("1. Turning on light...");
remote.submit(lightOn);

console.log("2. Turning on fan...");
remote.submit(fanOn);

console.log("\n=== Undo Commands ===");
console.log("3. Undo (should turn off fan)...");
remote.undo();

console.log("4. Undo (should turn off light)...");
remote.undo();

console.log("\n=== History is empty now ===");
console.log("5. Trying undo again...");
remote.undo();  // Nothing to undo