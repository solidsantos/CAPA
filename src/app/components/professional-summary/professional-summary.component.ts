import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professional-summary',
  templateUrl: './professional-summary.component.html',
  styleUrls: ['./professional-summary.component.scss'],
})
export class ProfessionalSummaryComponent {
  @Input() public summary?: string;
}
