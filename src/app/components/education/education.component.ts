import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  @Input() public educationList?: Education[];
}
