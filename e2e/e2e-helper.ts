export const hasClass = (el: any, cls: string) => {
  return el.getAttribute('class').then((classes: string) => {
    return classes.split(' ').indexOf(cls) !== -1;
  });
};
