import * as test from "tape";
import { Auth } from "../dist";

test("Test that Auth correctly sets singleton", async (assert) => {
  assert.throws(() => Auth.current, "Auth throws if unset");
  const auth = new Auth("test-key");
  assert.equal(auth.key, "test-key", "The auth instance has the correct key");
  assert.doesNotThrow(() => Auth.current, "Auth.current does not throw after being instanciated");
  assert.deepEqual(Auth.current, auth, "Auth.current returns correct auth token");
});
