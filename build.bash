#!/usr/bin/env bash

# Maintainer Mr.Twister

path=`pwd`
nativefier --name "Anime1" -p linux --inject $path/fullscreen.js --internal-urls ".*?\anime\.*?" --width 858 --height 531 --always-on-top anime1.me 
