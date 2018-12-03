---
description: "Contains all available geographical information about an IP"
title: Geo
draft: false
toc: true
---

Unlike other endpoints the Geo endpoint doesn't have a text based version, it simply contains too much information to be useful as plain text. If people think otherwise, please reach out and let me know.

This endpoint mainly contains geographical information about an IP, such as its latitude and longitude, along with the owning (ASN) organisiation.

### URIs

{{% table %}}
| Type  | URI |
| ----- | --- |
| JSON  | `https://get.geojs.io/v1/ip/geo.json` `https://get.geojs.io/v1/ip/geo/{ip address}.json` |
| JSONP | `https://get.geojs.io/v1/ip/geo.js` `https://get.geojs.io/v1/ip/geo/{ip address}.js` |

{{% /table %}}

### Query Parameters

{{% table %}}

| Paramater  | Default | Description                              | Endpoint        |
| ---------- | ------- | ---------------------------------------- | --------------- |
| `ip`       | None    | Allows searching of multiple IPs at once | All             |
| `callback` | `geoip` | JSONP callback                           | `/v1/ip/geo.js` |

{{% /table %}}

## Examples

### JSON

```json
{
  "accuracy": 1000,
  "area_code": "0",
  "asn": 15169,
  "continent_code": "NA",
  "country": "United States",
  "country_code": "US",
  "country_code3": "USA",
  "ip": "8.8.8.8",
  "latitude": "37.751",
  "longitude": "-97.822",
  "organization": "AS15169 Google LLC",
  "organization_name": "Google LLC"
}
```

When multiple IPs are queried using the the `ip` arg on a request you get a response like this:

```json
[
  {
    "accuracy": 1000,
    "area_code": "0",
    "asn": 15169,
    "continent_code": "NA",
    "country": "United States",
    "country_code": "US",
    "country_code3": "USA",
    "ip": "8.8.8.8",
    "latitude": "37.751",
    "longitude": "-97.822",
    "organization": "AS15169 Google LLC",
    "organization_name": "Google LLC"
  },
  {
    "accuracy": 1000,
    "area_code": "0",
    "asn": 14907,
    "continent_code": "NA",
    "country": "United States",
    "country_code": "US",
    "country_code3": "USA",
    "ip": "198.35.26.96",
    "latitude": "37.751",
    "longitude": "-97.822",
    "organization": "AS14907 Wikimedia Foundation Inc.",
    "organization_name": "Wikimedia Foundation Inc."
  }
]
```

### JSONP

```javascript
geoip({
  "organization_name": "Google LLC",
  "accuracy": 1000,
  "asn": 15169,
  "organization": "AS15169 Google LLC",
  "longitude": "-97.822",
  "country_code3": "USA",
  "area_code": "0",
  "ip": "8.8.8.8",
  "country": "United States",
  "continent_code": "NA",
  "country_code": "US",
  "latitude": "37.751"
})
```

When querying multiple IPs using the `ip` arg the return becomes a list like below:

```javascript
geoip([{
  "organization_name": "Google LLC",
  "accuracy": 1000,
  "asn": 15169,
  "organization": "AS15169 Google LLC",
  "longitude": "-97.822",
  "country_code3": "USA",
  "area_code": "0",
  "ip": "8.8.8.8",
  "country": "United States",
  "continent_code": "NA",
  "country_code": "US",
  "latitude": "37.751"
}, {
  "organization_name": "Wikimedia Foundation Inc.",
  "accuracy": 1000,
  "asn": 14907,
  "organization": "AS14907 Wikimedia Foundation Inc.",
  "longitude": "-97.822",
  "country_code3": "USA",
  "area_code": "0",
  "ip": "198.35.26.96",
  "country": "United States",
  "continent_code": "NA",
  "country_code": "US",
  "latitude": "37.751"
}])
```
