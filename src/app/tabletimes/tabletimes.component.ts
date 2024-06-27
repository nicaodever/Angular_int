import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {Usuario} from "../../models/usuarios";
import {Time} from "../../models/time";

@Component({
  selector: 'app-tabletimes',
  templateUrl: './tabletimes.component.html',
  styleUrl: './tabletimes.component.css',
  standalone: true,
    imports: [
        FormsModule,
        MatButton,
        MatDialogActions,
        MatDialogClose,
        MatDialogContent,
        MatDialogTitle
    ],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabletimesComponent {
   time: Time = new Time();
   times: Time[] = [];

   adicionar(){
     this.times.push(this.time);
     this.time = new Time();
   }
   remover(){
     this.times.pop();
     this.time = new Time();

   }
}
