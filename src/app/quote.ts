export class Quote {
  constructor(
    public id: number,
    public authorName: string,
    public quote: string,
    public createdOn: Date,
    public upVote: number,
    public downVote: number,
    public status:boolean = false
  ) {}
}
