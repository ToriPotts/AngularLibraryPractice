import { Component, OnInit } from '@angular/core';
import { Book } from '../book'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bookCard',
  templateUrl: './bookCard.component.html',
  styleUrls: ['./bookCard.component.css']
})
export class BookCardComponent implements OnInit {
  book: Book = {
    title: 'Bible',
    author: 'God',
    pages: 899,
    read: true
  }

 

  ngOnInit(): void {
  }

}
