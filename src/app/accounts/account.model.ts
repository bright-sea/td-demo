export class Account {
  public name: string;
  public number: string;
  public amount: number;
  public currency: string;

  constructor(name: string, number: string, amount: number, currency: string) {
    this.name = name;
    this.number = number;
    this.amount = amount;
    this.currency = currency;
  }
}
