describe('ColorDancer', function() {
  it('should generate a random color', function() {
    var dancerOne = new ColorDancer;
    var dancerTwo = new ColorDancer;

    var colorOne = dancerOne.$node.css('border-color');
    var colorTwo = dancerTwo.$node.css('border-color');

    expect(colorOne === colorTwo).to.be.false;
  });
});