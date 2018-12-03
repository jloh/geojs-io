---
title: GeoJS
description: "REST/JSON/JSONP GeoIP API"
---

<p>Checkout the text below, its generated on the fly by GeoJS itself.</p>

<blockquote><p>Hello <span id="user_ip"><i class="fa fa-cog fa-spin"></i></span>. The IP you're behind has a country code of <span id="user_countrycode"><i class="fa fa-cog fa-spin"></i></span>.</p></blockquote>

<p>All that from this little snippet</p>

<p><div class="text-left">
{{% md %}}
```html
Hello <span id="user_ip"><i class="fa fa-cog fa-spin"></i></span>. The IP you're behind has a country code of <span id="user_countrycode"><i class="fa fa-cog fa-spin"></i></span>.

<script type="application/javascript">
    function geoip(json){
        var userip      = document.getElementById("user_ip");
        var countrycode = document.getElementById("user_countrycode");
        userip.textContent      = json.ip;
        countrycode.textContent = json.country_code;
    }
</script>
<script async src="https://get.geojs.io/v1/ip/geo.js"></script>
```
{{% /md %}}
</div></p>
