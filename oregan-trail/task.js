class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.IsHealthy = true

    }
    hunt() {
        return this.food += 2
    }
    eat() {
        if (this.food <= 0) {
            return this.IsHealthy = false
        }
        this.food -= 1
    }



}
class Doctor extends Traveler{
    constructor (name,food, IsHealthy){
    super(name, food, IsHealthy)  
}
 heal(traveler){
 return traveler.IsHealthy = true

}
}
class Hunter extends Traveler{
    constructor (name,food = 2, IsHealthy){
        
        super(name, food, IsHealthy)  
        this.food = food
    }
    hunt() {
        return this.food += 5
    }
    eat() {
        if (this.food < 2) {
            this.food -=1
            return this.IsHealthy = false
        }
        this.food -= 2
        
    }
      
    giveFood(traveler, numOfFoodUnits) {
        if(this.food > numOfFoodUnits){
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits

        }
       
       
    

}
}
class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount() {
        let seat = this.capacity - this.passengers.length
        return seat
    }
    join(traveler) {
        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine() {
        const healthy = this.passengers.some(traveler =>
            traveler.IsHealthy === false)
        return healthy
    }

    totalFood() {
        let allFood = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            allFood += this.passengers[index].food
        }
        console.log(this.passengers)
        return allFood
    }

}
// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);