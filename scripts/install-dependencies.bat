@echo off
REM Image Optimization Script - Dependency Installation (Windows)
REM This script installs all required dependencies for the image optimization script

echo.
echo ════════════════════════════════════════════════════════════
echo    Image Optimization Script - Dependency Installer
echo ════════════════════════════════════════════════════════════
echo.

REM Check if Node.js is installed
where /q node
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed!
    echo    Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Display versions
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo ✓ Node.js %NODE_VERSION% is installed
echo ✓ npm %NPM_VERSION% is installed
echo.

REM Install sharp
echo 📦 Installing sharp (image processing library)...
call npm install sharp

if %ERRORLEVEL% EQU 0 (
    echo ✓ Sharp installed successfully!
) else (
    echo ❌ Failed to install sharp
    pause
    exit /b 1
)

echo.
echo ✓ All dependencies installed!
echo.
echo You can now run the optimization script:
echo   npm run optimize-images:dry-run
echo   npm run optimize-images
echo.
pause
