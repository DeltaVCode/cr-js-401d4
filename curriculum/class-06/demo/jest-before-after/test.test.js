describe('examples', () => {
  beforeAll(() => {
    console.log('Run once before all tests in this describe');
  })

  let sharedList;
  beforeEach(() => {
    sharedList = new Array();
    console.log('Run before each test');
  })

  afterEach(() => {
    console.log('Run after each test');
  })

  afterAll(() => {
    console.log('Run once after all tests (and their afterEach) in this describe');
  })

  it('works', () => {
    console.log('test works');
  });

  it.skip('is ignored', () => {})

  it('only run me!', () => {
    console.log('test is running!!!');
  })

  it('still works', () => {
    console.log('about to fail!');
    throw 'something went wrong!'
  });
  it('still works!!!!', () => {});
})