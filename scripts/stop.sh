#!/bin/bash

# Next.js 프로세스 검색 및 중지
NEXT_PID=$(ps aux | grep 'next start' | grep -v 'grep' | awk '{print $2}')

if [ -z "$NEXT_PID" ]; then
  echo "실행 중인 Next.js 프로세스가 없습니다."
else
  echo "실행 중인 Next.js 프로세스 중지 중... (PID: $NEXT_PID)"
  kill -9 $NEXT_PID
  echo "Next.js 프로세스 중지 완료"
fi
