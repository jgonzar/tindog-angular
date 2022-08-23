import { Component, OnInit } from '@angular/core';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  faGooglePlay = faGooglePlay;
  faApple = faApple;
  
  constructor() { }

  ngOnInit(): void {
  }

}
