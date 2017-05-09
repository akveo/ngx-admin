import { Component } from '@angular/core';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: 'slim',
    styleUrls: ['./slim.scss'],
    templateUrl: './slim.html'
})
export class SlimComponent {

    constructor(private slimLoader: SlimLoadingBarService) {}

    setProgres30() {
        this.slimLoader.progress = 30;
    }

    startProgress() {
        this.slimLoader.start(() => {
            console.log('Loading complete');
        });
    }

    completeProgress() {
        this.slimLoader.complete();
    }

    stopProgress() {
        this.slimLoader.stop();
    }

    resetProgress() {
        this.slimLoader.reset();
    }

    incrementProgress() {
        this.slimLoader.progress++;
    }

    changeProgressTo4px() {
        this.slimLoader.height = '4px';
    }

    changeProgressTo2px() {
        this.slimLoader.height = '2px';
    }

    changeProgressToWhite() {
        this.slimLoader.color = 'white';
    }

    changeProgressToGreen() {
        this.slimLoader.color = 'green';
    }
}
