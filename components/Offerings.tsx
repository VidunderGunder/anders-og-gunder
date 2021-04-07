import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export default function Offerings() {
  const offerings = [
    {
      title: "App & Web",
      description: (
        <>
          Fra enkle hjemmesider til skalerbare digitale tvillinger med VR- og
          AR-støtte.
        </>
      ),
      image: "/images/ui-design.png",
    },
    {
      title: "Protoyping",
      description: (
        <>
          Kretsdesign, sensorikk, 3D-modellering og flere års erfaring med
          oppstartselskaper og forskning.
        </>
      ),
      image: "/images/prototype.png",
    },
    {
      title: "AI",
      description: (
        <>
          Anvendt maskinlæring, fra enkel klassifisering til autonome kjøretøy
          og roboter.
        </>
      ),
      image: "/images/ai.png",
    },
    {
      title: "Simulering",
      description: (
        <>
          Interaktive 3D-simuleringer som kan deles. For eksempel atferd eller
          smittespredning.
        </>
      ),
      image: "/images/car-simulation.png",
    },
    {
      title: "Løsningsarkitektur",
      description: <>Konkrete slagplaner for teknisk implementering.</>,
      image: "/images/strategy.png",
    },
    {
      title: "Design",
      description: (
        <>Logoer, dokumentmaler, ikoner, applikasjonskomponenter osv.</>
      ),
      image: "/images/paint-palette.png",
    },
  ];

  return (
    <div>
      <div className="my-5 text-center">
        <h2>Lyst til å lage noe?</h2>
        <h4>Vi hjelper deg.</h4>
      </div>
      <Row className="justify-content-center">
        {offerings.map((offering, offeringIndex) => {
          return (
            <Col key={offeringIndex} xs={12} md={6} lg={4} className="mb-4">
              <div className="d-xs-inline d-sm-flex d-md-inline align-items-center px-4 px-sm-0">
                <div
                  style={{
                    height: 100,
                    display: "grid",
                    placeItems: "center",
                  }}
                  className="mr-sm-4 my-4 m-md-5"
                >
                  <Image
                    src={offering.image}
                    className="not-selectable"
                    alt={offering.title}
                    // layout=""
                    height={96}
                    width={96}
                    // objectFit=""
                    // objectFit="scale-down"
                    quality={100}
                  />
                </div>
                <div className="text-center text-sm-left text-md-center w-100">
                  <h5 className="">{offering.title}</h5>
                  <span>{offering.description}</span>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
