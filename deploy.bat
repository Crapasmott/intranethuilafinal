@echo off
echo Limpiando build anterior...
rmdir /s /q .next 2>nul
rmdir /s /q out 2>nul

echo Construyendo proyecto...
call npm run build

echo Copiando a XAMPP...
xcopy /E /Y "out\*" "C:\xampp\htdocs\intranet\"

echo Listo! Accede a http://localhost/intranet/
pause