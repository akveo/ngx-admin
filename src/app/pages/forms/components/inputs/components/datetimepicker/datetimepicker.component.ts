import { Component, ElementRef, Input, Output, EventEmitter, OnInit, NgZone, SimpleChange} from '@angular/core';


@Component({
  selector: 'datetimepicker',
  template: require('./datetimepicker.html')
})

export class DateTimePicker extends OnInit{
  @Input() value: string;
  @Input() startDate: any;
  @Input() endDate: any;
  @Input() minuteStep = 5;
  @Input() format: string = 'dd-mm-yyyy hh:ii';
  @Input() disableType: boolean = false;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  private _picker = null;

  constructor(private myElement: ElementRef, private zone: NgZone) {
    super();
  }

  ngOnInit():any {
    this._picker = jQuery(this.myElement.nativeElement).find('.datetime-picker');

    this._picker.datetimepicker({
      autoclose: true,
      format: this.format,
      minuteStep: this.minuteStep
    }).on('changeDate', (picker)=>{
      this.zone.run(()=>{
        this.value = picker.target.value;
        this.valueChange.emit(this.value);
      })
    });

    if (this.startDate != null){
      this._picker.datetimepicker('setStartDate', this.startDate);
    }
    if (this.endDate != null){
      this._picker.datetimepicker('setEndDate', this.endDate);
    }
  }

  public onBlur(){
    if (this.value !== this._picker.val()){
      this.value = this._picker.val();
      this.valueChange.emit(this.value);
    }
  }

  public ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if (this._picker != null){
      if (changes['startDate']){
        this._picker.datetimepicker('setStartDate', changes['startDate'].currentValue);
      }

      if (changes['endDate']){
        this._picker.datetimepicker('setEndDate', changes['endDate'].currentValue);
      }
    }
  }
}
