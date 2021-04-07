import Contact from "components/Contact";
import Attribution from "components/Attribution";

export default function Footer() {
  return (
    <div className="px-4 shadow py-4 bg-darker border-bottom border-top border-dark">
      <Contact />
      <Attribution />
    </div>
  );
}
