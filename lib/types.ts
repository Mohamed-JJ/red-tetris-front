export type LoginInput = {
  userName: string,
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
  id:number;
  firstName: string;
  lastName: string;
  username: string;
  email?:string;
  passwordActive?: boolean;
  multiplayerMatches: number;
  singleplayerMatches: number;
  winrate: number;
} 

export type ShortUser = {
  id?:number;
  userName?: string;
  signIn: boolean
} 
