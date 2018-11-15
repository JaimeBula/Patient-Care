import { ThrowStmt } from "@angular/compiler";

export class Address {
  type: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zipcode: string;
  country: string;
}

export class Person {
  id: number;
  firstName: string;
  lastName: string;
}

export class Patient extends Person {
  constructor() {
    super();

    this.addresses = new Array<Address>();
    const address = new Address();
    address.type = "HOME";
    this.addresses.push(address);
  }
  registeredDate: Date;
  doctor: number;
  addresses: Address[];
}

export class Doctor extends Person {
  title: string;
}

export class PatientView extends Patient {
  doctorName: Doctor;
  address: Address;

  constructor(patient: Patient, doctor: Doctor) {
    super();
    this.id = patient.id;
    this.firstName = patient.firstName;
    this.lastName = patient.lastName;
    this.registeredDate = patient.registeredDate;
    this.doctor = patient.doctor;
    this.address = patient.addresses[0];
    this.doctorName = doctor;
  }
}
