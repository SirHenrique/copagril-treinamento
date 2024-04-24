import { Component, Input } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';

@Component({
  selector: 'app-filiais',
  templateUrl: './filiais.component.html',
  styleUrls: ['./filiais.component.scss']
})
export class FiliaisComponent {
  @Input() vp!: VP_BPM
  showModalFil: boolean = false;

  public filialInput() {
    if(!this.vp.readOnlyFilial)
    this.showModalFil = true;
  }

  public filialSelect() {
    this.vp.codFil = this.vp.filial.codFil;
    this.vp.apeFil = this.vp.filial.apeFil;
    this.vp.nomFil = this.vp.filial.nomFil;

    this.showModalFil = false;
  }
}
