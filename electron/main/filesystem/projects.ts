import { getProjectOrbitPath, getProjectPath } from './paths';
import { ensureDirectory, ensureProjectDirectory } from './directories';
import { writeFile } from './files';
import ProjectMetadata from './interfaces/ProjectMetadata';
import Project from './interfaces/Project';
import path from 'node:path';

export async function ensureProjectOrbitDirectory(projectId: string) {
    const orbitPath = getProjectOrbitPath(projectId);
    await ensureDirectory(orbitPath);
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
    const dataPath = getProjectOrbitPath(metadata.id);

    const fullPath = path.join(dataPath, 'project.json');
    await writeFile(fullPath, JSON.stringify(metadata, null, 2));

    return metadata;
}

export async function createProject(id: string, name: string) {
    await ensureProjectDirectory(id);
    await ensureProjectOrbitDirectory(id);
    const metadata = createProjectMetadata(id, name);
    await writeProjectMetadata(metadata);
    const rootPath = getProjectPath(id);

    const project: Project = {
        metadata,
        location: rootPath,
    };

    return project;
}
