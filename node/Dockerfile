# 사용할 베이스 이미지 설정
FROM node:21

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 앱 소스 추가
COPY . .

# 앱 의존성 설치
COPY package*.json ./
RUN npm install

# 앱 실행
# CMD ["npm", "start"]
CMD ["node", "index.js"]