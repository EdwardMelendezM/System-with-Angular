import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'modal-small',
  templateUrl: './modal-small.component.html',
  styleUrls: ['./modal-small.component.css']
})

export class ModalSmallComponent {
  @ViewChild('modalSmall') modalElement!: ElementRef
  private formModal: any;

  @Output() onDeleteComment = new EventEmitter();

  ngAfterViewInit(): void {
    this.formModal = new bootstrap.Modal(this.modalElement.nativeElement);
  }
  onOpenModal(): void {
    this.formModal.show();
  }

  onCloseModal(): void {
    this.formModal.hide();
  }

  onDelete(){
    this.onDeleteComment.emit();
    this.formModal.hide();
  }
}
