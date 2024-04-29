FROM node:latest

WORKDIR /app

COPY Runner.sh .
COPY Dependencies.sh .

COPY frontend/package.json frontend/package-lock.json ./frontend/

RUN cd frontend && npm i

COPY backend/package.json backend/package-lock.json ./backend/

RUN cd backend && npm i

COPY frontend ./frontend
COPY backend ./backend

EXPOSE 3000 
EXPOSE 5173

CMD ["/bin/bash", "./Runner.sh"]