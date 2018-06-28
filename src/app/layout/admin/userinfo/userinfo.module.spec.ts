import { UserinfoModule } from './userinfo.module';

describe('UserinfoModule', () => {
  let userinfoModule: UserinfoModule;

  beforeEach(() => {
    userinfoModule = new UserinfoModule();
  });

  it('should create an instance', () => {
    expect(userinfoModule).toBeTruthy();
  });
});
