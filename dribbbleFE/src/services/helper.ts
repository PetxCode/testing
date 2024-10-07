import { createAccount } from "./api/userAPI";

export const handleRegister = (
  e: any,
  data: any,
  setPending: any,
  nav: any
) => {
  // "use server";
  e.preventDefault();
  setPending(true);

  createAccount(data)
    .then((res) => {
      if (res.status === 201) {
        nav;
      } else {
        return;
      }
    })
    .finally(() => {
      setPending(false);
    });
};
