import { ToCamelPipe } from './to-camel.pipe';

describe('ToCamelPipe', () => {
  it('create an instance', () => {
    const pipe = new ToCamelPipe();
    expect(pipe).toBeTruthy();
  });
});
