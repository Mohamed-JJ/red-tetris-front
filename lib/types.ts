export type LoginInput = {
  userName: string,
  password: string,
};

export type SignUpInput = {
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  passWord: string,
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
  userName: string;
  email?:string;
  passWordActive?: boolean;
  multiplayerMatches: number;
  singleplayerMatches: number;
  winrate: number;
  createdAt: Date;
} 

export type ShortUser = {
  id?:number;
  userName?: string;
  signIn: boolean
} 
