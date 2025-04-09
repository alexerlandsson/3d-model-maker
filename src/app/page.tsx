import { Editor } from "@/components/Editor";
import { Rect } from "@/components/Rect";
import { Rotation } from "@/containers/Rotation";
import { Chicken } from "./chicken";
import { Controls } from "@/containers/Controls";
import { SceneContainer } from "@/containers/SceneContainer";
import { CanvasContainer } from "@/containers/CanvasContainer";
import { Root } from "@/components/Root";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <Root>
      <Header title="3D Model Maker">
        <button>Add rectangle</button>
      </Header>
      <Editor>
        <SceneContainer>
          <CanvasContainer>
            {/* <Model (container) /> */}
            <Rect />
            <Chicken />
          </CanvasContainer>
        </SceneContainer>
        <Controls />
      </Editor>
      <Rotation />
    </Root>
  );
}
