export class Quote {
  showAddQuoteForm: boolean;
  constructor(
    public id: number,
    public authorName: string,
    public quote: string,
    public createdOn: Date
  ) {
    this.showAddQuoteForm = false;
  }
}