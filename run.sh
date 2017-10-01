#!/bin/bash

echo "Testing v3.4.2"
cd 3.4.2 && npm install && node clean-css-it.js | grep main && cd ..

echo "Testing v4.1.9"
cd 4.1.9 && npm install && node clean-css-it.js | grep main && cd ..
