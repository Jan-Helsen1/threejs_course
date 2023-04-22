import { useGLTF, Environment, Float, PresentationControls, ContactShadows, Text } from '@react-three/drei'
import Desktop from './Components/Desktop'

export default function Experience()
{
    const pc = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    return <>

        <Environment preset='city' />

        <color args={ [ '#141414' ] } attach="background" />

        <PresentationControls 
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ -0.4, 0.2 ] }
            azimuth={ [ -1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 }>
                <rectAreaLight 
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#830000' }
                    rotation={ [ -0.1, Math.PI, 0] }
                    position={ [ 0, 0.55, -1.15 ] }
                />
                <primitive 
                    object={ pc.scene } 
                    position-y={ -1.2 }
                >
                    <Desktop />
                </primitive>
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={ 1 }
                    position={ [2, 0.75, 0.2 ] }
                    rotation-y={ -1.25 }
                    maxWidth={ 2 }
                    textAlign='center'
                    color={ '#830000' }
                >
                    JAN HELSEN
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows 
            position-y={ -1.4 } 
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />

    </>
}