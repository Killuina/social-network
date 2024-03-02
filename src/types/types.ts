export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
  phone: string;
  website: string;
  company: Company;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Geo {
  lat: string;
  lng: string;
}
