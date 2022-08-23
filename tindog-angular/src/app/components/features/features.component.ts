import { Component, OnInit } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { fa4 } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  faBullseye = faBullseye;
  faCheckCircle = faCheckCircle;
  faHeart =  faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
