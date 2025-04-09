import { Editor } from "@/components/Editor";
import { Rotation } from "@/containers/Rotation";
import { Chicken } from "./chicken";
import { EditorControls } from "@/containers/EditorControls";
import { SceneContainer } from "@/containers/SceneContainer";
import { CanvasContainer } from "@/containers/CanvasContainer";
import { Root } from "@/components/Root";
import { Model } from "@/containers/Model";
import { HeaderContainer } from "@/containers/Header";
import { RectControls } from "@/containers/RectControls";

export default function Home() {
  return (
    <Root>
      <HeaderContainer />
      <Editor>
        <SceneContainer>
          <CanvasContainer>
            <Model />
            {false && (
              <Chicken />
            )}
          </CanvasContainer>
        </SceneContainer>
        <EditorControls />
        <RectControls />
      </Editor>
      <Rotation />
    </Root>
  );
}
