import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  images:string[] = ['../../../assets/dog-img.jpg', '../../../assets/lady-img.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
