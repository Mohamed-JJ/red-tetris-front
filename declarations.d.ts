import { GroupProps, MeshProps } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: GroupProps;
      mesh: MeshProps;
    }
  }
}// NOTE: The declaration below was injected by `"framer"`
// see https://www.framer.com/docs/guides/handshake for more information.
declare module "https://framer.com/m/*";
