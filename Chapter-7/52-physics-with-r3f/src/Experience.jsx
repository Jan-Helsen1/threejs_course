import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { Physics, RigidBody, Debug, CuboidCollider, BallCollider } from '@react-three/rapier'
import { useRef } from 'react'

export default function Experience()
{
    const cube = useRef()

    const handleCubeClick = () =>
    {
        const mass = cube.current.mass() 
        cube.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 })
        cube.current.applyTorqueImpulse({ x: Math.random() - 0.5, y: Math.random() - 0.5, z: Math.random() - 0.5 })
    }

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <Physics gravity={ [ 0, -9.81, 0 ] }>
            
            <Debug />

            <RigidBody colliders="ball">
                <mesh castShadow position={ [ -1.5, 2, 0 ] }>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>

            <RigidBody 
                ref={ cube } 
                position={ [ 1.5, 2 ,0 ] }
                onClick={ handleCubeClick }
                restitution={ 0 }
                friction={ 0.7 }
                colliders={ false }
            >
                <mesh castShadow>
                    <boxGeometry />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
                <CuboidCollider mass={ 2 } args={ [ 0.5, 0.5, 0.5 ] } />
            </RigidBody>

            <RigidBody type='fixed' >
                <mesh receiveShadow position-y={ - 1.25 }>
                    <boxGeometry args={ [ 10, 0.5, 10 ] } />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>
        </Physics>

    </>
}