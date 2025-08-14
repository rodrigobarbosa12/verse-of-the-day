const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("src/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
