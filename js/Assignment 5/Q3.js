const user = {
  name: "Rohit",
  showName: () => {
    console.log(this.name);
  }
};

user.showName();

const fixedUser = {
  name: "Rohit",
  showName: function() {
    console.log(this.name);
  }
};

fixedUser.showName();
