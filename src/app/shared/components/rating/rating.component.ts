import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent{
  @Input({required: true, transform: (value:number)=> Array(value).fill(0)})
  maxRating!: number[];

  @Input()
  rating = 0;

  lastRating = 0;

  @Output()
  vow = new EventEmitter<number>();

  handleClick(index:number){
    this.rating = index + 1;
    this.lastRating = this.rating;
    this.vow.emit(this.rating);
  }

  mouseEnter(index:number){
    this.rating = index + 1;
  }

  mouseLeave(){
    if(this.rating !=0){
      this.rating = this.lastRating;
    }else{
      this.rating = 0;
    }
  } 
}
