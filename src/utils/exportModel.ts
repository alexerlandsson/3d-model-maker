import { CuboidProps } from "@/components/Cuboid";
import { CanvasDimensions } from "@/providers/CanvasProvider";

interface ExportOptions {
  cuboids: (CuboidProps & { id: string })[];
  dimensions: CanvasDimensions;
  backgroundColor: string;
  rotation: { x: number; y: number };
}

function generateCuboidHtml(cuboid: CuboidProps): string {
  const w = cuboid.width ?? 1;
  const h = cuboid.height ?? 1;
  const d = cuboid.depth ?? 1;
  const x = cuboid.posX ?? 0;
  const y = cuboid.posY ?? 0;
  const z = cuboid.posZ ?? 0;
  const c = cuboid.color ?? "#ccc";
  const zIndex = cuboid.zIndex ?? 0;

  return `      <div class="cuboid" style="--w:${w};--h:${h};--d:${d};--x:${x};--y:${y};--z:${z};--c:${c};--z-index:${zIndex}">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
        <div class="face left"></div>
        <div class="face right"></div>
      </div>`;
}

export function generateExportHtml({
  cuboids,
  dimensions,
  backgroundColor,
  rotation,
}: ExportOptions): string {
  const cuboidsHtml = cuboids.map(generateCuboidHtml).join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Voxel Model</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; background: ${backgroundColor}; overflow: hidden; cursor: grab; }
    body:active { cursor: grabbing; }
    .scene { --base-unit: 15px; --cw: ${dimensions.width}; --ch: ${dimensions.height}; --cd: ${dimensions.depth}; --_cw: calc(var(--cw) * var(--base-unit)); --_ch: calc(var(--ch) * var(--base-unit)); --_cd: calc(var(--cd) * var(--base-unit)); width: var(--_cw); height: var(--_ch); perspective: 500px; user-select: none; }
    .canvas { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; translate: 0 0 calc(var(--_cd) * -0.5); }
    .cuboid { position: absolute; transform-style: preserve-3d; --_w: calc(var(--w, 1) * var(--base-unit)); --_h: calc(var(--h, 1) * var(--base-unit)); --_d: calc(var(--d, 1) * var(--base-unit)); --_x: calc(var(--x, 0) * var(--base-unit)); --_y: calc(var(--y, 0) * var(--base-unit)); --_z: calc(var(--z, 0) * var(--base-unit)); width: var(--_w); height: var(--_h); transform: translate3d(var(--_x), calc(var(--_ch) - var(--_h) - var(--_y)), calc(var(--_cd) * 0.5 - var(--_d) * 0.5 - var(--_z))); z-index: var(--z-index, 0); }
    .face { position: absolute; background-color: var(--c, #ccc); }
    .front, .back { width: var(--_w); height: var(--_h); }
    .left, .right { width: var(--_d); height: var(--_h); left: calc(var(--_w) * 0.5 - var(--_d) * 0.5); }
    .top, .bottom { width: var(--_w); height: var(--_d); top: calc(var(--_h) * 0.5 - var(--_d) * 0.5); }
    .front { transform: translateZ(calc(var(--_d) * 0.5)); }
    .back { transform: rotateY(180deg) translateZ(calc(var(--_d) * 0.5)); }
    .left { transform: rotateY(-90deg) translateZ(calc(var(--_w) * 0.5)); }
    .right { transform: rotateY(90deg) translateZ(calc(var(--_w) * 0.5)); }
    .top { transform: rotateX(90deg) translateZ(calc(var(--_h) * 0.5)); }
    .bottom { transform: rotateX(-90deg) translateZ(calc(var(--_h) * 0.5)); }
    .credit { position: fixed; bottom: 1rem; color: #666; font: 0.75rem/1.5 sans-serif; }
    .credit a { color: #888; cursor: pointer; }
  </style>
</head>
<body>
  <div class="scene">
    <div class="canvas" id="canvas">
${cuboidsHtml}
    </div>
  </div>
  <p class="credit">Created with <a href="https://maker.alexerlandsson.com/">CSS Voxel Studio</a> by <a href="https://alexerlandsson.com">Alex Erlandsson</a></p>
  <script>
    (function () {
      var el = document.getElementById("canvas");
      var rx = ${rotation.y}, ry = ${rotation.x};
      var vx = 0, vy = 0, dragging = false, px, py, raf;
      var friction = 0.95;
      function update() { el.style.transform = "rotateX(" + rx + "deg) rotateY(" + ry + "deg)"; }
      function step() {
        if (!dragging && (Math.abs(vx) > 0.01 || Math.abs(vy) > 0.01)) {
          vx *= friction; vy *= friction; rx += vx; ry += vy; update();
          raf = requestAnimationFrame(step);
        }
      }
      function down(x, y) { dragging = true; px = x; py = y; vx = vy = 0; cancelAnimationFrame(raf); }
      function move(x, y) {
        if (!dragging) return;
        var dx = x - px, dy = y - py;
        vy = dx * 0.4; vx = dy * -0.4;
        ry += vy; rx += vx; px = x; py = y; update();
      }
      function up() { dragging = false; step(); }
      document.addEventListener("mousedown", function (e) { down(e.clientX, e.clientY); });
      document.addEventListener("mousemove", function (e) { move(e.clientX, e.clientY); });
      document.addEventListener("mouseup", up);
      document.addEventListener("touchstart", function (e) { down(e.touches[0].clientX, e.touches[0].clientY); });
      document.addEventListener("touchmove", function (e) { e.preventDefault(); move(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
      document.addEventListener("touchend", up);
      update();
    })();
  </script>
</body>
</html>`;
}

export function downloadHtmlFile(html: string, filename: string): void {
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
