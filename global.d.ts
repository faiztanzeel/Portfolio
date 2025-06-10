// global.d.ts

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  import * as THREE from 'three';

  export class MeshLineGeometry extends THREE.BufferGeometry {}
  export class MeshLineMaterial extends THREE.Material {
    constructor(parameters: {
      color?: THREE.Color
      lineWidth?: number
      // Add more props if needed
    })
  }
}
