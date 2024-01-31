export type APIError = {
  reason: string;
};

export type UserDTO = {
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  avatar: string;
  phone: string;
  email: string;
};

export type TCreateUser = Omit<UserDTO, "avatar" | "display_name" | "id">  & {
  password: string;
}

export type TSignUpResponse = {
  id: number;
}
