import path from 'node:path';
import { app } from 'electron';

export function getOrbitDataPath() {
    const appPath = app.getPath("appData");
    return path.join(appPath, "Orbit");
}

export function getProjectsPath() {
    const appPath = getOrbitDataPath();
    return path.join(appPath, "projects");
}

export function getProjectPath(projectId: string) {
    const projectsPath = getProjectsPath();
    return path.join(projectsPath, projectId);
}

export function getProjectOrbitPath(projectId: string) {
    const projectPath = getProjectPath(projectId);
    return path.join(projectPath, ".orbit");
}

