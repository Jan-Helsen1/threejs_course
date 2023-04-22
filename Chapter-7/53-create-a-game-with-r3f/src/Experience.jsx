import { Physics, Debug } from "@react-three/rapier";
import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import Player from "./Player.jsx";
import useGame from "./stores/useGame.js";
import Effects from "./Effects.jsx";

export default function Experience() {
    const blocksCount = useGame((state) => state.blocksCount)
    const blockSeed = useGame((state) => state.blockSeed)
    return (
        <>
            <color args={ [ '#252731' ]} attach="background" />
            <Physics>
                {/* <Debug /> */}
                <Lights />
                <Level count={ blocksCount} seed={blockSeed} />
                <Player />
            </Physics>
            <Effects />
        </>
    );
}
