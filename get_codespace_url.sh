#!/bin/bash

if [ -z "$CODESPACE_NAME" ]; then
    echo "Not running in a Codespace environment."
    exit 1
 fi

 port=3000
 url="https://$CODESPACE_NAME-${port}.github.dev"

 echo "Saving URL to .env.local: $url"
 
# 检查 .env.local 是否存在， 如果存在则清除相关行，如果不存在创建
if [ -f ".env.local" ]; then
    sed -i '/^VITE_CODESPACE_URL=/d' .env.local
else
   touch .env.local
fi

echo "VITE_CODESPACE_URL=$url" >> .env.local

 # 输出文件内容， 方便调试
 cat .env.local
 ```