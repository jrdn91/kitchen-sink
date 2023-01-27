import { log } from "logger";
import { createServer } from "./server";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 5001;
const server = createServer();

const test: Test = {
  bar: 1,
  foo: "foo",
};

const user: User = {
  email: "test@mail.com",
  active: true,
  auth0Id: "auth0|123456789",
  created: new Date(),
  firstName: "John",
  id: 1,
  lastActive: new Date(),
  lastName: "Doe",
  phone: "1234567890",
  updated: new Date(),
};

server.listen(port, () => {
  log(`api running on ${port}`);
});
