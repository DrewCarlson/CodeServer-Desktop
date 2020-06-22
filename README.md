# CodeServer-Desktop

![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/DrewCarlson/CodeServer-Desktop?include_prereleases&sort=semver)
![Build/release](https://github.com/DrewCarlson/CodeServer-Desktop/workflows/Build/release/badge.svg)

Electron frontend for [code-server](https://github.com/cdr/code-server).


## About

This project provides a Windows, macOS, and Linux dekstop application for a self-hosted code-server instance.


## Why

code-server has a number of advantages over VSCode but is only usable with Chrome.
While not ideal, I'd prefer to install an Electron application instead of Chrome.


## Usage

Unsigned release binaries are published to the [Releases](https://github.com/DrewCarlson/CodeServer-Desktop/releases) section.
At first launch you will be prompted for a server URL which will be loaded automatically in the future.

(Optional) This project is for personal use so you will find the base [Dockerfile](Dockerfile) used for my code-server.
It includes Java 8, Nodejs 12, Rust, Golang, Sdkman, and [Krypton](https://krypt.co/).
oh-my-zsh is installed, just set `terminal.integrated.shell.linux` to `/etc/zsh` in code-server.


## Building

Run locally: 
```bash
yarn start
yarn debug # Adds --inspect-brk
```

Build release binary for host machine:

```bash
yarn dist
```


## Known issues

- The "Open New Terminal" command crashes the remote process and causes it to restart. (Terminal windows can still be opened)


## Publishing

Pushing a tag prefixed with `v` (ex. `v1.0.0`) will trigger a release upload to Github for every platform.
See [.github/workflows/electron-build.yml](.github/workflows/electron-build.yml).


## License

```
Copyright (c) 2020 Andrew Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
