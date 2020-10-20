function Patient(name, age, weight, height) {
  
  const patient = {
    print() {
      alert(`${name} is ${age} years old` );
    },

    heartbeats() {
      return age * 365 * 24 * 60 * 80;
    },

    imc() {
      return weight / (height * height);
    }
  }

  return patient;
}