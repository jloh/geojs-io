---
description: "Current endpoints that can be used"
title: Endpoints
weight: 110
draft: false
bref: "Current endpoints that can be used"
toc: true
icon: road
card_colour: purple
# Old URLs
aliases:
  - "/docs/endpoints/"
---

GeoJS's main endpoint gives you the ability to lookup the requesters/specific IP information in multiple formats.

## IP
---
  
This endpoint returns the requesters IP. You can specify a custom callback for the JSONP endpoint.

### URIs

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>URI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Text</th>
        <td>{{% md %}}`https://get.geojs.io/v1/ip`{{% /md %}}</td>
      </tr>
      <tr>
        <th>JSON</th>
        <td>{{% md %}}`https://get.geojs.io/v1/ip.json`{{% /md %}}</td>
      </tr>
      <tr>
        <th>JSONP</th>
        <td>{{% md %}}`https://get.geojs.io/v1/ip.js(?callback=custom)`{{% /md %}}</td>
      </tr>
    </tbody>
  </table>
</div>

### Query Parameters

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Paramater</th>
        <th>Default</th>
        <th>Description</th>
        <th>Endpoint</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{% md %}}`callback`{{% /md %}}</td>
        <td>{{% md %}}`geoip`{{% /md %}}</td>
        <td>JSONP callback</td>
        <td>{{% md %}}`/v1/ip.js`{{% /md %}}</td>
      </tr>
    </tbody>
  </table>
</div>

### Example Responses

<div>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#ip-text" aria-controls="ip-text" role="tab" data-toggle="tab">Text</a></li>
    <li role="presentation"><a href="#ip-json" aria-controls="ip-json" role="tab" data-toggle="tab">JSON</a></li>
    <li role="presentation"><a href="#ip-jsonp" aria-controls="ip-jsonp" role="tab" data-toggle="tab">JSONP</a></li>
  </ul>
  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="ip-text">{{% md %}}
  ```text
45.63.26.69
  ```
  {{% /md %}}</div>
    <div role="tabpanel" class="tab-pane" id="ip-json">
{{< highlight json >}}
{
  "ip": "45.63.26.69"
}
{{< /highlight >}}
</div>
    <div role="tabpanel" class="tab-pane" id="ip-jsonp">{{% md %}}
{{< highlight javascript >}}
geoip({
  "ip": "45.63.26.69"
})
{{< /highlight >}}
{{% /md %}}</div>
  </div>
</div>

## IP - Country
---

This endpoint returns information about an IPs country. You can specify a custom callback for the JSONP endpoint along with requesting information about multiple IPs using the IP arg.

All URIs support looking up a specific IP address by adding it as part of the URI. The JSON and text URIs have the additional option to supply multiple IPs (IPv6 or IPv4) comma separated in the IP arg. 

### URIs

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>URI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Text</th>
        <td>{{% md %}}`https://get.geojs.io/v1/ip/country(?ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/country/{ip address}`{{% /md %}}</td>
      </tr>
      <tr>
        <th>JSON</th>
        <td>{{% md %}}`https://get.geojs.io/v1/ip/country.json(?ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/country/{ip address}.json`{{% /md %}}</td>
      </tr>
      <tr>
        <th>JSONP</th>
        <td>{{% md %}}`https://get.geojs.io/v1/ip/country.js(?callback=custom&ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/country/{ip address}.js(?callback=custom)`{{% /md %}}</td>
      </tr>
    </tbody>
  </table>
</div>

### Query Parameters

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Paramater</th>
        <th>Default</th>
        <th>Description</th>
        <th>Endpoint</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{% md %}}`ip`{{% /md %}}</td>
        <td>None</td>
        <td>Allows searching of multiple IPs at once</td>
        <td>All</td>
      </tr>
      <tr>
        <td>{{% md %}}`callback`{{% /md %}}</td>
        <td>{{% md %}}`countryip`{{% /md %}}</td>
        <td>JSONP callback</td>
        <td>{{% md %}}`/v1/ip/country.js`{{% /md %}}</td>
      </tr>
    </tbody>
  </table>
</div>

### Example Responses

<div>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#country-example-text" aria-controls="country-example-text" role="tab" data-toggle="tab">Text</a></li>
    <li role="presentation"><a href="#country-example-json" aria-controls="country-example-json" role="tab" data-toggle="tab">JSON</a></li>
    <li role="presentation"><a href="#country-example-jsonp" aria-controls="country-example-jsonp" role="tab" data-toggle="tab">JSONP</a></li>
  </ul>
  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="country-example-text">
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
    <div role="tabpanel" class="tab-pane" id="country-example-json">
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
    <div role="tabpanel" class="tab-pane" id="country-example-jsonp">{{% md %}}
```javascript
countryip({
  "ip": "8.8.8.8",
  "country": "US",
  "name": "United States",
  "country_3": "USA"
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
{{% /md %}}
    </div>
  </div>
</div>

## IP - Country Full
---

This endpoint only has a text version available as it is the exact same as the above, however it returns the full country name as opposed to the two letter code.

### URIs

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>URI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Text</th>
        <td>{{% md %}}`https://get.geojs.io/v1/ip/country/full(?ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/country/full/{ip address}`{{% /md %}}</td>
      </tr>
    </tbody>
  </table>
</div>

### Query Parameters

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Paramater</th>
        <th>Default</th>
        <th>Description</th>
        <th>Endpoint</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{% md %}}`ip`{{% /md %}}</td>
        <td>None</td>
        <td>Allows searching of multiple IPs at once</td>
        <td>{{% md %}}`/v1/ip/country/full`{{% /md %}}</td>
      </tr>
    </tbody>
  </table>
</div>

### Example Responses

<div>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#country-full-example-text" aria-controls="country-full-example-text" role="tab" data-toggle="tab">Text</a></li>
    <li role="presentation"><a href="#country-full-example-multi" aria-controls="country-full-example-multi" role="tab" data-toggle="tab">Text Multiple</a></li>
  </ul>
  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="country-full-example-text">
  {{% md %}}
  ```text
Australia
  ```
  {{% /md %}}
    </div>
    <div role="tabpanel" class="tab-pane" id="country-full-example-multi">
{{% md %}}
```text
8.8.8.8: United States
198.35.26.96: United States
```
{{% /md %}}
    </div>
  </div>
</div>

## IP - Geo
---

Unlike other endpoints the Geo endpoint doesn't have a text based version, it simply contains too much information to be useful as plain text. If people think otherwise, please reach out and let me know.

This endpoint mainly contains geographical information about an IP, such as its latitude and longitude, along with the owning (ASN) organisiation.

### URIs

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>URI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>JSON</th>
        <td>{{% md %}}`https://get.geojs.io/v1/ip/geo.json(?ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/geo/{ip address}.json`{{% /md %}}</td>
      </tr>
      <tr>
        <th>JSONP</th>
        <td>{{% md %}}`https://get.geojs.io/v1/ip/geo.js(?callback=custom&ip=8.8.8.8,198.35.26.96)` `https://get.geojs.io/v1/ip/geo/{ip address}.js(?callback=custom)`{{% /md %}}</td>
      </tr>
    </tbody>
  </table>
</div>

### Query Parameters

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Paramater</th>
        <th>Default</th>
        <th>Description</th>
        <th>Endpoint</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{% md %}}`ip`{{% /md %}}</td>
        <td>None</td>
        <td>Allows searching of multiple IPs at once</td>
        <td>All</td>
      </tr>
      <tr>
        <td>{{% md %}}`callback`{{% /md %}}</td>
        <td>{{% md %}}`geoip`{{% /md %}}</td>
        <td>JSONP callback</td>
        <td>{{% md %}}`/v1/ip/geo.js`{{% /md %}}</td>
      </tr>
    </tbody>
  </table>
</div>

### Example Responses

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

# DNS
---

GeoJS' second endpoint allows you to query PTR records for IPs.

## DNS - PTR
---

This endpoint returns the requester IP's PTR record. It is not currently possible to lookup multiple PTRs at once.

### URIs

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>URI</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Text</th>
        <td>{{% md %}}`https://get.geojs.io/v1/dns/ptr`  
            `https://get.geojs.io/v1/dns/ptr/{ip address}`
            {{% /md %}}
        </td>
      </tr>
      <tr>
        <th>JSON</th>
        <td>{{% md %}}`https://get.geojs.io/v1/dns/ptr.json`  
            `https://get.geojs.io/v1/dns/ptr/{ip address}.json`
            {{% /md %}}
        </td>
      </tr>
      <tr>
        <th>JSONP</th>
        <td>{{% md %}}`https://get.geojs.io/v1/dns/ptr.js(?callback=custom)`
          `https://get.geojs.io/v1/dns/ptr/{ip address}.js(?callback=custom)`
          {{% /md %}}
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Query Parameters

<div class="table-responsive">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Paramater</th>
        <th>Default</th>
        <th>Description</th>
        <th>Endpoint</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{% md %}}`callback`{{% /md %}}</td>
        <td>{{% md %}}`ptr`{{% /md %}}</td>
        <td>JSONP callback</td>
        <td>{{% md %}}`/v1/dns/ptr.js`{{% /md %}}</td>
      </tr>
    </tbody>
  </table>
</div>

### Example Responses

<div>
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#dns-ptr-text" aria-controls="dns-ptr-text" role="tab" data-toggle="tab">Text</a></li>
    <li role="presentation"><a href="#dns-ptr-json" aria-controls="dns-ptr-json" role="tab" data-toggle="tab">JSON</a></li>
    <li role="presentation"><a href="#dns-ptr-jsonp" aria-controls="dns-ptr-jsonp" role="tab" data-toggle="tab">JSONP</a></li>
  </ul>
  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="dns-ptr-text">{{% md %}}

  ```text
google-public-dns-a.google.com
  ```
  {{% /md %}}</div>
    <div role="tabpanel" class="tab-pane" id="dns-ptr-json">
{{< highlight json >}}
{
  "ptr": "google-public-dns-a.google.com"
}
{{< /highlight >}}
</div>
    <div role="tabpanel" class="tab-pane" id="dns-ptr-jsonp">{{% md %}}
{{< highlight javascript >}}
ptr({
  "ptr": "google-public-dns-a.google.com"
})
{{< /highlight >}}
{{% /md %}}</div>
  </div>
</div>
