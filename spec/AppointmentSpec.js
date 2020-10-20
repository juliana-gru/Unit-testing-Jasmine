describe("Appointment", function() {

  it("should not charge if it is covered", function() {
    const charles = new Patient('charles', 28, 72, 1.80);
    const appointment = new Appointment(charles, [], true, true);

    expect(appointment.fee()).toEqual(0);
  });

  it("should charge 25 for non-specified procedures", function() {
    const charlie = new Patient('charlie', 28, 72, 1.80);
    const appointment2 = new Appointment(charlie, ['proc1', 'proc2'], false, false);

    expect(appointment2.fee()).toEqual(50);
  });

  it("should charge a specific fee for defined procedures", function() {
    const jane = new Patient('jane', 20, 15, 1.60);
    const appointment = new Appointment(jane, ['random procedure', 'x-ray', 'plaster cast'], false, false)

    expect(appointment.fee()).toEqual(25+55+32);
  });
});