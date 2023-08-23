import { Component, ViewChild, ElementRef } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'modal-app',
  templateUrl: './modal.component.html',
  styleUrls:["./modal.component.css"]
  
})
export class ModalComponent {

  @ViewChild('exampleModalCenter') modalElement!: ElementRef;
  private formModal: any;

  showButtons: boolean = false
  inputValue:string = ""
  isOrder:string=""
  editingIndex: number = -1;


  comments: any[] = [
    {
      id:crypto.randomUUID(),
      userLogo: 'path-to-user-logo-1',
      userName: 'Mario F.',
      date: new Date(),
      content: 'Las pruebas estan dando problemas con las peticiones http'
    },
    {
      id: crypto.randomUUID(),
      userLogo: 'path-to-user-logo-2',
      userName: 'Pedrio S.',
      date: new Date(),
      content: 'El problema esta en la validacion de datos del formulario'
    },
    {
      id: crypto.randomUUID(),
      userLogo: 'path-to-user-logo-2',
      userName: 'Mario F.',
      date: new Date(),
      content: 'Otro mensaje de pruebas.'
    },
  ];

  ngAfterViewInit(): void {
    this.formModal = new bootstrap.Modal(this.modalElement.nativeElement);
  }

  onOpenModal(): void {
    this.formModal.show();
  }

  onCloseModal(): void {
    this.formModal.hide();
  }

  addNewComment():void{
    const newComment = {
      id: crypto.randomUUID(),
      userLogo: 'path-to-user-logo-2',
      userName: 'Juan',
      date: new Date(),
      content: this.inputValue
    }
    //  here make the request
    // try {
    //   this.http.post("url", newComment).subscribe()
    // } catch (error) {
    //   console.log("Something went wrong")
    // }
    this.comments.unshift(newComment)
    this.inputValue=""
    this.showButtons = false

  }

  onCancelAdding():void{
    this.showButtons = false
    this.inputValue=""
  }

  onDeleteComment(id:string):void{
    //  here make the request
    // try {
    //   this.http.delete(`url${id}`).subscribe()
    // } catch (error) {
    //   console.log("Something went wrong")
    // }
    this.comments=[...this.comments.filter(comment=>comment.id!==id)]
  }

  onSorted(order: 'asc' | 'desc'): void {
    this.comments.sort((a, b) => {
      if (order === 'asc') {
        return a.date.getTime() - b.date.getTime();
      } else {
        return b.date.getTime() - a.date.getTime();
      }
    });
  }


  toggleEditMode(index: number): void {
    this.editingIndex = (this.editingIndex === index) ? -1 : index;
  }
}
