import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";

const Fibercontainer = () => {
  return (
    <Canvas>
      <Experience />
      <OrbitControls />
    </Canvas>
  );
};

export default Fibercontainer;
