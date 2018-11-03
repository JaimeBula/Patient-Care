export class Address {
  type: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  zipcode: string;
  country: string;
}

export class Person{
  id: number;
  firstName: string;
  lastName: string;
}

export class Patient extends Person {
  registeredDate: Date;
  firstName: string;
  lastName: string;
  addresses: Address[];
}

export class Doctor extends Person {
  title: string;
}

