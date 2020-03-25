dockerize -wait tcp://sodam-db:3306 -timeout 120s

npm install
echo "Start sodam market server"
npm run dev