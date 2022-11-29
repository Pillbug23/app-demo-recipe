import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <Button
        variant="outline-warning"
        size="lg"
        type="button"
        style={{ marginTop: 15 }}
        onClick={() => loginWithRedirect()}
      >
        Login with Auth0
      </Button>
    )
  );
};

export default Login;
