# STEMReach Blockly package
This package folder contains three components required to build and package the STEMReach Blockly desktop application:

* The [Electron][1] project to use STEMReach Blockly as a desktop application
* Python scripts required to build and package STEMReach Blockly into a standalone executable.
* Git submodule that contains the documentation (stored in the Ardublockly GitHub Wiki)
 
The full build instruction can be found in the Ardublockly GitHub Wiki article [Building-Ardublockly][2].

The build output can be distributed without any dependencies other than having the Arduino IDE.

## Download the packaged STEMReach Blockly
The stable binaries for Windows, Linux, and Mac OS X are hosted in GitHub as part of the [repository releases][11].

Development builds are triggered by GitHub Actions on each git commit and tagged release, and are attached to the [GitHub Releases page][11].


[1]: https://electron.atom.io
[2]: https://github.com/carlosperate/ardublockly/wiki/Building-Ardublockly
[11]: https://github.com/rbuwaENG/STEMReachblockly-app/releases/
