import { AlphaModule } from './alpha.module';

describe('AlphaModule', () => {
  let alphaModule: AlphaModule;

  beforeEach(() => {
    alphaModule = new AlphaModule();
  });

  it('should create an instance', () => {
    expect(alphaModule).toBeTruthy();
  });
});
