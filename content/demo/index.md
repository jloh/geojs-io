---
date: 2016-04-23T15:21:22+02:00
title: Demo
weight: 20
demo: true
---

By including our GeoJS file at the bottom of this page

```html
<script src="https://get.geojs.io/v1/ip/geo.js"></script>
```

And with some simple HTML and JavaScript:

```html
Hey <span id="user_ip"></span>. The IP you&rsquo;re behind has a country code of <span id="user_countrycode"></span>!

<script type="application/javascript">
    function geoip(json){
        //document.write("Hey ", json.ip, "! The IP you're behind has a country code of ", json.country_code,".");
        var userip      = document.getElementById("user_ip");
        var countrycode = document.getElementById("user_countrycode");
        userip.textContent      = json.ip;
        countrycode.textContent = json.country_code;
    }
</script>

```

We end up with this!

> Hey <span id="user_ip"></span>. The IP you're behind has a country code of <span id="user_countrycode"></span>!

<script type="application/javascript">
    function geoip(json){
        //document.write("Hey ", json.ip, "! The IP you're behind has a country code of ", json.country_code,".");
        var userip      = document.getElementById("user_ip");
        var countrycode = document.getElementById("user_countrycode");
        userip.textContent      = json.ip;
        countrycode.textContent = json.country_code;
    }
</script>
