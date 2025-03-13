@echo off

:: 创建目标目录
mkdir "%~dp0\mods" 2>nul
mkdir "%~dp0\config" 2>nul

:: 合并 Mods
echo 合并 Mods...
xcopy "%~dp0\client\mods\*" "%~dp0\mods\" /e/y/q >nul
xcopy "%~dp0\common\mods\*" "%~dp0\mods\" /e/y/q >nul

:: 合并 Config
echo 合并 Config...
xcopy "%~dp0\client\config\*" "%~dp0\config\" /e/y/q >nul
xcopy "%~dp0\common\config\*" "%~dp0\config\" /e/y/q >nul

:: 执行 packwiz 命令
echo 刷新 packwiz 状态...
packwiz refresh >nul
echo 检测 CurseForge Mod...
packwiz curseforge detect
echo 导出 CurseForge 整合包...
packwiz cf export

:: 清理 mods 和 config 目录
echo 清理临时 mods 和 config 目录...
rmdir /s /q "%~dp0\mods"
rmdir /s /q "%~dp0\config"

echo 打包完成！
pause
@echo on