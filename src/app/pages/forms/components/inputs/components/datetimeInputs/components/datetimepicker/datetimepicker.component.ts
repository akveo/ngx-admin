import { Component, ElementRef, Input, Output, EventEmitter, OnInit, NgZone, SimpleChange} from '@angular/core';


@Component({
  selector: 'datetimepicker',
  template: require('./datetimepicker.html')
})

export class DateTimePicker extends OnInit{
  private _defaultDateTimeFormat = 'dd-M-yyyy hh:ii';
  private _defaultDateFormat = 'dd-M-yyyy';
  private _defaultTimeFormat = 'hh:ii';

  @Input() value: string;
  @Input() startDate: any;
  @Input() endDate: any;
  @Input() mode = ''; // datetime, date, or time
  @Input() minuteStep = 5;
  @Input() startView = 'month';
  @Input() minView = 'hour';
  @Input() maxView = 'decade';
  @Input() todayBtn = true;
  @Input() forceParse = true;
  @Input() format: string = '';
  @Input() disableType: boolean = false;
  @Input() showMeridian: boolean = false;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  private _picker = null;

  constructor(private myElement: ElementRef, private zone: NgZone) {
    super();
  }

  ngOnInit():any {
    this._picker = jQuery(this.myElement.nativeElement).find('.datetime-picker');

    if (this.mode === 'date'){
      this.todayBtn = true;
      this.startView = 'month';
      this.minView = 'month';
      this.maxView = 'decade';
      this.forceParse = true;
      if (this.format === ''){
        this.format = this._defaultDateFormat;
      }
    }
    else if (this.mode === 'time'){
      this.todayBtn = false;
      this.startView = 'day';
      this.minView = 'hour';
      this.maxView = 'day';
      this.forceParse = false;
      if (this.format === ''){
        this.format = this._defaultTimeFormat;
      }
    }

    if (this.format === ''){
      this.format = this._defaultDateTimeFormat;
    }

    this._picker.datetimepicker({
      autoclose: true,
      format: this.format,
      minuteStep: this.minuteStep,
      startView: this.startView,
      minView: this.minView,
      maxView: this.maxView,
      todayBtn: this.todayBtn,
      forceParse: this.forceParse,
      showMeridian: this.showMeridian
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
