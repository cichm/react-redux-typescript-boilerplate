import * as React from "react";
import { auth } from "../../actions/auth/firebase";

export const SignOutButton = () => (
  <button type="button" onClick={auth.doSignOut}>
    Sign Out
  </button>
);