import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 128px)",
          }}
        >
          <section>
            <span>Welcome To</span>
            <span>Blockchain</span>
            <span>Voting</span>
          </section>
        </Box>
      </main>
    </ThemeProvider>
  );
}
