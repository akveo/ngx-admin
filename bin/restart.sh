#!/usr/bin/env bash

cd ..
ps -ef | grep "cms.report" | awk '{print $2}' | xargs sudo kill -9
sudo nohup npm start &
