$ErrorActionPreference = 'Stop'

$backendUrl_ahbb = 'http://127.0.0.1:3000/api'
$backendFirma_ahbb = 'Backend de la Academia H&B corriendo exitosamente'

function Obtener-PidsPuerto3000_ahbb {
  $lineas_ahbb = netstat -ano -p tcp |
    Select-String 'LISTENING' |
    Where-Object { $_.Line -match '^\s*TCP\s+\S+:3000\s+\S+\s+LISTENING\s+(\d+)\s*$' }

  $pids_ahbb = foreach ($linea_ahbb in $lineas_ahbb) {
    if ($linea_ahbb.Line -match '^\s*TCP\s+\S+:3000\s+\S+\s+LISTENING\s+(\d+)\s*$') {
      [int]$matches[1]
    }
  }

  return $pids_ahbb | Sort-Object -Unique
}

function Obtener-DescripcionProceso_ahbb([int]$pid_ahbb) {
  $proceso_ahbb = Get-Process -Id $pid_ahbb -ErrorAction SilentlyContinue
  if (-not $proceso_ahbb) {
    return "PID $pid_ahbb"
  }

  return "$($proceso_ahbb.ProcessName) (PID $pid_ahbb)"
}

$pidsEscuchando_ahbb = @(Obtener-PidsPuerto3000_ahbb)
if ($pidsEscuchando_ahbb.Count -eq 0) {
  Write-Host '[DEV] Puerto 3000 libre. No hay backend previo que cerrar.'
  exit 0
}

$respuesta_ahbb = $null
try {
  $respuesta_ahbb = Invoke-WebRequest -Uri $backendUrl_ahbb -UseBasicParsing -TimeoutSec 5
} catch {
  $descripcionProcesos_ahbb = $pidsEscuchando_ahbb |
    ForEach-Object { Obtener-DescripcionProceso_ahbb $_ }

  throw "[DEV] El puerto 3000 ya está ocupado por $($descripcionProcesos_ahbb -join ', '), pero no responde como la API de la Academia H&B. Libéralo o cambia el puerto antes de iniciar."
}

if ($respuesta_ahbb.StatusCode -ne 200 -or $respuesta_ahbb.Content.Trim() -ne $backendFirma_ahbb) {
  $descripcionProcesos_ahbb = $pidsEscuchando_ahbb |
    ForEach-Object { Obtener-DescripcionProceso_ahbb $_ }

  throw "[DEV] El puerto 3000 ya está ocupado por $($descripcionProcesos_ahbb -join ', '), pero la respuesta no coincide con este backend. Libéralo o cambia el puerto antes de iniciar."
}

$procesosCerrados_ahbb = @()
foreach ($pid_ahbb in $pidsEscuchando_ahbb) {
  $proceso_ahbb = Get-Process -Id $pid_ahbb -ErrorAction SilentlyContinue
  if (-not $proceso_ahbb) {
    continue
  }

  if ($proceso_ahbb.ProcessName -ne 'node') {
    throw "[DEV] El puerto 3000 responde como la API esperada, pero el proceso asociado no es Node. Revisa el entorno antes de continuar."
  }

  Write-Host "[DEV] Backend anterior detectado en 3000. Cerrando $($proceso_ahbb.ProcessName) (PID $pid_ahbb)..."
  $resultadoCierre_ahbb = & taskkill /PID $pid_ahbb /T /F 2>&1
  if ($LASTEXITCODE -ne 0) {
    throw "[DEV] No se pudo cerrar el proceso Node previo en 3000. Detalle: $($resultadoCierre_ahbb -join ' ')"
  }
  $procesosCerrados_ahbb += $pid_ahbb
}

if ($procesosCerrados_ahbb.Count -gt 0) {
  Start-Sleep -Seconds 2
  Write-Host "[DEV] Puerto 3000 liberado para una nueva sesión de desarrollo."
}
