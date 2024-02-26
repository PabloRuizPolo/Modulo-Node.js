# NodeApp

Install dependencies.

```js
npm install
```
Initialize the database

**Warning, the next command deletes all the database!!!**
```sh
npm run init-db
```


## Development

To start the application in developent mode use:

```js
npm run dev
```

## API

Agent List

GET /api/agentes

```json
{
    "result": [
        {
            "_id": "65d88127e4390dfe6295c58c",
            "name": "Smith",
            "age": 34
        },
]}
```