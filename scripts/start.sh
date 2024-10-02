#!/bin/bash

# 애플리케이션 디렉토리로 이동
cd /home/ubuntu/trandy_app

# Next.js 애플리케이션을 백그라운드에서 실행
echo "Next.js 애플리케이션 실행 중..."
nohup npm run start > nextjs.log 2>&1 &

echo "Next.js가 백그라운드에서 실행되었습니다."
