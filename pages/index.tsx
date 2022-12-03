import styled from "styled-components";
import Image from "next/image";
import React from "react";
import bloodMoonMap from "../public/assets/blood-moon.png";

const Menu = styled.div`
  display: flex;
  justify-content: center;
`;

const MapOverlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;

const MapContainer = styled.div`
  position: relative;
`;

/* const RING_DIAMETERS = [279, 170, 103, 26, 20, 10]; */

export default function Home(_props: any) {
  const [rings, setRings] = React.useState<any>([]);
  const [ringNumber, setRingNumber] = React.useState(0);
  let mapContainer: HTMLDivElement | null = null;

  const setMapContainerRef = (element: HTMLDivElement) => {
    mapContainer = element;
  };

  function handleClick(evt: any) {
    setRingNumber(ringNumber + 1);
    setRings([
      <circle
        cx={evt.clientX - mapContainer!.offsetLeft}
        cy={evt.clientY - mapContainer!.offsetTop}
        r="279"
        stroke="red"
        strokeWidth="2"
        fill="none"
      />,
    ]);
  }

  return (
    <>
      <Menu>Here's what's on the menu</Menu>
      <MapContainer onClick={handleClick} ref={setMapContainerRef}>
        <MapOverlay width="1012" height="1013">
          {rings}
        </MapOverlay>
        <Image src={bloodMoonMap} alt="Blood Moon Map" priority={true} />
      </MapContainer>
    </>
  );
}
