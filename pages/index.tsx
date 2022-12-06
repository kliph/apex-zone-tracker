import styled from "styled-components";
import Image from "next/image";
import React from "react";
import bloodMoonMap from "../public/assets/blood-moon.png";

const Menu = styled.menu`
  display: flex;
  justify-content: space-evenly;
	position: absolute;
	background-color: #223;
	width: 100%;
	z-index: 1;
	padding: 0.25em;
	margin: 0;
`;

const MapOverlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;

const MapContainer = styled.div`
  position: relative;
	user-select: none;
`;

const RING_DIAMETERS = [279, 170, 103, 26, 20, 10];

export default function Home(_props: any) {
  const [rings, setRings] = React.useState<any>([]);
  const [ringNumber, setRingNumber] = React.useState(0);
  let mapContainer: HTMLDivElement | null = null;

  const setMapContainerRef = (element: HTMLDivElement) => {
    mapContainer = element;
  };

  function handlePlaceRing(evt: any) {
    if (rings.length - 1 === ringNumber) {
      rings.pop()
    };
    setRings([
      ...rings,
      <circle
        cx={evt.clientX - mapContainer!.offsetLeft}
        cy={evt.clientY - mapContainer!.offsetTop}
        r={RING_DIAMETERS[ringNumber]}
        stroke="red"
        strokeWidth="2"
        fill="none"
        key={ringNumber}
      />,
    ]);
  }

  function handleSaveRingPosition() {
    setRingNumber(ringNumber + 1);
  }

  return (
    <>
      <Menu>
        <div>Current Zone: {ringNumber}</div>
        <button onClick={handleSaveRingPosition}>Save Ring Position</button>
      </Menu>
      <MapContainer onClick={handlePlaceRing} ref={setMapContainerRef}>
        <MapOverlay width="1012" height="1013">
          {rings}
        </MapOverlay>
        <Image src={bloodMoonMap} alt="Blood Moon Map" priority={true} />
      </MapContainer>
    </>
  );
}
