class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.from = fromLocation;
        this.to = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0)
            throw new Error("Invalid distance");

        return this.distance * 12; // base rate
    }
}

try {
    const t = new Trip("A", "B", 8);
    console.log("Fare:", t.calculateFare());

    const t2 = new Trip("A", "B", -5);
    console.log(t2.calculateFare());
} catch (e) {
    console.log("Error:", e.message);
}
