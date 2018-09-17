---
home: true
heroImage: /geojs_logo.png
actionText: Get Started →
actionLink: /guide/
footer: MIT Licensed | Copyright © 2017-present James Loh
---

<div style="text-align: center">
  <DO/>
</div>

<div class="features">
  <div class="feature">
    <h2>Highly available</h2>
    <p>Highly available across multiple servers GeoJS is geo routed for fast response times.</p>
  </div>
  <div class="feature">
    <h2>Open & Multiformat</h2>
    <p>GeoJS has full CORS support and no rate limits.</p>
  </div>
  <div class="feature">
    <h2>ChatOps Integration</h2>
    <p>Lookup IP information from the comfort of your chat client via our <a href="/chatops/" title="ChatOps integration">ChatOps integration</a>.</p>
  </div>
</div>

### As Easy as 1, 2, 3

``` bash
# Want your IP? Easy.
$ curl -s https://get.geojs.io/v2/ip
8.8.8.8

# What about country information?
$ curl -s https://get.geojs.io/v2/ip/country && curl -s https://get.geojs.io/v2/ip/country/full
US
United States

# Lets try JSON
$ curl -s https://get.geojs.io/v2/ip/country.json | jq .
{
  "country": "US",
  "ip": "8.8.8.8",
  "request_ip": "1.1.1.1",
  "name": "United States"
}
```

<ClientOnly>
  <mailing-list actionUrl="https://jloh.us14.list-manage.com/subscribe/post?u=9c6287d73fb594aeb6a7a28ac&amp;id=02218ac43f" token="b_9c6287d73fb594aeb6a7a28ac_02218ac43f" successMessage="Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you."/>
</ClientOnly>
