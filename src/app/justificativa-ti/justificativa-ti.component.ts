import { Component, Input } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-justificativa-ti',
  templateUrl: './justificativa-ti.component.html',
  styleUrls: ['./justificativa-ti.component.scss']
})
export class JustificativaTiComponent {
  @Input() vp!: VP_BPM

  
}
