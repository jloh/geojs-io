---
date: 2016-04-23T15:21:22+02:00
title: Docs for GeoJS
weight: 10
---

## Domains

GeoJS is currently only available on https://get.getjs.io/. The `HTTP` version redirects to the `HTTPS` version so a non-HTTPS version is not available. There is no plan to ever change this.

There are also IPv6 and IPv4 only endpoints on https://ipv6.geojs.io/ and https://ipv4.geojs.io/ respectively.

## Formats

All endpoints either have a JSON or JavaScript/JSONP format available. The IP and Country based endpoints also have a plain text version available.

## End Points

### IP - Returns the requesters IP address

Allowed methods: `GET`  
Default JSONP response: `geoip`

This endpoint just returns the IP address of the request originates from.

#### Plain text

URL: `https://get.geojs.io/v1/ip`

Example response:

```
curl -s https://get.geojs.io/v1/ip
45.63.26.69
```

#### JSON

URL: `https://get.geojs.io/v1/ip.json`

Example response:

```
curl -s https://get.geojs.io/v1/ip.json
{"ip":"45.63.26.69"}
```

#### JSONP

URL: `https://get.geojs.io/v1/ip.js<?callback=XXXX>`

Example response:

```
curl -s https://get.geojs.io/v1/ip.js
geoip({"ip":"45.63.26.69"})

curl -s https://get.geojs.io/v1/ip.js?callback=userip
userip({"ip":"45.63.26.69"})
```

### Country - Returns the requesters IP addresses country OR lookup a specific IP addresses country

Allowed methods: `GET`  
Default JSONP response: `countryip`

This endpoint returns information about a specific IP address or the IP the request originates from. The JSON and JS URLs return the requesters IP if it differs from the requested one within the payload.

#### Plain text

URL: `https://get.geojs.io/v1/ip` / `https://get.geojs.io/v1/ip/<ip address>`

Example response:

```
curl -s https://get.geojs.io/v1/ip/country
AU

curl -s https://get.geojs.io/v1/ip/country/198.41.215.162
US
```

#### JSON

URL: `https://get.geojs.io/v1/ip/country.json` / `https://get.geojs.io/v1/ip/country/<ip address>.json`

Example response:

```
curl -s https://get.geojs.io/v1/ip/country.json
{"ip":"45.63.26.69","country":"AU","country_3":"AUS"}

curl -s https://get.geojs.io/v1/ip/country/198.41.215.162.json
{"request_ip":"45.63.26.69","ip":"198.41.215.162","country":"US","country_3":"USA"}
```

#### JSONP

URL: `https://get.geojs.io/v1/ip/country.js<?callback=XXXX>` / `https://get.geojs.io/v1/ip/country/<ip address>.js<?callback=XXXX>`

Example response:

```
curl -s https://get.geojs.io/v1/ip/country.js
countryip({"ip":"45.63.26.69","country":"AU","country_3":"AUS"})

curl -s https://get.geojs.io/v1/ip/country/198.41.215.162.js?callback=usercountry
usercountry({"request_ip":"45.63.26.69","ip":"198.41.215.162","country":"US","country_3":"USA"})
```

### Geo Lookup - Returns the requesters IP addresses Geo location OR lookup a specific IP addresses Geo location

Allowed methods: `GET`  
Default JSONP response: `geoip`

Along with country information this endpoint returns additional geographical information such as the city, region, timezone and others. Unlike the previous two endpoints this one does not have a plain text endpoint due to the large amount of data. Both endpoints return the requesters IP address if it differs from the requested one within the payload.

#### JSON

URL: `https://get.geojs.io/v1/ip/geo.json` / `https://get.geojs.io/v1/ip/geo/<ip address>.json`

Example response:

```
curl -s https://get.geojs.io/v1/ip/geo.json
{"city":"Sydney","timezone":"Australia\/Sydney","region":"New South Wales","country_code":"AU","ip":"45.63.26.69","longitude":"150.9677","latitude":"-33.9032","continent_code":"OC","country":"Australia","country_code3":"AUS"}

curl -s https://get.geojs.io/v1/ip/geo/198.41.215.162.json
{"request_ip":"45.63.26.69","city":"San Francisco","timezone":"America\/Los_Angeles","region":"California","country_code":"US","ip":"198.41.215.162","longitude":"-122.3933","latitude":"37.7697","continent_code":"NA","country":"United States","country_code3":"USA"}
```

#### JSONP

URL: `https://get.geojs.io/v1/ip/geo.js<?callback=XXXX>` / `https://get.geojs.io/v1/ip/geo/<ip address>.js<?callback=XXXX>`

Example response:

```
curl -s https://get.geojs.io/v1/ip/geo.js
geoip({"city":"Sydney","timezone":"Australia\/Sydney","region":"New South Wales","country_code":"AU","ip":"45.63.26.69","longitude":"150.9677","latitude":"-33.9032","continent_code":"OC","country":"Australia","country_code3":"AUS"})

curl -s https://get.geojs.io/v1/ip/geo/198.41.215.162.js?callback=user-geo
user-geo({"request_ip":"45.63.26.69","city":"San Francisco","timezone":"America\/Los_Angeles","region":"California","country_code":"US","ip":"198.41.215.162","longitude":"-122.3933","latitude":"37.7697","continent_code":"NA","country":"United States","country_code3":"USA"})
```

