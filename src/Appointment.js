function Appointment(patient, procedures, privatePatient, covered) {
  
  const appointment = {
    fee() {
      if(covered) return 0;
      let charge = 0;

      procedures.forEach(procedure => {
        if (procedure === 'x-ray') charge += 55;
        else if (procedure === "plaster cast") charge += 32;
        else charge += 25;
      });

      if (privatePatient) charge *= 2;
      return charge;
    } 
  };

  return appointment;
}