---
description: "Current endpoints that can be used"
title: Geo
weight: 110
draft: false
bref: "Current endpoints that can be used"
toc: true
# Old URLs
aliases:
  - "/docs/endpoints/"
---

GeoJS's main endpoint gives you the ability to lookup the requesters/specific IP information in multiple formats.

## IP - Geo
---

Unlike other endpoints the Geo endpoint doesn't have a text based version, it simply contains too much information to be useful as plain text. If people think otherwise, please reach out and let me know.

This endpoint mainly contains geographical information about an IP, such as its latitude and longitude, along with the owning (ASN) organisiation.

### URIs

<div class="table-container">
{{% md %}}
| Type  | URI |
| ----- | --- |
| JSON  | `https://get.geojs.io/v1/ip/geo.json(?ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/geo/{ip address}.json` |
| JSONP | `https://get.geojs.io/v1/ip/geo.js(?callback=custom&ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/geo/{ip address}.js(?callback=custom)` |

{{% /md %}}
</div>

### Query Parameters

<div class="table-container">
{{% md %}}

| Paramater  | Default | Description                              | Endpoint        |
| ---------- | ------- | ---------------------------------------- | --------------- |
| `ip`       | None    | Allows searching of multiple IPs at once | All             |
| `callback` | `geoip` | JSONP callback                           | `/v1/ip/geo.js` |

{{% /md %}}
</div>

## Example Responses

<div>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#geo-example-json" aria-controls="geo-example-json" role="tab" data-toggle="tab">JSON</a></li>
    <li role="presentation"><a href="#geo-example-jsonp" aria-controls="geo-example-jsonp" role="tab" data-toggle="tab">JSONP</a></li>
  </ul>
  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="geo-example-json">
{{% md %}}
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
{{% /md %}}
    </div>
    <div role="tabpanel" class="tab-pane" id="geo-example-jsonp">{{% md %}}
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
{{% /md %}}
    </div>
  </div>
</div>
