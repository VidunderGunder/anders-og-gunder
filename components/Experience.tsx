import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

function EXPCard({ label, image, children = null }) {
  return (
    <div
      style={{
        height: "25vw",
        width: "100%",
        minHeight: 250,
        maxHeight: 350,
        borderRadius: 5,
        position: "relative",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.25))",
        display: "grid",
        placeItems: "center",
      }}
      className="text-left"
    >
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: 1,
          backgroundColor: `rgba(20, 20, 25, ${0.75})`,
          display: "grid",
          placeItems: "center",
        }}
        className="text-light"
      >
        <div
          style={{
            padding: "2.5% 10%",
          }}
        >
          <h4 className="" style={{ fontWeight: 600 }}>
            {label}
          </h4>
          <div className="lead text-light">{children}</div>
        </div>
      </div>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt={label}
        quality={25}
      />
    </div>
  );
}

export default function Experience() {
  return (
    <Container>
      <Row>
        <Col className="text-center my-5">
          <h2>Ting vi har gjort</h2>
        </Col>
      </Row>
      <Row className="justify-content-center pb-4">
        <Col className="p-1" xs={12}>
          <EXPCard label="Trelleborg Offshore Norway" image="/images/boys.png">
            Dokumentasjon på papir ble for dumt, så vi flyttet alt over på
            duppedingser.
          </EXPCard>
        </Col>
        <Col className="p-1" xs={12} md={7}>
          <EXPCard label="Sildr" image="/images/sildr.jpg">
            Smarte drikkefontener koblet til skyen. Målet er å oppfordre folk
            til fylle på flaska og spare miljøet for litt plast.
          </EXPCard>
        </Col>
        <Col className="p-1" xs={12} md={5}>
          <EXPCard label="Labutstyr (CRISPR)" image="/images/potato.png">
            Automatisering av prosesser i forbindelse med forskning på
            genredigering.
          </EXPCard>
        </Col>
        <Col className="p-1" xs={12} md={5}>
          <EXPCard label="Simulert AI" image="/images/unity-ai.png">
            Effektiv trening av kunstig intelligens som kan overføres til
            virkeligheten.
          </EXPCard>
        </Col>
        <Col className="p-1" xs={12} md={7}>
          <EXPCard label="Miljøkalkulator" image="/images/carculator.png">
            Grensesnitt for å simulere konsekvenser av kjøretøyspolitikk for
            kommunene i Østfoldregionen.
          </EXPCard>
        </Col>
        <Col className="p-1" xs={12} lg={4}>
          <EXPCard label="Bildegjenkjenning" image="/images/mus.png">
            Bildegjenkjenningsverktøy for forskning på spissmus med krav til høy
            presisjon og brukervennlighet.
          </EXPCard>
        </Col>
        <Col className="p-1" xs={12} md={6} lg={4}>
          <EXPCard label="Doseringsventil" image="/images/ventil.png">
            Skreddersydd maskinering og kretsdesign til doseringsventil for bruk
            i forskning.
          </EXPCard>
        </Col>
        <Col className="p-1" xs={12} md={6} lg={4}>
          <EXPCard
            label="Tørking av kaffebønner"
            image="/images/sol-torker.jpg"
          >
            Utvikling av prototype for energieffektiv tørking av kaffebønner i
            u-land.
          </EXPCard>
        </Col>
        <Col className="p-1" xs={12}>
          <EXPCard label="Sensorikkpanel" image="/images/sensor-map.png">
            Kartvisning i 3D av sensordata.
            <div>
              <small className="text-muted">
                Videre info er dessverre underlagt NDA.
              </small>
            </div>
          </EXPCard>
        </Col>
      </Row>
    </Container>
  );
}
