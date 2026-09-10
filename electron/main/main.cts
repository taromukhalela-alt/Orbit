import { app, BrowserWindow, Menu } from "electron";
import path from "node:path";

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1400,
    height: 900,

    // Windows Native Force Overrides:
    autoHideMenuBar: true, // Hides the visual container layout completely on Windows
    titleBarOverlay: false, // Prevents Windows from forcing a system fallback command bar menu strip

    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // Native procedural call for Windows window wrapper threads
  window.setMenu(null);

  window.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  // Completely clear the base application hook memory template arrays
  Menu.setApplicationMenu(null);

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
