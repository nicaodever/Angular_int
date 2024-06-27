import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogModule,
    MatDialogTitle
} from "@angular/material/dialog";
import {Usuario} from "../../models/usuarios"
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculadora',
    templateUrl: './calculadora.component.html',
    styleUrl: './calculadora.component.css',
  standalone: true,
    imports: [
        MatButtonModule, MatDialogModule, FormsModule, ReactiveFormsModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CalculadoraComponent {
    usuario = new Usuario();
    protected readonly Usuario = Usuario;
    result: number = 0;

    somarDados (numero1: number, numero2: number, option: string){

         if(option == "+"){
             this.result = numero1 + numero2
             return this.result
         }
         else if(option == "-"){
             this.result = numero1 - numero2
             return this.result
         }
         else if(option == "/"){
             this.result = numero1 / numero2
             return this.result
         }
         else {
             this.result = numero1 * numero2
         }


        return this.result;
    }
}
