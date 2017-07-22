import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'selector-with-add',
  templateUrl: './selector.html',
  styleUrls: ['./modals.scss']
})
export class SelectorWithAdd implements OnInit {


  constructor() {
  }

  ngOnInit() {
    this.setInitialState();
  }

  protected value: string;
  protected selectedValue: string;
  @Input()
  protected itemsList: string[];
  @Output()
  protected addedNewValues: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  protected onChangeSelectedValue: EventEmitter<string> = new EventEmitter<string>();




  //UI Variables
  feedBackClass: string;
  successfeedBackClass: string = " has-success ";
  failfeedBackClass: string = " has-error ";
  initialfeedBackClass: string = " has-feedback ";

  handleNewValues() {
    this.addedNewValues.emit(this.value);
    this.feedBackClass += this.successfeedBackClass;
    this.value = "";
  }

  handleSelectedValue() {
    this.onChangeSelectedValue.emit(this.selectedValue);
  }

  setInitialState(): void {
    this.feedBackClass = this.initialfeedBackClass;
  }


}
