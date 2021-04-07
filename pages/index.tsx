import { Container } from "react-bootstrap";
import People from "components/People";
import Experience from "components/Experience";
import Offerings from "components/Offerings";
import Hero from "components/Hero";
import Footer from "components/Footer";
import Meta from "components/Meta";
import Practical from "components/Practical";

export default function Home() {
  return (
    <>
      <Meta />
      <Hero />
      <Container className="mb-5">
        <Offerings />
        <People />
        <Experience />
        <Practical />
      </Container>
      <Footer />
    </>
  );
}
