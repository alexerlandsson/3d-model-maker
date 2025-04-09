"use client";

import React from "react";
import { Toolbar } from "@/components/Toolbar";
import { useModel } from "@/providers/ModelProvider";

export const RectControls: React.FC = () => {
  const { rectangles, activeRectId, updateRectangle, deleteRectangle, setActiveRectId } = useModel();

  // If no rect is active, don't render anything
  if (!activeRectId) return null;

  // Find the active rectangle
  const activeRect = rectangles.find(rect => rect.id === activeRectId);
  if (!activeRect) return null;

  const handleChange = (field: string, value: string | number) => {
    // Convert string inputs to numbers for numeric fields
    const numericFields = ["width", "height", "depth", "posX", "posY", "posZ", "zIndex"];
    if (numericFields.includes(field)) {
      const numValue = typeof value === 'string' ? parseFloat(value) : value;
      updateRectangle(activeRectId, { [field]: numValue });
    } else {
      updateRectangle(activeRectId, { [field]: value });
    }
  };

  const handleDelete = () => {
    deleteRectangle(activeRectId);
  };

  return (
    <Toolbar ariaLabel="Rectangle controls">
      <button onClick={() => setActiveRectId(null)}>Close toolbar</button>
      <div>{activeRect.id}</div>
      <hr />
      <div>
        <label>Width:</label>
        <input 
          type="number" 
          min="0" 
          max="100" 
          value={activeRect.width || 1} 
          onChange={(e) => handleChange("width", e.target.value)}
        />
      </div>
      <div>
        <label>Height:</label>
        <input 
          type="number" 
          min="0" 
          max="100" 
          value={activeRect.height || 1} 
          onChange={(e) => handleChange("height", e.target.value)}
        />
      </div>
      <div>
        <label>Depth:</label>
        <input 
          type="number" 
          min="0" 
          max="100" 
          value={activeRect.depth || 1} 
          onChange={(e) => handleChange("depth", e.target.value)}
        />
      </div>
      <div>
        <label>Pos X:</label>
        <input 
          type="number" 
          min="-100" 
          max="100" 
          value={activeRect.posX || 0} 
          onChange={(e) => handleChange("posX", e.target.value)}
        />
      </div>
      <div>
        <label>Pos Y:</label>
        <input 
          type="number" 
          min="-100" 
          max="100" 
          value={activeRect.posY || 0} 
          onChange={(e) => handleChange("posY", e.target.value)}
        />
      </div>
      <div>
        <label>Pos Z:</label>
        <input 
          type="number" 
          min="-100" 
          max="100" 
          value={activeRect.posZ || 0} 
          onChange={(e) => handleChange("posZ", e.target.value)}
        />
      </div>
      <div>
        <label>Color</label>
        <input 
          type="color" 
          value={activeRect.color || "#000000"} 
          onChange={(e) => handleChange("color", e.target.value)}
        />
      </div>
      <div>
        <label>Z-Index:</label>
        <input 
          type="number" 
          min="-100" 
          max="100"
          value={activeRect.zIndex || 0} 
          onChange={(e) => handleChange("zIndex", e.target.value)}
        />
      </div>
      <hr />
      <button onClick={handleDelete}>Delete</button>
    </Toolbar>
  );
};
