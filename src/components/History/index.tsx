import React, { ReactElement } from "react";
import { useHistory } from "../../hooks";
import "./styles.scss";

const History = () => {
  const { state, set, undo, redo, clear, canUndo, canRedo } = useHistory<
    Record<number, boolean>
  >({});

  return (
    <div className="container">
      <div className="controls">
        <div className="title">👩‍🎨 Click squares to draw</div>
        <button onClick={undo} disabled={!canUndo}>
          Undo
        </button>
        <button onClick={redo} disabled={!canRedo}>
          Redo
        </button>
        <button onClick={clear}>Clear</button>
      </div>

      <div className="grid">
        {((blocks: ReactElement[], i, len) => {
          // Generate a grid of blocks
          while (++i <= len) {
            const index = i;
            blocks.push(
              <div
                className={"block" + (state[index] ? " active" : "")}
                onClick={() => set({ ...state, [index]: !state[index] })}
                key={i}
              />
            );
          }
          return blocks;
        })([], 0, 625)}
      </div>
    </div>
  );
};

export default History;
