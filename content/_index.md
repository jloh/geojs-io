---
title: GeoJS
weight: 10
description: "REST/JSON/JSONP GeoIP API"
---

<p>Checkout the text below, its generated on the fly from GeoJS itself.</p>

<blockquote><p>Hello <span id="user_ip"></span>. The IP you're behind has a country code of <span id="user_countrycode"></span>.</p></blockquote>

<p>All that from this little snippet</p>

<p><div class="text-left">
{{% md %}}
```html
Hello <span id="user_ip"></span>. The IP you're behind has a country code of <span id="user_countrycode"></span>.

<script type="application/javascript">
    function geoip(json){
        var userip      = document.getElementById("user_ip");
        var countrycode = document.getElementById("user_countrycode");
        userip.textContent      = json.ip;
        countrycode.textContent = json.country_code;
    }
</script>
<script src="https://get.geojs.io/v1/ip/geo.js"></script>
```
{{% /md %}}
</div></p>
