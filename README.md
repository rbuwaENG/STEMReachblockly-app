# STEMReach Blockly

[![CI](https://github.com/rbuwaENG/STEMReachblockly-app/actions/workflows/ci.yml/badge.svg)](https://github.com/rbuwaENG/STEMReachblockly-app/actions/workflows/ci.yml)

STEMReach Blockly is a visual programming editor for Arduino. It is based on Google's [Blockly][1], which has been forked to generate [Arduino][15] code.

The `ArdublocklyServer` Python package initialises a local server to be able to compile and load the Arduino code using the [Arduino IDE][2].

This is all packaged in a self contained executable desktop application for Windows, Mac OS X, and Linux.

![STEMReach Blockly desktop program screenshot][desktop_screeshot]


## Features
* Generates Arduino code with visual drag-and-drop blocks
* Uploads the code to an Arduino Board
* Useful "code block warnings"
* Compatible with a wide range of official Arduino Boards
* Works on Windows / Linux / Mac OS X

STEMReach Blockly is still under development and a few features are not yet implemented. A to-do list can be found in the [TODO.md][3] file.

Currently tested under Windows, Linux and MacOS X with Python 3.


## Cloning the repository
Please note that there are submodules in the repository that need initialisation. So, to correctly clone the STEMReach Blockly repository:

```
git clone https://github.com/rbuwaENG/STEMReachblockly-app.git
cd STEMReachblockly-app
git submodule update --init --recursive
```


## Installing
The desktop application is available for Windows/Mac/Linux and runs as a stand-alone executable that can be downloaded from the [STEMReach Blockly repository releases page][4].

You will also need the [Arduino IDE version 1.6.x or higher][2].

#### Development builds
You can also test __UNSTABLE__ development builds automatically generated every time an update is added to the GitHub repository, available from the [GitHub Actions runs][12] and attached to [tagged releases][4].

#### "Core version" (Python server only)
If you prefer, the core software can be used by running only the Python server, which loads the web interface on your local browser (Chrome recommended).

Full installation instructions for this version can be found in [this Github repository Wiki][5].

The quick version: Clone this repository, initialise all submodules, and execute:

```
python3 start.py
```

This will work on Windows, Linux (including ARM) and Mac OS X, with Python 3.


## Running
1. [Install STEMReach Blockly][5].
2. Install the [Arduino IDE][2] version 1.6.x or higher (latest version is always recommended).
3. Run STEMReach Blockly as defined in your installation method.
3. Configure STEMReach Blockly to locate the Arduino IDE [following these instructions][6].


## Online Demos
A demo of the latest release of the STEMReach Blockly main interface can be found in the following two links (to load the code into an Arduino it requires the full STEMReach Blockly application to be downloaded and run on your computer):

#### [STEMReach Blockly][10]
![WebApp screenshot responsive design][web_screenshot_responsive]

#### [STEMReach Blockly classic][11]
![WebApp screenshot][web_screenshot_classic]


## Documentation
The documentation, including installation instructions, configuration instructions, and developer information can be found in the [STEMReach Blockly GitHub repository Wiki][7].

To download the documentation you can git clone the wiki data:

```
git clone https://github.com/carlosperate/ardublockly.wiki.git
```


## Credit
This project is a rebrand of [Ardublockly][8] by carlosperate, which was in turn inspired by [BlocklyDuino][16].

Blockly original source is Copyright of Google Inc. [https://developers.google.com/blockly/][1]. A list of changes to the Blockly fork can be found in the [Blockly subdirectory README][17] file.


## License
Copyright (c) 2016 carlosperate https://github.com/carlosperate/
Copyright (c) 2026 STEMreach and/or its affiliated companies

Unless stated otherwise, the source code of this projects is
licensed under the Apache License, Version 2.0 (the "License");
you may not use any of the licensed files within this project
except in compliance with the License.

The full document can be found in the [LICENSE][9] file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


[1]: https://developers.google.com/blockly/
[2]: http://www.arduino.cc/en/main/software/
[3]: TODO.md
[4]: https://github.com/rbuwaENG/STEMReachblockly-app/releases/
[5]: https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly
[6]: https://github.com/carlosperate/ardublockly/wiki/Configure-Ardublockly
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: https://github.com/carlosperate/ardublockly
[9]: https://github.com/rbuwaENG/STEMReachblockly-app/blob/master/LICENSE
[10]: http://ardublockly.embeddedlog.com/demo/index.html
[11]: http://ardublockly.embeddedlog.com/demo/classic/index.html
[12]: https://github.com/rbuwaENG/STEMReachblockly-app/actions
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md

[desktop_screeshot]: http://carlosperate.github.io/ardublockly/images/screenshot_desktop_1.png
[web_screenshot_responsive]: http://carlosperate.github.io/ardublockly/images/screenshot_material_all_small.jpg
[web_screenshot_classic]: http://carlosperate.github.io/ardublockly/images/screenshot_1.png
