import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";

const Fibercontainer = () => {
  return (
    <Canvas camera={[0, 0, 3]}>
      <Experience />
      <OrbitControls />
      <axesHelper />
    </Canvas>
  );
};

export default Fibercontainer;
