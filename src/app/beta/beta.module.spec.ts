import { BetaModule } from './beta.module';

describe('BetaModule', () => {
  let betaModule: BetaModule;

  beforeEach(() => {
    betaModule = new BetaModule();
  });

  it('should create an instance', () => {
    expect(betaModule).toBeTruthy();
  });
});
