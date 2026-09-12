import { getProjectOrbitPath, getProjectPath } from './paths';
import { ensureDirectory, ensureProjectDirectory, directoryExists } from './directories';
import { writeFile } from './files';
import ProjectMetadata from './interfaces/ProjectMetadata';
import Project from './interfaces/Project';
import path from 'node:path';

export async function ensureProjectOrbitDirectory(projectId: string) {
    const orbitPath = getProjectOrbitPath(projectId);
    await ensureDirectory(orbitPath);

    return orbitPath;
}

export function createProjectMetadata(id: string, name: string) {
    const metadata: ProjectMetadata = {
        id,
        name,
        createdAt: new Date().toISOString(),
    };

    return metadata;
}

export async function writeProjectMetadata(metadata: ProjectMetadata) {
    const dataPath: string = getProjectOrbitPath(metadata.id);
    const fullPath = path.join(dataPath, 'project.json');
    await writeFile(fullPath, JSON.stringify(metadata, null, 2));

    return metadata;
}

export async function createProject(id: string, name: string) {
    const projectPath: string = getProjectPath(id);

    const exists = await directoryExists(projectPath);
    if (exists) {
        throw new Error(`Project with ${id} already exists.`);
    }
    await ensureProjectDirectory(id);
    await ensureProjectOrbitDirectory(id);
    const metadata: ProjectMetadata = createProjectMetadata(id, name);
    await writeProjectMetadata(metadata);
    const project: Project = {
        metadata,
        location: projectPath,
    };

    return project;
}
