import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-verification-icon',
    templateUrl: './verification-icon.component.html',
    styleUrls: ['./verification-icon.component.scss']
})
export class VerificationIconComponent {

    @Input() value: boolean;

}