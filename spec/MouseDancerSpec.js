describe('MouseDancer', function() {
  it('should have a followMouse method', function() {
    var mouser = new MouseDancer;
    expect(mouser.followMouse).to.be.function;
  });
});