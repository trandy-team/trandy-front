#!/bin/bash

# nvm 설정을 불러옴 (CodeDeploy에서 인식 불가)
export PATH=/home/ubuntu/.nvm/versions/node/v22.9.0/bin:$PATH

# 애플리케이션 디렉토리로 이동
cd /home/ubuntu/trandy_app

# Next.js 애플리케이션을 백그라운드에서 실행
echo "Next.js 애플리케이션 실행 중..."
nohup npm run start > nextjs.log 2>&1 &

# 백그라운드 실행된 프로세스의 PID를 저장
NEXT_PID=$!

# PID 출력
echo "Next.js가 백그라운드에서 실행되었습니다. (PID: $NEXT_PID)"
