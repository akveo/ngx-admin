import { Component, Input, OnInit } from "@angular/core";
import { OrganizationDataSharingAgreement } from "thingbook-api/lib";
import { OrganizationService } from "../../organization.service";

@Component({
    selector: 'org-data-sharing-agreement',
    templateUrl: './data-sharing-agreement.component.html',
    styleUrls: ['./data-sharing-agreement.component.scss']
})
export class DataSharingAgreementComponent implements OnInit {

    @Input() agreement: OrganizationDataSharingAgreement;

    constructor() {

    }

    ngOnInit() {

    }
}