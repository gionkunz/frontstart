#!/bin/sh
npm cache clean
npm install
bower install
grunt
