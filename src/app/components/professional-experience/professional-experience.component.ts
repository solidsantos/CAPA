import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss'],
})
export class ProfessionalExperienceComponent {
  @Input() public experiences?: any;
}