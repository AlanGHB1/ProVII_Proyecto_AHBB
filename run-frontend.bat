@echo off
cd /d "%~dp0academia-h&b"
echo Esperando a que el backend este listo...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$deadline = (Get-Date).AddMinutes(3); while ((Get-Date) -lt $deadline) { try { $response = Invoke-WebRequest -Uri 'http://127.0.0.1:3000/api' -UseBasicParsing -TimeoutSec 5; if ($response.StatusCode -lt 500) { exit 0 } } catch { Start-Sleep -Seconds 2 } }; Write-Error 'El backend no estuvo listo a tiempo.'; exit 1"
if errorlevel 1 exit /b 1

echo Backend listo. Iniciando frontend...
call npx quasar dev --open
