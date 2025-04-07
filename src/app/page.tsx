import { Canvas } from "@/components/Canvas";
import { Editor } from "@/components/Editor";
import { Scene } from "@/components/Scene";
import { SrOnly } from "@/components/SrOnly";

export default function Home() {
  return (
    <>
      <Editor>
        <Scene id="scene">
          <Canvas id="canvas" showFrame={true}>
            <div className="rect rect--body">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--back">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--tail">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--wing rect--wing-left">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--wing rect--wing-right">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--leg rect--leg-left">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--leg rect--leg-right">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--foot rect--foot-left">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--foot rect--foot-right">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--toe rect--toe-left-left">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--toe rect--toe-left-right">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--toe rect--toe-right-left">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--toe rect--toe-right-right">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--comb">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--beak">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>

            <div className="rect rect--wattle">
              <div className="rect__face rect__face--front"></div>
              <div className="rect__face rect__face--back"></div>
              <div className="rect__face rect__face--top"></div>
              <div className="rect__face rect__face--bottom"></div>
              <div className="rect__face rect__face--left"></div>
              <div className="rect__face rect__face--right"></div>
            </div>
          </Canvas>
        </Scene>

        <div className="editor__controls">
          <div className="editor__controls-group">
            <button id="btn-zoom-in">
              <SrOnly>Zoom in</SrOnly>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                aria-hidden="true"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"
                />
              </svg>
            </button>
            <button id="btn-zoom-out">
              <SrOnly>Zoom out</SrOnly>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                aria-hidden="true"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"
                />
              </svg>
            </button>
            <button id="btn-zoom-reset">
              <SrOnly>Reset zoom</SrOnly>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                aria-hidden="true"
              >
                <path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z" />
              </svg>
            </button>
          </div>
          <div className="editor__controls-group">
            <button id="btn-canvas-settings" disabled>
              <SrOnly>Canvas settings</SrOnly>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                aria-hidden="true"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M240.49,144.49l-32,32a12,12,0,0,1-17-17L203,148H125L77,196H96a12,12,0,0,1,0,24H48a12,12,0,0,1-12-12V160a12,12,0,0,1,24,0v19l48-48V53L96.49,64.49a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0l32,32a12,12,0,0,1-17,17L132,53v71h71l-11.52-11.51a12,12,0,0,1,17-17l32,32A12,12,0,0,1,240.49,144.49Z"
                />
              </svg>
            </button>
            <button id="btn-toggle-canvas">
              <SrOnly>Toggle canvas outline</SrOnly>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                aria-hidden="true"
              >
                <path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z" />
              </svg>
            </button>
            <button id="btn-set-editor-bg" disabled>
              <SrOnly>Set editor background color</SrOnly>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                aria-hidden="true"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M203.57,51A107.9,107.9,0,0,0,20,128c0,44.72,27.6,82.25,72,97.94A36,36,0,0,0,140,192a12,12,0,0,1,12-12h46.21a35.79,35.79,0,0,0,35.1-28A108.6,108.6,0,0,0,236,127.09,107.23,107.23,0,0,0,203.57,51Zm6.34,95.67a11.91,11.91,0,0,1-11.7,9.3H152a36,36,0,0,0-36,36,12,12,0,0,1-16,11.3c-16.65-5.88-30.65-15.76-40.48-28.56A76,76,0,0,1,44,128a84,84,0,0,1,83.13-84H128a84.35,84.35,0,0,1,84,83.29A84.72,84.72,0,0,1,209.91,146.71ZM144,76a16,16,0,1,1-16-16A16,16,0,0,1,144,76Zm-44,24A16,16,0,1,1,84,84,16,16,0,0,1,100,100Zm0,56a16,16,0,1,1-16-16A16,16,0,0,1,100,156Zm88-56a16,16,0,1,1-16-16A16,16,0,0,1,188,100Z"
                />
              </svg>
            </button>
            <button id="btn-toggle-list-view" disabled>
              <SrOnly>Toggle list view</SrOnly>
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                aria-hidden="true"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M76,64A12,12,0,0,1,88,52H216a12,12,0,0,1,0,24H88A12,12,0,0,1,76,64Zm140,52H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,64H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM44,112a16,16,0,1,0,16,16A16,16,0,0,0,44,112Zm0-64A16,16,0,1,0,60,64,16,16,0,0,0,44,48Zm0,128a16,16,0,1,0,16,16A16,16,0,0,0,44,176Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </Editor>

      <div className="rotation rotation--x">
        <label className="sr-only" htmlFor="rotation-slider-x">
          Rotate horizontally
        </label>
        <input
          type="range"
          id="rotation-slider-x"
          min="-360"
          max="360"
          value="0"
        />
      </div>

      <div className="rotation rotation--y">
        <label className="sr-only" htmlFor="rotation-slider-y">
          Rotate vertically
        </label>
        <input
          type="range"
          id="rotation-slider-y"
          min="-360"
          max="360"
          value="0"
          orient="vertical"
        />
      </div>

      <div className="rotation-reset">
        <button className="rotation-reset__button" id="btn-reset-view">
          <SrOnly>Reset view</SrOnly>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            aria-hidden="true"
          >
            <path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z" />
          </svg>
        </button>
      </div>
    </>
  );
}
