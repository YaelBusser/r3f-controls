import LighthouseModel from "../models/Lighthouse";
import PivotControlsUtil from "../utils/PivotControls";

const LighthouseScene = () => {
    return (
        /*
            OrbitControls :
                rotateSpeed à 0.3 pour que ce soit smooth pour l'utilisateur
                On ne peut pas aller au delà de 90 degrés car on est bloqué sur un axe vertical avec OrbitControls (0 à 90)
                minPolarAngle correspond à la valeur en haut de l'orbit et maxPolarAngle en bas de l'orbit
                minAzimuthAngle correspond à la valeur à gauche de l'orbit (doit être négatif pour aller à gauche) et maxAzimuthAngle à droite de l'orbit
                CODE :
                    <OrbitControls enableZoom={true} enablePan={false} rotateSpeed={0.3}
                                   minDistance={20}
                                   maxDistance={50}
                                   minPolarAngle={THREE.MathUtils.degToRad(30)} maxPolarAngle={THREE.MathUtils.degToRad(70)}
                                   minAzimuthAngle={THREE.MathUtils.degToRad(-100)} maxAzimuthAngle={THREE.MathUtils.degToRad(100)}
                    />
                    <Lighthouse/>

            PresentationControls :
                Ici, ça ne sera pas notre caméra qui va bouger mais le mesh !
                CODE :
                    <PresentationControls
                        enabled={true} // the controls can be disabled by setting this to false
                        global={false} // Spin globally or by dragging the model
                        cursor={true} // Whether to toggle cursor style on drag
                        snap={true} // Snap-back to center (can also be a spring config) => retourne au centre quand on relâche
                        speed={1} // Speed factor
                        zoom={1} // Zoom factor when half the polar-max is reached
                        rotation={[0, 0, 0]} // Default rotation
                        polar={[0.2, THREE.MathUtils.degToRad(70)]} // Vertical limits
                        azimuth={[-Infinity, Infinity]} // Horizontal limits
                        config={{mass: 2, tension: 300, friction: 26}} // Spring config
                        //domElement={events.connected}
                        // The DOM element events for this controller will attach to =>
                        // pour contrôler sur une zone plus large le mesh que les contours du mesh
                    >
                        <LighthouseModel/>
                    </PresentationControls>

            PivotControls :
                Placer dans l'espace l'objet avec sa souris
                    - Permet de définir parfaitement la position du modèle, utile à utiliser en dev
                        - On peut récupérer la position qu'on a choisi avec sa souris
                        => On peut donc créer un composant générique (components/utils/PivotControls.tsx) qu'on pourra utiliser sur n'importe quel modèle
                DepthTest sert à éviter que PivotControls soit à l'intérieur du modèle
                CODE :
                    <PivotControls scale={15} depthTest={false}>
                        <LighthouseModel/>
                    </PivotControls>
        */
        <>
            <PivotControlsUtil scale={5}>
                <LighthouseModel/>
            </PivotControlsUtil>
        </>
    )
}

export default LighthouseScene;