---
description: "Returns the requesting IP in multiple formats."
title: IP
draft: false
weight: 500
features:
  Text: Yes
  JSON: Yes
  JSONP: Yes
---

This endpoint returns the requesters IP. You can specify a custom callback for the JSONP endpoint. You cannot lookup multiple IPs on this endpoint.

## URIs

{{% table %}}
| Type  | URI |
| ----- | --- |
| Plain text | `https://get.geojs.io/v1/ip`      |
| JSON       | `https://get.geojs.io/v1/ip.json` |
| JSONP      | `https://get.geojs.io/v1/ip.js`   |

{{% /table %}}

## Query Parameters

{{% table %}}

| Paramater  | Default | Description                              | Endpoint        |
| ---------- | ------- | ---------------------------------------- | --------------- |
| `callback` | `geoip` | JSONP callback                           | `/v1/ip.js` |

{{% /table %}}

## Properties

{{% table %}}

| Property | Type    | Description   | Example     |
| ---------| ------- | ------------- | ----------- |
| `ip`     | String  | Requested IP  | `8.8.8.8`   |

{{% /table %}}

## Examples

### Plain text

```text
8.8.8.8
```

### JSON

```json
{
  "ip": "8.8.8.8"
}
```

### JSONP

```javascript
geoip({
  "ip": "202.168.51.151"
})
```
