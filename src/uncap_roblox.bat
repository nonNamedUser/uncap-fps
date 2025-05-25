:: RobloxClient Version

@echo off
setlocal

call "./kill/client.bat"

for /f "usebackq delims=" %%a in ("fps.txt") do (
    set "fps=%%a"
    goto :gg
)

:gg

if "%fps%"=="" (
    exit /b 1
)

powershell -NoProfile -Command ^
  "$xmlPath = Join-Path $env:LOCALAPPDATA 'Roblox\GlobalBasicSettings_13.xml';" ^
  "[xml]$xml = Get-Content $xmlPath;" ^
  "$node = $xml.roblox.Item.Properties.int | Where-Object { $_.name -eq 'FramerateCap' };" ^
  "if ($node) { $node.'#text' = '%fps%'; $xml.Save($xmlPath); Write-Host 'FPS set to %fps%' } else { Write-Host 'FramerateCap not found!' }"

pause
