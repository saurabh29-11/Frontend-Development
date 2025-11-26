function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function() {
  console.log(this.brand, this.model);
};

const c1 = new Car("Toyota", "Innova");
const c2 = new Car("Honda", "City");

c1.getDetails();
c2.getDetails();
