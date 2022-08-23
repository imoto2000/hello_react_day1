import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import { Container, Row, Col, Button } from "reactstrap";

const LoggedIn = () => {
  const { authUser, loading, _signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    console.log(">>>>>> called loading", loading);
    console.log(">>>>>> called authUser", authUser);

    if (!loading && !authUser) {
      router.push("/");
    }
  }, [authUser, loading, router]);

  const logOut = () => {
    _signOut();
  };

  return (
    <Container>
      {loading ? (
        <Row>
          <Col>Loading....</Col>
        </Row>
      ) : (
        <>
          <Row>
            <Col>
              {authUser && (
                <div>Congratulations {authUser?.email}! You are logged in.</div>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={logOut}>Sign out</Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default LoggedIn;
