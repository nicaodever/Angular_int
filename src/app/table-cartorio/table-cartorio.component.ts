import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {CivilPeople} from "../../models/CivilPeople";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from '@angular/material/table';

export interface Pessoas {
  id: number;
  nome: string;
  estadoCivil: string;

}

const PESSOAS_DATA: Pessoas[] = [


];

@Component({
  selector: 'app-table-cartorio',
  templateUrl: './table-cartorio.component.html',
  styleUrl: './table-cartorio.component.css',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatTableModule,
    MatDialogTitle,
    FormsModule
  ],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCartorioComponent {
    civilpeople: CivilPeople = new CivilPeople();
    pessoas: CivilPeople[] = [];
    dataSource = PESSOAS_DATA;
    contadorSolteiros: number = 0;
    contadorViuvos: number = 0;
    contadorCasados: number = 0;
    contadorDivorciados: number = 0;


     somaId: number = 0;
  displayedColumns: string[] = ['id', 'nome', 'estadoCivil'];


    autoIncremento(): number{
     return ++this.somaId;
}
    adicionar(){
      this.civilpeople.id = this.autoIncremento()
      this.dataSource.push(this.civilpeople)
      this.contador(this.civilpeople.estadoCivil);
      this.pessoas.push(this.civilpeople);
      this.civilpeople = new CivilPeople();
    }
    contador(estadoCivil : string){
      if(estadoCivil == 'solteiro'){
        this.contadorSolteiros++;
      }
      else if(estadoCivil == 'casado'){
        this.contadorCasados++;
      }
      else if (estadoCivil == 'divorciado'){
         this.contadorDivorciados++;
      }
      else {
        this.contadorViuvos++;
      }
    }
}
