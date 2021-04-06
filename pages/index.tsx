import Image from "next/image";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "components/Contact";
import People from "components/People";
import Experience from "components/Experience";

export default function Home() {
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
      title: "Prosessforbedring",
      description: <>Reduser flaskehalser og dobbeltarbeid.</>,
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
      <Head>
        <title>Anders & Gunder</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://www.andersoggunder.no/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anders & Gunder" />
        <meta name="twitter:card" content="Anders & Gunder" />
        <meta
          property="og:description"
          content="Lyst til å utvikle noe? Vi fikser!"
        />
        <meta property="og:image" content={"/images/social-preview.png"} />
      </Head>
      <div
        className="text-light"
        style={{
          minHeight: 175,
          height: "calc(25vw)",
          maxHeight: 450,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            zIndex: 0,
            height: "100%",
            width: "100%",
            position: "relative",
            textAlign: "center",
          }}
        >
          <Image
            className="not-selectable"
            alt="Background"
            src="/images/bg.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: `rgba(50, 50, 50, ${0.5})`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0.2vw",
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              filter:
                "drop-shadow(0 0.2rem 0.175rem rgba(0, 0, 0, 0.375)) brightness(122.5%)",
            }}
          >
            <Image
              className="not-selectable"
              src="/images/logo-stacked.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <Container>
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
        <People />
        <Experience />
      </Container>
      <div className="mt-5" />
      <div className="px-4 shadow py-4 bg-darker border-bottom border-top border-dark">
        <Contact />
        <div className="text-center text-secondary mt-4">
          <div>
            Ikoner laget av{" "}
            <a
              href="https://www.flaticon.com/authors/vectors-market"
              title="Vectors Market"
            >
              Vectors Market
            </a>
            {", "}
            <a href="https://www.flaticon.com/authors/wanicon" title="wanicon">
              wanicon
            </a>
            {" og "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            fra{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
