import fs from 'node:fs/promises';
import { getOrbitDataPath, getProjectsPath, getProjectPath } from './paths';

export async function ensureDirectory(directoryPath: string) {
    await fs.mkdir(directoryPath, { recursive: true });
}

export async function ensureOrbitDataDirectory() {
    const appDataPath = getOrbitDataPath();
    await ensureDirectory(appDataPath);
}

export async function ensureProjectsDirectory() {
    const projectDir = getProjectsPath();
    await ensureDirectory(projectDir);
}

export async function ensureProjectDirectory(projectId: string) {
    const projectPath = getProjectPath(projectId);
    await ensureDirectory(projectPath);
}
