#!/bin/bash

# zip
cd ./dist/build
cp -r h5 wbtc
zip -q -r wbtc.zip wbtc
scp wbtc.zip ubuntu@api.jinpai.live:/var/www/skyroute/public/
rm wbtc.zip

ssh ubuntu@api.jinpai.live << EOF
cd /var/www/skyroute/public/
rm -rf wbtc
unzip -o wbtc.zip
rm wbtc.zip
EOF
rm -rf wbtc
