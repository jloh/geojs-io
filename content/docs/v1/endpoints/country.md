---
description: "Returns the country information about an IP."
title: Country
draft: false
features:
  Text: Yes
  JSON: Yes
  JSONP: Yes
---

This endpoint returns the country of the requesting IP. It has multiple plain text endpoints allowing you to choose whether you want the full country name or just the country code.

## URIs

{{% table %}}
| Type  | URI |
| ----- | --- |
| Plain text  | `https://get.geojs.io/v1/ip/country{/ip address}` |
| Plain text  | `https://get.geojs.io/v1/ip/country/full{/ip address}` |
| JSON  | `https://get.geojs.io/v1/ip/country.json` <br> `https://get.geojs.io/v1/ip/country/{ip address}.json` |
| JSONP | `https://get.geojs.io/v1/ip/country.js` <br> `https://get.geojs.io/v1/ip/country/{ip address}.js` |

{{% /table %}}

## Query Parameters

{{% table %}}

| Paramater  | Default | Description                              | Endpoint            |
| ---------- | ------- | ---------------------------------------- | ------------------- |
| `ip`       | None    | Allows searching of multiple IPs at once | All                 |
| `callback` | `countryip` | JSONP callback                           | `/v1/ip/country.js` |

{{% /table %}}

## Properties

{{% table %}}

| Property    | Type    | Description               | Example         |
| ------------| ------- | ------------------------- | --------------- |
| `ip`        | String  | Requested IP              | `8.8.8.8`       |
| `country`   | String  | Two letter country code   | `US`            |
| `country_3` | String  | Three letter country code | `USA`           |
| `name`      | String  | Country name in English   | `United States` |

{{% /table %}}


## Examples

### Plain text

### JSON

```json
{
  "country": "US",
  "country_3": "USA",
  "ip": "198.35.26.96",
  "name": "United States"
}
```

When multiple IPs are queried using the the `ip` arg on a request you get a response like this:

```json
[
  {
    "country": "US",
    "country_3": "USA",
    "ip": "8.8.8.8",
    "name": "United States"
  },
  {
    "country": "US",
    "country_3": "USA",
    "ip": "198.35.26.96",
    "name": "United States"
  }
]
```

### JSONP

```javascript
countryip({
  "country": "US",
  "country_3": "USA",
  "ip": "198.35.26.96",
  "name": "United States"
})
```

When querying multiple IPs using the `ip` arg the return becomes a list like below:

```javascript
countryip([{
  "country": "US",
  "country_3": "USA",
  "ip": "8.8.8.8",
  "name": "United States"
}, {
  "country": "US",
  "country_3": "USA",
  "ip": "198.35.26.96",
  "name": "United States"
}])
```
