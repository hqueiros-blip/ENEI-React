import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ["**/__tests__/*.{js,tsx,ts}"],
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.tsx"],

    open: false,
    coverage: {
      reporter: ["lcov", "text", "text-summary"],
      provider: "istanbul",
      include: ["src/**"],
      exclude: [
        "**/*.d.ts",
        "src/main.tsx",
        "src/setupTests.tsx",
        "src/containers/App/**",
      ],
      enabled: true,
      all: true,
      reportOnFailure: true,
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
});
