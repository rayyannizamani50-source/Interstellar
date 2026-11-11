// @ts-check
import { module } from "@prisma/composer";
import heartwoodService from "./service.mjs";

export default module("heartwood", ({ provision }) => {
  provision(heartwoodService);
});
