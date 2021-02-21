# react-template

## Get Started

### Development using Docker

1. Move to repository root path.
```
cd ${REPOSITORY_ROOT}
```

2. Create environment file.
```
cp .env.sample .env
```

3. Build app
```
docker-compose -f docker-compose.local.yaml build app
```

4. Start app
```
docker-compose -f docker-compose.local.yaml up -d app
```

5. Install dependencies
```
docker-compose -f docker-compose.local.yaml exec app npm install
```

6. Run app

```
docker-compose -f docker-compose.local.yaml exec app npm run start:dev
```

7. Show app

Please access to [localhost:8080](http://localhost:8080), you can see that the app is running.
