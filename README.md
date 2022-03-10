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

| METHOD | ENDPOINT                           |
| ------ | ---------------------------------- |
| GET    | /api/car/all                       |
| POST   | /api/car/create                    |
| GET    | /api/fuelentry/all                 |
| POST   | /api/fuelentry/create              |
| GET    | /api/fuelentry/:carid              |
| DELETE | /api/fuelentry/delete/:fuelentryid |
| PATCH  | /api/fuelentry/update              |

## JSON API format

<table>
<tr><th>Type</td><th>Description</th><th>Required Keys</th><th>Optional Keys</td></tr>
<tr><td>success</td><td>All went well, and (usually) some data was returned.</td><td>status, data</td><td></td></tr>
<tr><td>fail</td><td>There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied</td><td>status, error</td><td></td></tr>
<tr><td>error</td><td>An error occurred in processing the request, i.e. an exception was thrown</td><td>status,error</td><td>code, data</td></tr>
</table>

## Authors

-   [@bonniesimon](https://www.github.com/bonniesimon)
