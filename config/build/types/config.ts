export type BuildMode = "production" | "development";
export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  tsconfig: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}
