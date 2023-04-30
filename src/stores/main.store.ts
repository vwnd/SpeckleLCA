import { defineStore } from "pinia";

export const useStore = defineStore("main", () => {
  function login() {
    throw new Error("Not Implemented.");
  }

  return { login };
});
