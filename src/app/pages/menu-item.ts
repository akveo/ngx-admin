import { NbMenuItem } from '@nebular/theme';

export declare abstract class MenuItem extends NbMenuItem {
    key?: string;
    children?: MenuItem[];
    parent?: MenuItem;
}
