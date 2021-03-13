import { Component, OnInit } from "@angular/core";
import { Organization } from "thingbook-api/lib";
import { OrganizationService } from "../../organization.service";

@Component({
    selector: 'organization-list',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss']
})
export class OrganizationListPageComponent implements OnInit {

    orgs: Organization[];

    constructor(private orgSvc: OrganizationService) {

    }

    ngOnInit() {
        this.orgSvc.getOrganizations()
            .subscribe(orgs => {
                this.orgs = orgs;
                console.log(this.orgs);
            });
    }
}