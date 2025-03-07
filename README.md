
# Command & Conquer Generals (inc. Zero Hour) Source Code

This repository includes source code for Command & Conquer Generals, and its expansion pack Zero Hour. This release provides support to the Steam Workshop for both games ([C&C Generals](https://steamcommunity.com/workshop/browse/?appid=2229870) and [C&C Generals - Zero Hour](https://steamcommunity.com/workshop/browse/?appid=2732960)).

## 鸣谢/Credits
CN
- jmarshall2323, jmarshall23, andrew-2e128 仓库创建者或者是参与维护者 ([jmarshall2323/CnC_Generals_Zero_Hour](https://github.com/jmarshall2323/CnC_Generals_Zero_Hour)) 本仓库大量补丁来自于该分支。

EN
- jmarshall2323, jmarshall23, andrew-2e128 The creator of the forked repository or the contributor maintainer. ([jmarshall2323/CnC_Generals_Zero_Hour](https://github.com/jmarshall2323/CnC_Generals_Zero_Hour)) A lot of the patches in this repository come from this branch.

## 警告/warning
CN
- 目前该分支存在着大量严重问题，包括但不限于：
	- 在主菜单界面点击“退出游戏”时“D3DTexture”会出现释放问题，导致游戏崩溃。（已经使用临时方案解决）
	- 游戏崩溃有时会以奇怪的姿势发生

EN
- There are currently a number of serious issues with the branch, including but not limited to:
	- When you click "Exit Game" on the main menu screen, "D3DTexture" will have a release issue, causing the game to crash. (It has been resolved using a temporary solution)
	- Some game crashes are difficult to locate.

## 依赖/Dependencies
该分支已经集成了大量依赖，无需额外添加。

The branch already has a large number of dependencies integrated and no additional additions are required.

## Compiling (Win32 Only)

To use the compiled binaries, you must own the game. The C&C Ultimate Collection is available for purchase on [EA App](https://www.ea.com/en-gb/games/command-and-conquer/command-and-conquer-the-ultimate-collection/buy/pc) or [Steam](https://store.steampowered.com/bundle/39394/Command__Conquer_The_Ultimate_Collection/).

When the workspace has finished building, the compiled binaries will be copied to the folder called `/Run/` found in the root of each games directory. 


## Known Issues(old)

Windows has a policy where executables that contain words “version”, “update” or “install” in their filename will require UAC Elevation to run. This will affect “versionUpdate” and “buildVersionUpdate” projects from running as post-build events. Renaming the output binary name for these projects to not include these words should resolve the issue for you.

## Contributing

This repository will not be accepting contributions (pull requests, issues, etc). If you wish to create changes to the source code and encourage collaboration, please create a fork of the repository under your GitHub user/organization space.


## Support

This repository is for preservation purposes only and is archived without support. 


## License

This repository and its contents are licensed under the GPL v3 license, with additional terms applied. Please see [LICENSE.md](LICENSE.md) for details.
