

class Traveler {
    constructor(name) {

        this.name = name
        this.foodamount = 1
        this.isHealthy = true

    }

    hunt() {
        this.foodamount = this.foodamount + 2

    }

    eat() {

        if (this.foodamount > 0) {
            this.foodamount = this.foodamount - 1
        } else {
            this.isHealthy = false;
        }

    }


}

//CHILD CLASSES FOR TRAVELER

class Doctor extends Traveler {
    constructor(name) {
        super(name)

    }


    heal(traveler) {
        traveler.isHealthy = true
    }

}

class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.foodamount = 2
    }

    hunt() {
        this.foodamount = this.foodamount + 5
    }

    eat() {

        if (this.foodamount > 2) {
            this.foodamount = this.foodamount - 2
            
        } else { this.foodamount =0
            this.isHealthy = false;
        }

    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.foodamount >= numOfFoodUnits) {

            this.foodamount = this.foodamount - numOfFoodUnits

            traveler.foodamount = traveler.foodamount + numOfFoodUnits
        }

    }


}













//METHODS FOR THE TRAVELER

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengerslist = []
    }

    getAvailableSeatCount() {
        let currentNumberOfEmptySeats = this.capacity - this.passengerslist.length
        return currentNumberOfEmptySeats
    }

    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {

            this.passengerslist.push(traveler)
        }


    }


    shouldQuarantine() {

        for (let i = 0; i < this.passengerslist.length; i = i + 1) {

            let currentPassenger = this.passengerslist[i];


            let currentHealth = currentPassenger.isHealthy


            if (currentHealth === false) {
                return true
            }

        }
        return false
        //if this.isHealthy===  true

    }


    totalFood() {

        let TOTAL = 0
        for (let i = 0; i < this.passengerslist.length; i = i + 1) {

            let currentPassenger = this.passengerslist[i];
            TOTAL = TOTAL + currentPassenger.foodamount



        }

        return (TOTAL)

    }

}


















