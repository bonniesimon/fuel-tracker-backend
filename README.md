
# Fuel Tracker Backend

Backend API for Fuel Tracker




## Installation

Install my-project with yarn

```bash
  yarn install
```

Fill `.env` file with the required data (Check `src/config/default` to get an idea of the fields required)

To run the dev server
```bash
    yarn dev
```

To Build
```bash
    yarn build
```

## API Endpoints

| METHOD | ENDPOINT |
| ------- | ------ |
| GET |  /api/car/all  |
| POST  | /api/car/create  |
| GET  | /api/fuelentry/all | 
| POST  | /api/fuelentry/create   |
| GET  | /api/fuelentry/:carid  |
| DELETE  | /api/fuelentry/delete/:fuelentryid  |
| PATCH  | /api/fuelentry/update |

## Authors

- [@bonniesimon](https://www.github.com/bonniesimon)
