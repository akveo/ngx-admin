export class NgaMenuItem {
  title: string;
  url?: string;
  icon?: string;
  expanded?: boolean = false;
  selected?: boolean = false;
  children?: Array<NgaMenuItem>;
  target?: string;
  hidden?: boolean = false;
}

export class NgaMenuModuleConfig {
  menuItems: Array<NgaMenuItem>;
}
