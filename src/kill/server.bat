@echo off

tasklist /FI "IMAGENAME eq RobloxStudioBeta.exe" | find /I "RobloxStudioBeta.exe" >nul
if %errorlevel%==0 (
    taskkill /F /IM "RobloxStudioBeta.exe" >nul 2>&1
)

tasklist /FI "IMAGENAME eq RobloxStudio.exe" | find /I "RobloxStudio.exe" >nul
if %errorlevel%==0 (
    taskkill /F /IM "RobloxStudio.exe" >nul 2>&1
)
