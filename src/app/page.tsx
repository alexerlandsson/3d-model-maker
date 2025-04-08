import { Editor } from "@/components/Editor";
import { Rect } from "@/components/Rect";
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
            <Rect />
            <Chicken />
          </CanvasContainer>
        </SceneContainer>
        <Controls />
      </Editor>
      <Rotation />
    </Providers>
  );
}
