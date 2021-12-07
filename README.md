# Link Converter 
Web applications use URLs and mobile applications use deeplinks. Both applications use 
links to redirect specific locations inside applications. When you want to redirect across applications, you 
should convert URLs to deeplinks or deeplinks to URLs.

## Running with localhost
You have to edit the .env file to connection.
```
yarn install
yarn start
```
- Application will start at port 8080
- For running test, `yarn test`
## Technical Details
- Data source is PostgreSQL
- Node.js is used as application framework
## API Details
```/api/url-to-deeplink```

This API accepts HTTP POST request. Convert URLs to deeplinks. Example request body:
```
{
    "request":"https://www.longUrl.com/Hesabim/#/Siparislerim"
}

```
Response to this request:
```
{
    "message": "Insert Succesfull",
    "data": "dl://?Page=Home",
    "status": 200
}
```
```/api/deeplink-to-url```

This API accepts HTTP POST request. Convert deeplinks to URLs. Example request body:
```
{
    "request":"dl://?Page=Search&Query=elbise"
}
```
Response to this request:
```
{
    "message": "Insert Succesfull",
    "data": "https://www.longUrl.com/sr?q=elbise",
    "status": 200
}


```
- You can find Postman export for sample requests under `postman` folder


