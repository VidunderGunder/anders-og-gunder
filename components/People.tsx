import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export function People() {
  const quoteGunder =
    '"Det beste som finnes er å nøste opp noe innviklet og gjøre det intuitivt og gøy for andre."';
  const quoteAnders = '"Ja."';
  return (
    <Row className="px-lg-5 px-xl-5 mx-xl-5 pt-5 mt-5 pb-3">
      <Col xs={12} className="mb-lg-n5">
        <div
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
          }}
          className="d-sm-flex mr-lg-n5 mb-sm-n4 mb-md-n5 mb-lg-0"
        >
          <div
            style={{
              height: 224,
              width: 224,
              borderRadius: "50%",
              position: "relative",
              overflow: "hidden",
              transform: "scaleX(-1)",
            }}
            className="mx-auto mx-sm-0"
          >
            <Image
              className="not-selectable px-4 px-sm-0"
              src="/images/kristian.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="d-none d-sm-inline ml-4 mt-5 pt-2 mt-sm-1 mt-md-2 mt-lg-4 w-50">
            <h5 style={{ fontWeight: 500 }} className="text-pink">
              Gunder
            </h5>
            <span className="lead">{quoteGunder}</span>
          </div>
          <div className="d-sm-none mx-5 mt-n2 mb-3 px-3">
            <h5 style={{ fontWeight: 500 }} className="text-pink">
              Gunder
            </h5>
            <span className="lead">{quoteGunder}</span>
          </div>
        </div>
      </Col>
      <Col xs={12} className="mt-lg-n5">
        <div
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
          className="d-sm-flex ml-lg-n5 mt-sm-n5 mt-xl-n4 mt-lg-0"
        >
          <div className="d-none d-sm-inline mr-sm-4 text-right mb-sm-4 mb-md-5 pb-sm-2">
            <h5 style={{ fontWeight: 500 }} className="text-teal">
              Anders
            </h5>
            <span className="lead">{quoteAnders}</span>
          </div>
          <div
            style={{
              height: 224,
              width: 224,
              borderRadius: "50%",
              position: "relative",
              overflow: "hidden",
            }}
            className="mx-auto mx-sm-0"
          >
            <Image
              className="not-selectable px-4 px-sm-0"
              src="/images/anders.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="d-sm-none text-right mx-5 mt-n2 mb-3 px-3">
            <h5 style={{ fontWeight: 500 }} className="text-teal">
              Anders
            </h5>
            <span className="lead">{quoteAnders}</span>
          </div>
        </div>
      </Col>
    </Row>
  );
}
