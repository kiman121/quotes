import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(
      1,
      'Jane Mutwiri Makena',
      'When it comes to our favorite horror movies or books, the things that stay with us the most are the scary quotes that are said by the evil characters (or spirits!). Those sayings can be so creepy and so frightening that just the thought of someone saying them out loud is enough to send shivers down your spine. But if you are the one who likes to do the haunting, or you are just looking for some inspiration for your Halloween Instagram caption, you are going to want to read every single scary quote on our list. Most of these famous phrases are short but chilling. However, depending on your sense of humor, you may also find a few of them funny (although we do not think the person you are saying them to will think that!). The motifs you will find here are fear, danger, and more. You will also see references to vampires, ghosts and witches as well'
    , new Date(2020,3,14)),
    new Quote(2, 'Humphrey Gitonga Njagi', 'I have to buy cookies for the parrot', new Date(2019,6,9))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
