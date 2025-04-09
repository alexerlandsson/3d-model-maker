"use client";

import React from "react";
import { Toolbar } from "@/components/Toolbar";

export const RectControls: React.FC = () => {
  return (
    <Toolbar ariaLabel="Rectangle controls">
      <button>Close toolbar</button>
      <div>R001</div>
      <hr />
      <div>
        <label>Width:</label>
        <input type="number" min="0" max="100" defaultValue="1" />
      </div>
      <div>
        <label>Height:</label>
        <input type="number" min="0" max="100" defaultValue="1" />
      </div>
      <div>
        <label>Depth:</label>
        <input type="number" min="0" max="100" defaultValue="1" />
      </div>
      <div>
        <label>Pos X:</label>
        <input type="number" min="0" max="100" defaultValue="1" />
      </div>
      <div>
        <label>Pos Y:</label>
        <input type="number" min="0" max="100" defaultValue="1" />
      </div>
      <div>
        <label>Pos Z:</label>
        <input type="number" min="0" max="100" defaultValue="1" />
      </div>
      <div>
        <label>Color</label>
        <input type="color" min="0" max="100" defaultValue="1" />
      </div>
      <hr />
      <button>Delete</button>
    </Toolbar>
  );
};
