import fs from "node:fs/promises";
import { getOrbitDataPath, getProjectPath } from "./paths";

export function ensureDirectory(directoryPath: string) {
  const dirExists = fs.readdir(directoryPath);
  if (!dirExists) {
    const newDir = fs.mkdir(directoryPath);
  }

  
}
