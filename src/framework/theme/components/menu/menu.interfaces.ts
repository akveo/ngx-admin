// TODO: let's move this into the component (angular doesn't recommend using .interface files)
export class NgaMenuItem {
  title: string;
  // TODO let's add a 'link' property which accepts routerLink values
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
