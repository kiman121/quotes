import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  // @Output() hideAddQuoteBtn = new EventEmitter();
  @Output() popularVote = new EventEmitter();

  hideAddQuoteForm = false;

  toggleDisplayQuoteForm() {
    this.hideAddQuoteForm = !this.hideAddQuoteForm;
  }

  quotes: Quote[] = [
    new Quote(
      1,
      'Jane Mutwiri Makena',
      'When it comes to our favorite horror movies or books, the things that stay with us the most are the scary quotes that are said by the evil characters (or spirits!). Those sayings can be so creepy and so frightening that just the thought of someone saying them out loud is enough to send shivers down your spine. But if you are the one who likes to do the haunting, or you are just looking for some inspiration for your Halloween Instagram caption, you are going to want to read every single scary quote on our list. Most of these famous phrases are short but chilling. However, depending on your sense of humor, you may also find a few of them funny (although we do not think the person you are saying them to will think that!). The motifs you will find here are fear, danger, and more. You will also see references to vampires, ghosts and witches as well',
      new Date(2020, 3, 14),
      0,
      0
    ),
    new Quote(
      2,
      'Humphrey Gitonga Njagi',
      'Tell your closest friends that they play significant roles in your life with one of these heartwarming messages. Whether you need a caption for an Instagram post of the two of you having fun together, inspiration for what to write in a card for your bestie or just want to send a quick text that will brighten her day, read on for some of the best friendship messages out there. For more heartwarming messages, be sure to explore our favorite family quotes, love quotes and happy quotes!',
      new Date(2019, 6, 9),
      0,
      0
    ),
    new Quote(
      3,
      'Damaris Katuo Musili',
      "The golden rule for every businessman is this: Put yourself in your customer's place.",
      new Date(2021, 7, 17),
      0,
      0
    ),
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.createdOn = new Date(quote.createdOn);
    this.quotes.push(quote);

    this.hideAddQuoteForm = !this.hideAddQuoteForm;
  }
  vote(voteType, index) {
    if (voteType === 'up-vote') {
      this.quotes[index].upVote = this.quotes[index].upVote + 1;
    } else if (voteType === 'down-vote') {
      this.quotes[index].downVote = this.quotes[index].downVote + 1;
    }
    this.favoriteQuote();
  }
  alertUser() {
    window.alert('Time to hide the button!');
  }

  favoriteQuote() {
    let maxValue: number = Math.max.apply(
      Math,
      this.quotes.map(function (quote) {
        return quote.upVote;
      })
    );
    let quoteIndex: number = this.quotes.findIndex(
      (quote) => quote.upVote === maxValue
    );

    this.quotes.forEach((quote) => {
      quote.status = false;
    });

    this.quotes[quoteIndex].status = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
