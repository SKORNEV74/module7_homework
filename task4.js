let totalPower = 0;

function Devices(name, power) {
    this.name = name,
    this.power = power
}

Devices.prototype.powerOnOff = function (stat){
    if (stat !== "on") {
        totalPower -= this.power;
        console.log(`The device ${this.name} power off!`);
    } else {
        totalPower += this.power;
        console.log(`The device ${this.name} power on!`);
    }
};

function TableLamp(name, power, luminousFlux) {
    this.name = name,
    this.power = power,
    this.luminousFlux = luminousFlux,
    this.dimming = function () {
        this.luminousFlux += 100;
    }
}
function Computer(name, power, processor) {
    this.name = name,
    this.power = power,
    this.processor = processor
}

TableLamp.prototype = new Devices();
Computer.prototype = new Devices();

TableLamp.prototype.powerOnOff = function (stat){
    if (stat !== "on") {
            totalPower -= this.power;
            console.log(`The table lamp ${this.name} power off!`);
    } else {
            totalPower += this.power;
            console.log(`The table lamp ${this.name} power on!`);
    }
};
Computer.prototype.powerOnOff = function (stat){
    if (stat !== "on") {
        totalPower -= this.power;
        console.log(`The computer ${this.name} power off!`);
    } else {
        totalPower += this.power;
        console.log(`The computer ${this.name} power on!`);
    }
};

const era = new TableLamp("Era", 6, 100);
const ardor = new Computer("Ardor", 500, "i5-10500");

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