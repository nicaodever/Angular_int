import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ShowNameComponent} from "./show-name/show-name.component";
import { RouterOutlet} from "@angular/router";
import {CalculadoraComponent} from "./calculadora/calculadora.component";
import {TabletimesComponent} from "./tabletimes/tabletimes.component";
import {TableCartorioComponent} from "./table-cartorio/table-cartorio.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,
    ShowNameComponent, RouterOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly dialog = inject(MatDialog);

  openContador() {
    const dialogRef = this.dialog.open(ShowNameComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openCalculadora() {
    const dialogRef = this.dialog.open(CalculadoraComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openTableTimes(){
    const dialogRef: MatDialogRef<TabletimesComponent> = this.dialog.open(TabletimesComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openTableCartorio(){
    const dialogRef: MatDialogRef<TableCartorioComponent> = this.dialog.open(TableCartorioComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
