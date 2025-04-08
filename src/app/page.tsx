import { Canvas } from "@/components/Canvas";
import { Editor } from "@/components/Editor";
import { Scene } from "@/components/Scene";
import { Rotation } from "@/containers/Rotation";
import { Chicken } from "./chicken";
import { Controls } from "@/containers/Controls";
import { Providers } from "@/providers";

export default function Home() {
  return (
    <Providers>
      <Editor>
        <Scene>
          <Canvas showFrame={true}>
            <Chicken />
          </Canvas>
        </Scene>
        <Controls />
      </Editor>
      <Rotation />
    </Providers>
  );
}
