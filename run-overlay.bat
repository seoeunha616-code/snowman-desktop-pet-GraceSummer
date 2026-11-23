@echo off
cd /d "%~dp0"
where npm >nul 2>nul || (echo Node.js is required. Install it from https://nodejs.org and run again. & pause & exit /b)
set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
if not exist node_modules call npm install
call npm start
