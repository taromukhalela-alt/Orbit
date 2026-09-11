import fs from 'node:fs/promises';

export async function writeFile(filePath: string, data: string) {
    const file = await fs.writeFile(filePath, data);
    return file;
}

export async function readFile(filePath: string) {
    const file = await fs.readFile(filePath, 'utf-8');
    return file;
}

export async function unlinkFile(filePath: string) {
    await fs.unlink(filePath);
}

export async function renameFile(filePath: string, newFilePath: string) {
    await fs.rename(filePath, newFilePath);
}

export async function copyFile(srcPath: string, destPath: string) {
    await fs.copyFile(srcPath, destPath);
}
