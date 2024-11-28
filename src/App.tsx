import './App.css'
import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import ExampleUI from "./components/UI/Example";
import LighthouseScene from "./components/scenes/Lighthouse";

function App() {
    return (
        <Canvas camera={{
            position: [0, 0, 30]
        }}>
            <ExampleUI/>
            <LighthouseScene/>
            <Environment preset={"sunset"}/>
        </Canvas>
    )
}

export default App
