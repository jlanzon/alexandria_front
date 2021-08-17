export interface Role {
  publisher?: boolean;
  reader?: boolean;
  manager?: boolean;
  developer?: boolean;
  admin?: boolean;
}

export interface User {
    uid: string;
    email: string;
    displayname?: string;
    rank?: string;
    role: Role;
    topRole?: string;
    verified?: boolean;
    photoURL?: string;
}
