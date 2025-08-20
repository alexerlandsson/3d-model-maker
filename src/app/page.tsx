"use client";

import { Editor } from "@/components/Editor";
import { Rotation } from "@/containers/Rotation";
import { EditorControls } from "@/containers/EditorControls";
import { SceneContainer } from "@/containers/SceneContainer";
import { CanvasContainer } from "@/containers/CanvasContainer";
import { Model } from "@/containers/Model";
import { HeaderContainer } from "@/containers/Header";
import { Root } from "@/components/Root";
import { Workspace } from "@/components/Workspace";
import { Main } from "@/components/Main";
import { CuboidList } from "@/containers/CuboidList";
import { useCanvas } from "@/providers/CanvasProvider";

export default function Home() {
  const { showCuboidList } = useCanvas();
  return (
    <Root>
      <HeaderContainer />
      <Main>
        <Workspace>
          {showCuboidList && <CuboidList />}
          <Editor>
            <SceneContainer>
              <CanvasContainer>
                <Model />
              </CanvasContainer>
            </SceneContainer>
            <EditorControls />
          </Editor>
        </Workspace>
        <Rotation />
      </Main>
    </Root>
  );
}
