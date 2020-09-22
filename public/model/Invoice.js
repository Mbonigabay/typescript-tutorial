export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    getClient() {
        return this.client;
    }
    getDetails() {
        return this.details;
    }
    getAmount() {
        return this.amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
