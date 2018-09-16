---
sidebar: auto
---

# API v1

<DO/>

## Overview

The GeoJS API is available on https://get.geojs.io/. The `http` version redirects to `https`, as such a non-HTTPS version is not available. There is no plan to ever change this.

IPv6 and IPv4 only endpoints are available on https://ipv6.geojs.io/ and https://ipv4.geojs.io/ respectively.

#### Rate Limits

As it currently stands GeoJS has no rate limits and doesn’t require any to be implemented. Should rate limits be required advanced warning will be given.

### Multi-IP Lookups



### JSON

### JS

| Tables        | Are           | Cool  |
| ------------- | ------------- | ----- |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Callbacks

## Endpoints

### IP

This endpoint returns the requesters IP. You can specify a custom callback for the JSONP endpoint.

#### URIs

| Type  | URI |
| ----- | --- |
| Text  | `/v1/ip` |
| JSON  | `/v1/ip.json` |
| JSONP | `/v1/ip.js(?callback=custom)` |

#### Example Responses

:::: tabs :options="{ useUrlFragment: false }"

::: tab Text
```
8.8.8.8
```
:::


::: tab id="text-json" name="JSON"
``` json
{
  "ip": "8.8.8.8"
}
```
:::

::: tab JSONP
``` javascript
geoip({
  "ip": "8.8.8.8"
})
```
:::

::::


### Country

### Country Full

### Geo

### PTR

