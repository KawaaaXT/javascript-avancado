
module.exports = class Cachorro {
    constructor(cachorro, cachorro2) {
        this.cachorro = cachorro
        this.cachorro2 = cachorro2
    }

    latir() {
        console.log(`${this.cachorro} Esta com fome e ${this.cachorro2} está com sede`)
    }
}