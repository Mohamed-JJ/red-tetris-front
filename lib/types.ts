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
  username: string;
  winrate: number;
  multiplayerMatches: number;
  singleplayerMatches: number;
  firstName: string;
  lastName: string;
}