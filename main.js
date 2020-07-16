

class Traveler {
    constructor(name, foodamount, isHealthy) {

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

        // console.log(this.passengerslist)
    }


    shouldQuarantine() {

        for (let i = 0; i < this.passengerslist.length; i = i + 1) {

            let currentPassenger = this.passengerslist[i];

            console.log(currentPassenger)

            let currentHealth = currentPassenger.isHealthy

            //console.log(currentHealth)

            if (currentHealth === false) {
                return true
            }

        }
        return false
        //if this.isHealthy===  true

    }


    totalFood() {

        for (let i = 0; i < this.passengerslist.length; i = i + 1) {

            let currentPassenger = this.passengerslist[i];

            let totalFoodAmount = currentPassenger.foodamount

            return (totalFoodAmount)
        }



    }

}


















