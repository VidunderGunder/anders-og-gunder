import { Col, Row } from "react-bootstrap";

export default function Practical() {
  return (
    <Row className="justify-content-center pb-4">
      <Col xs={12}>
        <div style={{ display: "grid", placeItems: "center" }}>
          <div style={{ maxWidth: 280, width: "75%" }}>
            <h2 className="text-center my-5">Vi ser etter...</h2>
            <ul>
              <li>Bedrifter som vil adoptere teknologi</li>
              <li>Oppstartselskaper med gode idéer</li>
              <li>Folk som prøver å utrette en forskjell</li>
              <li>Generelt kule prosjekter</li>
            </ul>
          </div>
        </div>
      </Col>
      <Col xs={12}>
        <div style={{ display: "grid", placeItems: "center" }}>
          <div style={{ maxWidth: 625, width: "75%" }}>
            <h2 className="text-center my-5 pt-2">Priser</h2>
            <p>
              Vi vil at du får pengene dine verdt og at vi kan rettferdiggjøre
              tidsbruken vår. Priser bestemmes derfor ut ifra vår kompetanse og
              arbeidets iboende verdi.
            </p>
            <p>Her er noen vanlige alternativer:</p>
            <ul className="ml-sm-5">
              <li>400kr/timen* for ting vi er gode på</li>
              <li>Satte summer for milepæler</li>
              <li>Justert timelønn for utforskende arbeid</li>
            </ul>
            <p>
              Du kan ansette oss, motta faktura eller foreslå en annen løsning
              som er praktisk for deg.
            </p>
            <small className="text-muted">
              <i>
                *Timelønn for ansatt, justers til tilsvarende ved fakturering
              </i>
            </small>
          </div>
        </div>
      </Col>
    </Row>
  );
}
