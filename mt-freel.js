class Expedition extends Vacation {
    constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear;
    }
    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}
const trip2 = new Expedition("Mt. Whitney", 3, [
    "sunglasses",
    "prayer flags",
    "camera"
]);
trip2.print();

export default new Expedition("Mt. Freel", 2, ["water", "snack"]);