import Image from "next/image";

export default function Hero() {
  return (
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
  );
}
