import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoriaanimalService} from "../services/categoriaanimal.service";
import {ModalComponent} from "../bootstrap/modal/modal.component";
import {MessageService} from "../services/message.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-categoriaanimal-list',
  templateUrl: './categoriaanimal-list.component.html',
  styleUrls: ['./categoriaanimal-list.component.css']
})
export class CategoriaanimalListComponent implements OnInit {


      categoria = {};
      categoriaDelete = null;
      message = null;
      @ViewChild(ModalComponent)
      modal: ModalComponent;


   // Object = this.categoria;


  constructor(private categoriaService: CategoriaanimalService, private router: Router,
              private route: ActivatedRoute, private messageService:MessageService) {
            this.message = this.messageService.message
  }

  categoriaKeys(){
      return Object.keys(this.categoria)
  }


    deletacategoria(id) {

      this.categoriaService.destroy(id).subscribe(() => {
        //const index = this.categoriaKeys().indexOf(this.categoriaDelete);

            for (let key of this.categoriaKeys()) {
                if (this.categoria[key].id == this.categoria) {
                    delete this.categoria[key];
                }

                //this.messageService.message = 'categoria Deleteda'
                //this.router.navigate(['/categorias'])
            }
            /*
            this.categoriaService.destroy(this.categoriaKeys())
                .subscribe(() => {
                    this.messageService.message = 'Categoria Deletada'
                    this.router.navigate(['/categorias'])
                });
                */
      });
  }

  ngOnInit(){

      this.categoriaService.query()
      .subscribe(data => this.categoria = data);

  }




    // this.categoriaService.query()
    //.subscribe(data => this.categoria = <any>data,
    //error => this.message = <any> error);

    //this.categoriaService.query()
    //.subscribe(data => console.log(data));



    //this.categoriaService.query()
//.subscribe(data => this.categoria = data.categoria);



  /*
  destroy(id, index){
    if(confirm('Deseja excluir esse post?')){
      this.categoriaService.destroy(+id).subscribe(() => {
        this.categorias.splice(index, 1);
      });
    }
  }
*/

  /*
    destroy(){
    this.custoService.destroy(+this.custoDelete.custo).subscribe(() =>{
      //qconst index = this.custo.indexOf(this.custoDelete);
      //this.custo.splice(index, 1);
      this.modal.close();
    });
  }

   */

  /*
  destroy(id){
      this.categoriaService.destroy(+this.categoriaDelete.categoria).subscribe(() =>{
          const index = this.categoriaKeys().indexOf(this.categoriaDelete);
          this.categoriaKeys();


      });

  }
*/

  openModal(categoria){
    this.categoriaDelete = this.categoria;
    this.modal.open();
  }

}
