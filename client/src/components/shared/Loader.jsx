import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
const Loader = () => {
  return (
    <Container>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "40vh", zIndex: "10" }}
      >
        <Spinner animation="border" />
      </div>
    </Container>
  );
};

export default Loader;
