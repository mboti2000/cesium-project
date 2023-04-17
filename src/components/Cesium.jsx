import { CameraFlyTo, Viewer, Entity } from 'resium';
import { Cartesian3, Color, Ion } from 'cesium';

const xBudapestCoord = 19.040236;
const yBudapestCoord = 47.497913;

const cameraPosition = Cartesian3.fromDegrees(
  xBudapestCoord,
  yBudapestCoord,
  10000
);
const pinPosition = Cartesian3.fromDegrees(xBudapestCoord, yBudapestCoord, 10);

export default function Cesium() {
  return (
    <Viewer>
      <Entity
        position={pinPosition}
        point={{ pixelSize: 20, color: Color.RED }}
        description="Budapest"
      />
      <CameraFlyTo destination={cameraPosition} />
    </Viewer>
  );
}
