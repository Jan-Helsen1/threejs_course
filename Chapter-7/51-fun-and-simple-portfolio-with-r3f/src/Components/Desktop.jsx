import { Html } from "@react-three/drei";
import Website from "./Website/Website";

export default function Desktop() {
    return (
        <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
        >
            <Website />
        </Html>
    )
}