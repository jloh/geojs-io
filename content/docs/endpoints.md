---
description: "Current endpoints that can be used"
title: Endpoints
weight: 110
draft: false
bref: "Current endpoints that can be used"
toc: true
---

GeoJS's main endpoint gives you the ability to lookup the requesters/specific IP information in multiple formats.

## IP

This endpoint returns the requesters IP. You can specify a custom callback for the JSONP endpoint.

### URIs
Type  | URI
---   | ---
Text  | `https://get.geojs.io/v1/ip`
JSON  | `https://get.geojs.io/v1/ip.json`
JSONP | `https://get.geojs.io/v1/ip.js(?callback=custom)`

### Query Parameters

Parameter | Default | Description | Endpoint
----------|---------|-------------|---------
`callback` | `geoip` | JSONP callback | `/v1/ip.js`

### Example Responses

<nav id="ip-example" class="tabs" data-component="tabs">
    <ul>
        <li><a href="#ip-example-text">Text</a></li>
        <li><a href="#ip-example-json">JSON</a></li>
        <li><a href="#ip-example-jsonp">JSONP</a></li>
    </ul>
</nav>

<div id="ip-example-text">
  {{% md %}}
  ```text
45.63.26.69
  ```
  {{% /md %}}
</div>
<div id="ip-example-json">
{{% md %}}
```json
{
  "ip": "45.63.26.69"
}
```
{{% /md %}}
</div>
<div id="ip-example-jsonp">
{{% md %}}
```javascript
geoip({
  "ip": "45.63.26.69"
})
```
{{% /md %}}
</div>

## IP - Country

This endpoint returns information about an IPs country. You can specify a custom callback for the JSONP endpoint along with requesting information about multiple specific IPs using the IP arg.

All URIs support looking up a specific IP address by adding it as part of the URI. The JSON and text URIs have the additional option to supply multiple IPs (IPv6 or IPv4) comma separated in the IP arg. 

### URIs

Type  | URI/s |
----------|---------|
Text  | `https://get.geojs.io/v1/ip/country(?ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/country/{ip address}` |
JSON  | `https://get.geojs.io/v1/ip/country.json(?ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/country/{ip address}.json`|
JSONP | `https://get.geojs.io/v1/ip/country.js(?callback=custom)` `https://get.geojs.io/v1/ip/country/{ip address}.js(?callback=custom)` |

### Query Parameters

Parameter  | Default | Description | Endpoint
-----------|---------|-------------|---------
`ip`       | `None`  | Allows searching of multiple IPs at once | `/v1/ip/country(.json)`
`callback` | `countryip` | JSONP callback | `/v1/ip/country.js`

### Example Responses

<nav id="ip-country-example" class="tabs" data-component="tabs">
    <ul>
        <li><a href="#ip-country-example-text">Text</a></li>
        <li><a href="#ip-country-example-json">JSON</a></li>
        <li><a href="#ip-country-example-jsonp">JSONP</a></li>
    </ul>
</nav>

<div id="ip-country-example-text">
  {{% md %}}
  ```text
AU
  ```

When multiple IPs are queried using the the `ip` arg on a request you get a response like this:

  ```text
8.8.8.8: US
198.35.26.96: US
  ```
  {{% /md %}}

</div>
<div id="ip-country-example-json">
{{% md %}}
```json
{
  "ip": "8.8.8.8",
  "country": "US",
  "name": "United States",
  "country_3": "USA"
}
```

When querying multiple IPs using the `ip` arg the return becomes a list like below:

```json
[
  {
    "name": "United States",
    "country": "US",
    "ip": "8.8.8.8",
    "country_3": "USA"
  },
  {
    "name": "United States",
    "country": "US",
    "ip": "198.35.26.96",
    "country_3": "USA"
  }
]
```
{{% /md %}}
</div>
<div id="ip-country-example-jsonp">
{{% md %}}
```javascript
countryip({
  "ip": "8.8.8.8",
  "country": "US",
  "name": "United States",
  "country_3": "USA"
})
```
{{% /md %}}
</div>

## IP - Country Full

This endpoint only has a text version available as it is the exact same as the above, however it returns the full country name as opposed to the two letter code.

### URIs

Type  | URI |
----------|---------|
Text  | `https://get.geojs.io/v1/ip/country/full(?ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/country/full/{ip address}` |

### Query Parameters

Parameter  | Default | Description | Endpoint
-----------|---------|-------------|---------
`ip`       | `None`  | Allows searching of multiple IPs at once | `/v1/ip/country/full`

### Example Responses

<nav id="ip-countfull-example" class="tabs" data-component="tabs">
    <ul>
        <li><a href="#ip-countfull-example-text">Text</a></li>
        <li><a href="#ip-countfull-example-text-multi">Text Multiple</a></li>
    </ul>
</nav>

<div id="ip-countfull-example-text">
  {{% md %}}
  ```text
Australia
  ```
  {{% /md %}}
</div>
<div id="ip-countfull-example-text-multi">
{{% md %}}
```text
8.8.8.8: United States
198.35.26.96: United States
```
{{% /md %}}
</div>


## IP - Geo

Unlike other endpoints the Geo endpoint doesn't have a text based version, it simply contains to much information to be useful as plain text. If people think otherwise, please reach out and let me know.

This endpoint contains the requesting IP within the `json` as the `ip` key. It also contains latitude and longitude information along with the country data included in the country endpoint.

### URIs

Type  | URI |
----------|---------|
JSON  | `https://get.geojs.io/v1/ip/geo.json(?ip=8.8.8.8,198.35.26.96)` |
JSONP | `https://get.geojs.io/v1/ip/geo.js(?callback=custom)` |

### Query Parameters

Parameter  | Default | Description | Endpoint
-----------|---------|-------------|---------
`ip`       | `None`  | Allows searching of multiple IPs at once | `/v1/ip/geo.json`
`callback` | `geoip` | JSONP callback | `/v1/ip/geo.js`

### Example Responses

<nav id="ip-geo-example" class="tabs" data-component="tabs">
    <ul>
        <li><a href="#ip-geo-example-json">JSON</a></li>
        <li><a href="#ip-geo-example-jsonp">JSONP</a></li>
    </ul>
</nav>

<div id="ip-geo-example-json">
{{% md %}}

```json
{
  "area_code": "0",
  "continent_code": "NA",
  "country": "United States",
  "country_code": "US",
  "country_code3": "USA",
  "ip": "8.8.8.8",
  "latitude": "37.7510",
  "longitude": "-97.8220",
  "organization": "AS15169 Google Inc.",
  "timezone": ""
}
```

When multiple IPs are queried using the the ip arg on a request you get a response like this:

```json
[
  {
    "area_code": "0",
    "continent_code": "NA",
    "country": "United States",
    "country_code": "US",
    "country_code3": "USA",
    "ip": "8.8.8.8",
    "latitude": "37.7510",
    "longitude": "-97.8220",
    "organization": "AS15169 Google Inc.",
    "timezone": ""
  },
  {
    "area_code": "0",
    "city": "San Francisco",
    "continent_code": "NA",
    "country": "United States",
    "country_code": "US",
    "country_code3": "USA",
    "ip": "198.35.26.96",
    "organization": "AS14907 Wikimedia Foundation, Inc.",
    "region": "California",
    "timezone": "America/Los_Angeles"
  }
]
```
{{% /md %}}
</div>
<div id="ip-geo-example-jsonp">
{{% md %}}
```javascript
geoip({
  "city": "San Francisco",
  "timezone": "America\/Los_Angeles",
  "organization": "AS14907 Wikimedia Foundation, Inc.",
  "region": "California",
  "latitude": "37.7898",
  "country_code": "US",
  "ip": "8.8.8.8",
  "longitude": "-122.3942",
  "area_code": "0",
  "continent_code": "US",
  "country": "United States",
  "country_code3": "USA"
})
```
{{% /md %}}
</div>

