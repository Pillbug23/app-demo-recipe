import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import React from "react";

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Button
        variant="danger"
        size="lg"
        type="button"
        style={{ marginTop: 15 }}
        onClick={() => logout()}
      >
        Logout
      </Button>
    )
  );
};

export default Logout;
