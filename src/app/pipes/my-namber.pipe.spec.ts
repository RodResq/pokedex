import { MyNamberPipe } from './my-namber.pipe';

describe('MyNamberPipe', () => {
  it('create an instance', () => {
    const pipe = new MyNamberPipe();
    expect(pipe).toBeTruthy();
  });
});
