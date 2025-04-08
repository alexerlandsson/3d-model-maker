import { Editor } from "@/components/Editor";
import { Rotation } from "@/containers/Rotation";
import { Chicken } from "./chicken";
import { Controls } from "@/containers/Controls";
import { Providers } from "@/providers";
import { SceneContainer } from "@/containers/SceneContainer";
import { CanvasContainer } from "@/containers/CanvasContainer";

export default function Home() {
  return (
    <Providers>
      <Editor>
        <SceneContainer>
          <CanvasContainer>
            <Chicken />
          </CanvasContainer>
        </SceneContainer>
        <Controls />
      </Editor>
      <Rotation />
    </Providers>
  );
}
