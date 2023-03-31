let totalPower = 0;

class Devices {
    constructor (name, power) {
        this.name = name;
        this.power = power;
    }
    powerOnOff = function (stat) {
        if (stat !== "on") {
            totalPower -= this.power;
            console.log(`The device ${this.name} power off!`);
        } else {
            totalPower += this.power;
            console.log(`The device ${this.name} power on!`);
        }
    }
}

class TableLamp extends Devices{
    constructor (luminousFlux, name, power) {
        super(name, power);
        this.luminousFlux = luminousFlux;
    }
    dimming = function () {
        this.luminousFlux += 100;
    }
    powerOnOff = function (stat) {
        if (stat !== "on") {
            totalPower -= this.power;
            console.log(`The table lamp ${this.name} power off!`);
        } else {
            totalPower += this.power;
            console.log(`The table lamp ${this.name} power on!`);
        }
    }
}

class Computer extends Devices{
    constructor (processor, name, power) {
        super(name, power);
        this.processor = processor;
    }
    powerOnOff = function (stat) {
        if (stat !== "on") {
            totalPower -= this.power;
            console.log(`The computer ${this.name} power off!`);
        } else {
            totalPower += this.power;
            console.log(`The computer ${this.name} power on!`);
        }
    }
}

const era = new TableLamp(100, "Era", 6);
const ardor = new Computer("i5-10500", "Ardor", 500);

console.log(totalPower);
era.powerOnOff("on");
console.log(totalPower);
era.powerOnOff("off");
console.log(totalPower);
ardor.powerOnOff("on");
console.log(totalPower);
era.powerOnOff("on");
console.log(totalPower);

console.log(era);
console.log(ardor);