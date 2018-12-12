---
description: "Returns PTR (pointer record) information about an IP"
title: PTR
draft: false
features:
  Text: Yes
  JSON: Yes
  JSONP: Yes
---

This endpoint is unique since it doesn't return geographical information about an IP but [DNS pointer record](https://en.wikipedia.org/wiki/Reverse_DNS_lookup) information. This is mostly used in the [GeoJS App](https://app.geojs.io/) but is documented here for other people to use.

**Note:** You _cannot_ lookup multiple PTR records at once with this endpoint, the `ip` parameter only lets you look up a single record, not a comma separated list.

## URIs

{{% table %}}
| Type  | URI |
| ----- | --- |
| Plain text | `https://get.geojs.io/v1/dns/ptr` <br> `https://get.geojs.io/v1/dns/ptr/{ip address}` |
| JSON  | `https://get.geojs.io/v1/dns/ptr.json` <br> `https://get.geojs.io/v1/ip/geo/{ip address}.json` |
| JSONP | `https://get.geojs.io/v1/dns/ptr.js` <br> `https://get.geojs.io/v1/ip/geo/{ip address}.js` |

{{% /table %}}

## Query Parameters

{{% table %}}

| Paramater  | Default | Description                        | Endpoint        |
| ---------- | ------- | ---------------------------------- | --------------- |
| `ip`       | None    | Allows searching of a specific PTR | All             |
| `callback` | `ptr`   | JSONP callback                     | `/v1/ip/geo.js` |

{{% /table %}}

## Examples

### Plain text

```text
google-public-dns-a.google.com
```

### JSON

```json
{
  "ptr": "google-public-dns-a.google.com"
}
```

### JSONP

```javascript
ptr({
  "ptr": "google-public-dns-a.google.com"
})
```
