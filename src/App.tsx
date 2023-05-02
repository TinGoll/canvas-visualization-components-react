import React, { useEffect } from "react";
import { useColorScheme, Sheet } from "@mui/joy";
import { Main } from "./components";
import Canvas from "./canvas-module/components/canvas";

function App() {
  const { setMode } = useColorScheme();
  useEffect(() => {
    setMode("dark");
  }, [setMode]);

  const draw = React.useCallback((context: CanvasRenderingContext2D) => {
    // Тут код логики
  }, []);

  return (
    <Main>
      <Sheet
        variant='soft'
        color='neutral'
        sx={(theme) => ({ p: 2, borderRadius: theme.radius.sm, width: 800, height: 600 })}
      >
        <Canvas
          sx={(theme) => ({
            width: "100%",
            height: "100%",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: theme.radius.sm,
            overflow: "hidden",
          })}
          draw={draw}
          height={800}
          width={800}
        />
      </Sheet>
    </Main>
  );
}

export default App;
