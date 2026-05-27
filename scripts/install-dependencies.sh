#!/bin/bash

# Image Optimization Script - Dependency Installation
# This script installs all required dependencies for the image optimization script

echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Image Optimization Script - Dependency Installer        ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "   Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js $(node --version) is installed"
echo "✓ npm $(npm --version) is installed"
echo ""

# Install sharp
echo "📦 Installing sharp (image processing library)..."
npm install sharp

if [ $? -eq 0 ]; then
    echo "✓ Sharp installed successfully!"
else
    echo "❌ Failed to install sharp"
    exit 1
fi

echo ""
echo "✓ All dependencies installed!"
echo ""
echo "You can now run the optimization script:"
echo "  node scripts/optimize-images.js --dry-run"
echo ""
