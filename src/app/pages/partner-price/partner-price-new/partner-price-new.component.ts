import { Component, OnInit } from '@angular/core';
import { PartnerPriceService } from '../partner-price.service';
import { PartnerPriceNew } from '../../../@core/data/partner-price-new';
import { NbWindowRef } from '@nebular/theme';

@Component({
    selector: 'ngx-partner-price-new',
    styleUrls: ['./partner-price-new.component.scss'],
    templateUrl: './partner-price-new.component.html',
})
export class PartnerPriceNewComponent implements OnInit {

    items: PartnerPriceNew[] = []

    constructor(private service: PartnerPriceService, public windowRef: NbWindowRef ) {
    }

    ngOnInit(): void {
        this.getData();
    }

    getData() {
        this.service.getNewPrtnerPriceParam().subscribe((result) => {
            this.items = Object.assign([], result);
        });
    }

}