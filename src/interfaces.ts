export interface stateInterface {
  contacts: {
    contacts: [];
    isAddingContact: boolean;
  };
}

export interface StoreInterface {
  login: {
    isAuth: boolean;
  };
}

export interface ContactInterface {
  name: string;
  surname: string;
  age: number;
  isMale: boolean;
  phoneNumber: string;
  id: number;
  city: string;
}

export interface UserInfo {
  login: string;
  password: string;
  isAuth: boolean;
}
