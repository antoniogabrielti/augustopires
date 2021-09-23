import { CepServiceService } from './cepService.service';
import { FormBuilder, } from '@angular/forms';
import { AfterViewInit, Component, OnInit, } from '@angular/core';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit, AfterViewInit {




  primeiroPasso: boolean = true;
  segundoPasso: boolean = false;

    cadastroForm = this.fb.group({
     nome: ['',],
     sobrenome: ['',],
     rua: ['',],
     bairro: ['',],
     complemento: ['',],
     cep: ['',],
     cidade: ['',],
     estado: ['',]
    });



  constructor(private fb: FormBuilder, private cepsService: CepServiceService) {

    }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

  }

   consultaCep(){
     const valor = this.cadastroForm.get('cep').value
      console.log('valor',valor)
      this.cepsService.buscar(valor).subscribe((dados:any) => {
        console.log('estado',dados)
       this.cadastroForm.patchValue({
         rua: dados.logradouro,
         bairro: dados.bairro,
         complemento: dados.complemento,
         cep: dados.cep,
         cidade: dados.localidade,
         ddd: "",
         gia: "",
         ibge: "",
         siafi: "",
         estado: dados.uf,
       });
      });
     }

 adcionarCadastro() {
  if (this.cadastroForm.dirty && this.cadastroForm.valid) {
console.log('aqui', this.cadastroForm.value)

 }
  //ngAfterViewInit(): void {
   //let controlBlurs: Observable<any>[] = this.formInputElements
    //.map((FormControl: ElementRef) => fromEvent(FormControl.nativeElement, 'blur'));

  }




}


