import { atom } from "recoil";

export interface IdType {
  loginId: string;
}

export const AdminUser = atom<IdType>({
  key: "AdminUser",
  default: {
    loginId: "",
  },
});
