// 바탕화면 위에 투명하게 떠 있는 눈사람 오버레이 (Electron)
const { app, BrowserWindow, screen, ipcMain, globalShortcut } = require('electron');
const path = require('path');

let win;
app.whenReady().then(() => {
  const wa = screen.getPrimaryDisplay().workArea; // 작업표시줄을 제외한 영역 → 눈이 작업표시줄 바로 위에 쌓임
  win = new BrowserWindow({
    x: wa.x, y: wa.y, width: wa.width, height: wa.height,
    transparent: true, frame: false, resizable: false, movable: false,
    skipTaskbar: true, hasShadow: false, alwaysOnTop: true, backgroundColor: '#00000000',
    webPreferences: { nodeIntegration: true, contextIsolation: false, sandbox: false }
  });
  win.setAlwaysOnTop(true, 'screen-saver');
  win.setIgnoreMouseEvents(true, { forward: true }); // 눈덩이/아이템 위가 아니면 클릭이 뒤로 통과
  const query = { overlay: '1' };
  if (process.argv.includes('--zh')) query.lang = 'zh'; // 중국어 버전
  win.loadFile(path.join(__dirname, 'index.html'), { query });

  ipcMain.on('set-ignore', (_e, ignore) => win && win.setIgnoreMouseEvents(ignore, { forward: true }));
  ipcMain.on('quit', () => app.quit());
  globalShortcut.register('CommandOrControl+Shift+Q', () => app.quit());
});
app.on('will-quit', () => globalShortcut.unregisterAll());
app.on('window-all-closed', () => app.quit());
