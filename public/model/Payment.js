export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    getRecipient() {
        return this.recipient;
    }
    getDetails() {
        return this.details;
    }
    getAmount() {
        return this.amount;
    }
    format() {
        return `${this.recipient} owed ${this.amount} for ${this.details}`;
    }
}
