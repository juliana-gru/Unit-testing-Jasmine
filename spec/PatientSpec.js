describe('Patient', function() {
  it('should calculate the imc', function () {
    const john = new Patient('John', 28, 72, 1.82);
    const imc = john.imc();

    expect(imc).toEqual(72/ (1.82 * 1.82));
  });

  it('should calculate the imc 2', function () {
    const john = new Patient('John', 28, 72, 1.82);
    const imc = john.imc();

    expect(imc).toEqual(72/ (1.82 * 1.82));
  })
})