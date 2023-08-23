import { Component, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';

import { Editor } from 'ngx-editor';

declare var bootstrap: any;

interface Comment {
  id: any;
  userLogo: string;
  userName: string;
  date: Date;
  content: string;
  editor: Editor;
}

@Component({
  selector: 'modal-app',
  templateUrl: './modal.component.html',
  styleUrls:["./modal.component.css"]
  
})
export class ModalComponent implements OnInit, OnDestroy {
  

  @ViewChild('exampleModalCenter') modalElement!: ElementRef;
  @ViewChild('isEditing') isEditing!: ElementRef<HTMLInputElement>;
  
  private formModal: any;

  showButtons: boolean = false
  inputValue:string = ""
  isOrder:string=""
  editingIndex: number = -1;


  editor!: Editor;
  html:string = '';
  editorInput!:Editor

  comments: Comment[] = [];

  ngOnInit():void{
    this.editorInput = new Editor();
    
    if(this.comments.length!==0){
      this.comments.forEach(comment => {
        comment.editor = new Editor();
      });
    }
  }
  ngAfterViewInit(): void {
    this.formModal = new bootstrap.Modal(this.modalElement.nativeElement);
  }
  ngOnDestroy(): void {
    this.editorInput.destroy()
    
    if(this.comments.length!==0){
      this.comments.forEach(comment => {
        comment.editor.destroy()
      });
    }
    
  }

  onEditorFocus(): void {
    this.showButtons = true;
  }

  onOpenModal(): void {
    this.formModal.show();
  }

  onCloseModal(): void {
    this.formModal.hide();
  }



  addNewComment(): void {
    if (this.html.trim().length < 1) return;

    const newComment = {
      id : crypto.randomUUID(),
      userLogo : 'url-user',
      userName : 'Juan',
      date : new Date(),
      content : this.html,
      editor : new Editor(),
    }
    console.log(this.html)

    this.comments.unshift(newComment);
    this.html = "";
    this.showButtons = false;
  }

  onCancelAdding():void{
    this.showButtons = false
    this.html =""
  }

  onDeleteComment(id: string): void {
    const indexToDelete = this.comments.findIndex(comment => comment.id === id);
    if (indexToDelete !== -1) {
      // Destruir la instancia del editor antes de eliminar el comentario
      this.comments[indexToDelete].editor.destroy();
      this.comments.splice(indexToDelete, 1);
    }
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


