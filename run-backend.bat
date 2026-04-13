@echo off
cd /d "%~dp0academia-backend"
echo Preparando base de datos...
call npm run db:prepare:dev
if errorlevel 1 exit /b 1

echo Verificando objetos de base de datos...
call npm run db:verify
if errorlevel 1 exit /b 1

echo Iniciando backend Nest...
call npm run start:dev:raw
