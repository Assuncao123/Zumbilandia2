import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  constructor(
    private service: CadastroService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.getValidations();
  }

  getValidations(): FormGroup {
     return this.formBuilder.group({
      id: [0],
      nome: [null, [Validators.required]],
      rg: [null],
      dataNascimento: [null],
      uf: [null],
      celular: [null],
      email: [null],
      acompanhante: [false]
     });
  }

  submit() {
    if (!this.form.invalid) {
        this.service.post(this.form.value).subscribe(result => {
          let teste = result;
          console.log(teste);
        },
          error => alert(error));
      }
     else{
    alert("inválido");
  }}

}
