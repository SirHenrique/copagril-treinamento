import { Component, Input } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-adicionar-comentario',
  templateUrl: './adicionar-comentario.component.html',
  styleUrls: ['./adicionar-comentario.component.scss']
})
export class AdicionarComentarioComponent {
  @Input() vp!: VP_BPM
}
