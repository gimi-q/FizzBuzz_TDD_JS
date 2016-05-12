describe('JavaBuzz',function() {

  var javabuzz;

  describe('Knows when a number is', function(){

    it('divisible by 3', function() {
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      javabuzz = new JavaBuzz();
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 3 and 5', function() {
     javabuzz = new Javabuzz();
     expect(javabuzz.isDivisibleByThreeAndFive(15)).toBe(true);
    })

  });

});
