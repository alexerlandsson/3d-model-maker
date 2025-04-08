import { Canvas } from "@/components/Canvas";
import { Editor } from "@/components/Editor";
import { Scene } from "@/components/Scene";
import { Rotation } from "@/containers/Rotation";
import { Chicken } from "./chicken";
import { Controls } from "@/containers/Controls";

export default function Home() {
  return (
    <>
      <Editor>
        <Scene>
          <Canvas showFrame={true}>
            <Chicken />
          </Canvas>
        </Scene>
        <Controls />
      </Editor>
      <Rotation />
    </>
  );
}
