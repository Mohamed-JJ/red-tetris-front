export type LoginInput = {
  email: string,
  password: string,
};

export type SignUpInput = {
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  password: string,
};

export type ModInformation = {
  firstName?: string,
  lastName?: string,
  password?: string,
};

export type User = {
  firstName: string;
  lastName: string;
  username: string;
  email:string;
  passwordActive: boolean;
  multiplayerMatches: number;
  singleplayerMatches: number;
  winrate: number;
}