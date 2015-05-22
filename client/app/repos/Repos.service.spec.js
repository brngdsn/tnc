'use strict';

describe('Service: Repos', function () {

  // load the service's module
  beforeEach(module('ginApp'));

  // instantiate service
  var Repos;
  beforeEach(inject(function (_Repos_) {
    Repos = _Repos_;
  }));

  it('should do something', function () {
    expect(!!Repos).toBe(true);
  });

});
