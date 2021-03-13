import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { Organization, OrganizationDataSharingAgreement } from "thingbook-api/lib";
import { OrganizationService } from "../../organization.service";

@Component({
    selector: 'org-detail',
    templateUrl: './detail-page.component.html',
    styleUrls: ['./detail-page.component.scss'],
})
export class OrganizationDetailPageComponent implements OnInit {

    org: Organization;
    agreements: OrganizationDataSharingAgreement[] = [];

    constructor(private route: ActivatedRoute, private orgSvc: OrganizationService) {

    }

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                return this.orgSvc.getOrganization(params.get('id'));
            })
        ).subscribe(org => this.org = org);

        this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                return this.orgSvc.getOrganizationAgreements(params.get('id'));
            })
        ).subscribe(agreements => {
            this.agreements = agreements;
            console.log(agreements);
        });
    }

}
