import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import {
  Environment,
  useTexture,
  PerspectiveCamera,
  Html,
} from "@react-three/drei";
import {
  Physics,
  RigidBody,
  RigidBodyProps,
} from "@react-three/rapier";
import * as THREE from "three";
import { MeshLine, MeshLineMaterial } from "three.meshline";

const CARD_WIDTH = 2;
const CARD_HEIGHT = 3;

const LanyardString = ({
  start,
  end,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
}) => {
  const lineRef = useRef<THREE.Mesh>(null);

  const curve = useMemo(() => {
    const control = start.clone().add(end).multiplyScalar(0.5).add(new THREE.Vector3(0, -1, 0));
    return new THREE.CatmullRomCurve3([start, control, end]);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(50), [curve]);

  useEffect(() => {
    if (lineRef.current) {
      const geometry = new MeshLine();
      geometry.setPoints(points);
      (lineRef.current.geometry as any) = geometry;
    }
  }, [points]);

  return (
    <mesh ref={lineRef}>
      <meshBasicMaterial color="black" />
    </mesh>
  );
};

const Card = React.forwardRef<InstanceType<typeof RigidBody>>((_, ref) => {
  const texture = useTexture("../../public/images/profile.jpg");

  return (
    <RigidBody
      ref={ref as React.MutableRefObject<InstanceType<typeof RigidBody>>}
      colliders="cuboid"
      linearDamping={0.9}
      angularDamping={0.9}
      position={[0, -1, 0]}
      canSleep
      type="dynamic"
    >
      <mesh castShadow>
        <planeGeometry args={[CARD_WIDTH, CARD_HEIGHT]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </RigidBody>
  );
});

export const LanyardCard = () => {
  const cardRef = useRef<InstanceType<typeof RigidBody>>(null!);
  const [anchorPos] = useState(() => new THREE.Vector3(0, 2.5, 0));

  const [cardWorldPos, setCardWorldPos] = useState(() =>
    new THREE.Vector3(0, 0, 0)
  );

  useFrame(() => {
    if (cardRef.current) {
      const pos = cardRef.current.translation();
      setCardWorldPos(new THREE.Vector3(pos.x, pos.y, pos.z));
    }
  });

  return (
    <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 4, 4]} castShadow />
      <Environment preset="sunset" />

      <Physics gravity={[0, -9.81, 0]}>
        <Card ref={cardRef} />
      </Physics>

      <LanyardString start={anchorPos} end={cardWorldPos} />

      <Html position={[0, -3.5, 0]}>
        <p className="text-white text-sm text-center">
          Drag the card using mouse/touch
        </p>
      </Html>
    </Canvas>
  );
};
