@echo off
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\dev-preflight_ahbb.ps1"
if errorlevel 1 exit /b 1

echo URL del Proyecto: http://localhost:9000
call npx concurrently -k -n BACKEND,FRONTEND -c blue,green "run-backend.bat" "run-frontend.bat"
