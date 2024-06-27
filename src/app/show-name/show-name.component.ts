import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import {Usuario} from "../../models/usuarios"
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
    selector: 'app-show-name',
    templateUrl: './show-name.component.html',
    styleUrl: './show-name.component.css',
    standalone: true,
    imports: [
        MatButtonModule, MatDialogModule, FormsModule, ReactiveFormsModule
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ShowNameComponent implements OnInit {
    usuario = new Usuario();
    caractere: number = 0;

    nome: FormControl = new FormControl("");


    ngOnInit() {
        this.valuesChange();
    }

    contarCaracters(nome: string) {
        this.caractere = nome.length
    }

    valuesChange() {
        this.nome.valueChanges.subscribe(value => {
            console.log(value);
        });
    }
}
