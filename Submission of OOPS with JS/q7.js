class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount <= 0) throw new Error("Invalid deposit");
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) throw new Error("Insufficient funds");
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();

try {
    acc.deposit(1000);
    acc.withdraw(500);
    console.log("Balance:", acc.getBalance());

    acc.withdraw(2000); // error
} catch (err) {
    console.log("Error:", err.message);
}
