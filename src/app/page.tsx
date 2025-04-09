import { Editor } from "@/components/Editor";
import { Rotation } from "@/containers/Rotation";
import { Chicken } from "./chicken";
import { Controls } from "@/containers/Controls";
import { SceneContainer } from "@/containers/SceneContainer";
import { CanvasContainer } from "@/containers/CanvasContainer";
import { Root } from "@/components/Root";
import { Model } from "@/containers/Model";
import { HeaderContainer } from "@/containers/Header";

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
        <Controls />
      </Editor>
      <Rotation />
    </Root>
  );
}
