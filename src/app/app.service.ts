import { Injectable } from '@angular/core';
import { VP_BPM } from 'src/beans/VP_BPM';
import { environment } from 'src/environments/environment';
import * as wsb from 'src/beans/WS_Beans';
import { ResponseLoadData } from 'src/beans/VP_BPM';


const STEP = environment.tarefa();

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor() { }


}


