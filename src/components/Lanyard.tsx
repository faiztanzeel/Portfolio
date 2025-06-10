'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

// Extend THREE with meshline components
extend({ MeshLineGeometry, MeshLineMaterial });

// Main Lanyard component with props
export default function Lanyard({ 
  position = [0, 0, 30], 
  gravity = [0, -40, 0], 
  fov = 20, 
  transparent = true,
  profileImagePath = './images/profile.jpg',
  companyName = 'Your Company',
  userName = 'Faiz',
  userTitle = 'Developer'
}: {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  profileImagePath?: string;
  companyName?: string;
  userName?: string;
  userTitle?: string;
}) {
  return (
    <div className="relative w-full h-[400px]">
      <Canvas
        camera={{ position, fov }}
        gl={{ alpha: transparent, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, transparent ? 0 : 1);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1;
        }}
      >
        <ambientLight intensity={0.5} />
        <Physics gravity={gravity} timeStep={1/60}>
          <Band 
            profileImagePath={profileImagePath}
            companyName={companyName}
            userName={userName}
            userTitle={userTitle}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI/3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI/3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI/3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI/2, Math.PI/3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

// Band component that handles the lanyard physics and rendering
function Band({ 
  maxSpeed = 50, 
  minSpeed = 0,
  profileImagePath = './images/profile.jpg',
  companyName = 'Your Company',
  userName = 'Faiz',
  userTitle = 'Developer'
}: { 
  maxSpeed?: number; 
  minSpeed?: number;
  profileImagePath?: string;
  companyName?: string;
  userName?: string;
  userTitle?: string;
}) {
  // Refs for Three.js objects and physics bodies
  const band = useRef<THREE.Mesh>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  // Component state
  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [profileTexture, setProfileTexture] = useState<THREE.Texture | null>(null);

  // Three.js utility vectors (reused for performance)
  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  // Physics configuration for rope segments
  const segmentProps = { 
    type: 'dynamic' as const, 
    canSleep: true, 
    colliders: false as const, 
    angularDamping: 4, 
    linearDamping: 4 
  };

  // Load profile image
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      profileImagePath,
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.generateMipmaps = false;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        setProfileTexture(texture);
      },
      undefined,
      (error) => {
        console.warn('Could not load profile image, using placeholder:', error);
        // Create a simple placeholder texture
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 600;
        const ctx = canvas.getContext('2d')!;
        
        // Create a simple avatar placeholder
        ctx.fillStyle = '#e5e7eb';
        ctx.fillRect(0, 0, 400, 600);
        
        ctx.fillStyle = '#9ca3af';
        ctx.beginPath();
        ctx.arc(200, 180, 80, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(200, 300, 120, 0, Math.PI * 2);
        ctx.fill();
        
        const placeholderTexture = new THREE.CanvasTexture(canvas);
        setProfileTexture(placeholderTexture);
      }
    );
  }, [profileImagePath]);

  // Create thick black lanyard rope texture with "faiz" text
  const [ropeTexture] = useState(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    // Black background for lanyard
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add subtle texture to make it look like fabric
    ctx.fillStyle = '#1a1a1a';
    for (let i = 0; i < canvas.width; i += 6) {
      for (let j = 0; j < canvas.height; j += 6) {
        if (Math.random() > 0.8) {
          ctx.fillRect(i, j, 3, 3);
        }
      }
    }
    
    // Add "faiz" text multiple times in white
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    
    const text = 'faiz';
    const textWidth = ctx.measureText(text).width;
    const spacing = textWidth + 60;
    
    // Draw text multiple times across the canvas
    for (let x = 20; x < canvas.width + spacing; x += spacing) {
      ctx.fillText(text, x, canvas.height / 2);
    }
    
    // Add border lines to make it look more like a lanyard
    ctx.strokeStyle = '#444444';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(canvas.width, 20);
    ctx.moveTo(0, canvas.height - 20);
    ctx.lineTo(canvas.width, canvas.height - 20);
    ctx.stroke();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;
    return texture;
  });

  // Create front card texture (just border for photo)
  const [frontCardTexture] = useState(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 600;
    const ctx = canvas.getContext('2d')!;
    
    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add subtle border
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 3;
    ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);
    
    // Company header background
    const headerGradient = ctx.createLinearGradient(0, 30, 0, 100);
    headerGradient.addColorStop(0, '#3b82f6');
    headerGradient.addColorStop(1, '#1e40af');
    ctx.fillStyle = headerGradient;
    ctx.fillRect(30, 30, canvas.width - 60, 70);
    
    // Company name
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(companyName, canvas.width / 2, 75);
    
    return new THREE.CanvasTexture(canvas);
  });

  // Create back card texture with name and barcode
  const [backCardTexture] = useState(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 600;
    const ctx = canvas.getContext('2d')!;
    
    // White background with subtle gradient
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, '#ffffff');
    bgGradient.addColorStop(1, '#f8fafc');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add subtle border
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 3;
    ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);
    
    // User name (larger and centered)
    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 48px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(userName, canvas.width / 2, 200);
    
    // User title
    ctx.fillStyle = '#64748b';
    ctx.font = '28px Arial, sans-serif';
    ctx.fillText(userTitle, canvas.width / 2, 250);
    
    // ID number
    ctx.fillStyle = '#94a3b8';
    ctx.font = '20px monospace';
    ctx.textAlign = 'left';
    const idNumber = 'ID: ' + Math.random().toString(36).substr(2, 8).toUpperCase();
    ctx.fillText(idNumber, 40, 320);
    
    // Barcode (larger)
    ctx.fillStyle = '#000000';
    ctx.font = '16px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('BARCODE', canvas.width / 2, 380);
    
    // Generate barcode
    for (let i = 0; i < 50; i++) {
      const width = Math.random() > 0.5 ? 3 : 6;
      const height = 60 + Math.random() * 20;
      ctx.fillRect(50 + i * 6, 400, width, height);
    }
    
    // Security features
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);
    ctx.strokeRect(30, 350, canvas.width - 60, 150);
    ctx.setLineDash([]);
    
    // Add some security text
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '12px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('AUTHORIZED PERSONNEL ONLY', canvas.width / 2, 520);
    
    return new THREE.CanvasTexture(canvas);
  });

  // Curve for the lanyard rope
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), 
    new THREE.Vector3(), 
    new THREE.Vector3(), 
    new THREE.Vector3()
  ], false, 'chordal'));

  // Set up physics joints between segments
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.50, 0]]);

  // Handle responsive design
  useEffect(() => {
    const updateSize = () => {
      setIsSmall(window.innerWidth < 1024);
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Handle cursor changes
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => { 
        document.body.style.cursor = 'auto';
      };
    }
  }, [hovered, dragged]);

  // Main animation loop
  useFrame((state, delta) => {
    if (!fixed.current || !j1.current || !j2.current || !j3.current || !card.current) return;

    // Handle dragging
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current.setNextKinematicTranslation({ 
        x: vec.x - (dragged as THREE.Vector3).x, 
        y: vec.y - (dragged as THREE.Vector3).y, 
        z: vec.z - (dragged as THREE.Vector3).z 
      });
    }

    // Smooth interpolation for rope segments
    [j1, j2].forEach((ref) => {
      if (!ref.current.lerped) {
        ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
      }
      const dist = ref.current.lerped.distanceTo(ref.current.translation());
      const clampedDistance = Math.max(0.1, Math.min(1, dist));
      ref.current.lerped.lerp(
        ref.current.translation(),
        delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
      );
    });

    // Update curve points for the lanyard rope
    curve.points[0].copy(j3.current.translation());
    curve.points[1].copy(j2.current.lerped);
    curve.points[2].copy(j1.current.lerped);
    curve.points[3].copy(fixed.current.translation());

    // Update the rope geometry
    if (band.current && band.current.geometry) {
      (band.current.geometry as any).setPoints(curve.getPoints(32));
    }

    // Add slight rotation damping to the card
    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
  });

  return (
    <>
      {/* Physics bodies and joints */}
      <group position={[0, 4, 0]}>
        {/* Fixed anchor point */}
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        
        {/* Rope segments */}
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        
        {/* ID Card */}
        <RigidBody 
          position={[2, 0, 0]} 
          ref={card} 
          {...segmentProps} 
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              (e.target as HTMLElement).releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e) => {
              (e.target as HTMLElement).setPointerCapture(e.pointerId);
              const point = new THREE.Vector3().copy(e.point);
              const translation = vec.copy(card.current.translation());
              drag(point.sub(translation));
            }}
          >
            {/* Front side of card */}
            <mesh position={[0, 0, 0.011]}>
              <boxGeometry args={[1.6, 2.25, 0.01]} />
              <meshPhysicalMaterial 
                map={frontCardTexture}
                clearcoat={1} 
                clearcoatRoughness={0.15} 
                roughness={0.1} 
                metalness={0}
                side={THREE.FrontSide}
              />
            </mesh>
            
            {/* Back side of card */}
            <mesh position={[0, 0, -0.011]} rotation={[0, Math.PI, 0]}>
              <boxGeometry args={[1.6, 2.25, 0.01]} />
              <meshPhysicalMaterial 
                map={backCardTexture}
                clearcoat={1} 
                clearcoatRoughness={0.15} 
                roughness={0.1} 
                metalness={0}
                side={THREE.FrontSide}
              />
            </mesh>
            
            {/* Profile photo overlay on front */}
            {profileTexture && (
              <mesh position={[0, -0.2, 0.016]}>
                <planeGeometry args={[1.4, 1.8]} />
                <meshBasicMaterial 
                  map={profileTexture}
                  transparent={true}
                  side={THREE.FrontSide}
                />
              </mesh>
            )}
            
            {/* Card clip/clasp */}
            <mesh position={[0, 1.8, 0.01]}>
              <cylinderGeometry args={[0.1, 0.1, 0.05, 8]} />
              <meshStandardMaterial 
                color="#666666" 
                roughness={0.3} 
                metalness={0.8}
              />
            </mesh>
            
            {/* Clip hole */}
            <mesh position={[0, 1.8, 0.015]}>
              <cylinderGeometry args={[0.05, 0.05, 0.06, 8]} />
              <meshStandardMaterial 
                color="#333333" 
                roughness={0.8} 
                metalness={0.2}
              />
            </mesh>
          </group>
        </RigidBody>
      </group>
      
      {/* Thick black lanyard rope with "faiz" text */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color={0x000000}
          depthTest={false}
          resolution={isSmall ? [512, 1024] : [1024, 512]}
          useMap={true}
          map={ropeTexture}
          repeat={[-12, 1]}
          lineWidth={4}
          transparent={false}
          opacity={1}
        />
      </mesh>
    </>
  );
}