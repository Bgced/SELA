@echo off
title Push SELA ke GitHub
cd /d "C:\Users\Hype GLK\Documents\Project1Claude\SELA"

echo.
echo ===== 1. ADD FILES =====
git add .

echo.
echo ===== 2. COMMIT =====
git commit -m "Tambah favicon SVG logo SELA, tambah cara buka admin via tap logo 10x (mobile)"

echo.
echo ===== 3. PUSH KE GITHUB =====
git push origin main

echo.
echo ===== SELESAI =====
echo Kalau di atas ada tulisan "error" atau "failed", screenshot dan kirim ke Claude.
echo Kalau tidak, cek github.com/Bgced/SELA - commit harusnya sudah muncul.
echo.
pause
