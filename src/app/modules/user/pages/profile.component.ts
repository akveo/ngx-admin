import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { User, UserService } from "../user.service";

@Component({
    selector: 'user-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();
    public user: User;
    public first: string = "Blah";
    public last: string;

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.userService.onUserStatus()
            .pipe(takeUntil(this.destroy$))
            .subscribe((user: any) => {
                this.user = user;
                this.user.first = 'Blargle';
                this.first = user?.first || 'Foo!';
                this.last = user?.last || 'Bar!';
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

}