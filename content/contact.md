---
title: Contact
draft: false
homepage: false
no_content: true
menu:
  main:
    title: Contact
    weight: 250
---

I can be contacted at `contact @ geojs . io`, through the [public Gitter room](https://gitter.im/jloh/geojs) or using the contact form!

<div class="tags has-addons pt-1">
  <a href="https://gitter.im/jloh/geojs" title="Chat on the GeoJS Gitter room" class="tags has-addons">
    <span class="tag is-dark">chat</span>
    <span class="tag is-primary">on gitter</span>
  </a>
</div>

<form class="pb-2" name="contact" action="thank-you" data-netlify="true">
  <div class="field">
    <label class="label" for="name">Name</label>
    <div class="control">
      <input type="text" class="input" id="name" placeholder="Name" name="Name" required>
    </div>
  </div>
  <div class="field">
    <label class="label" for="email">Email address</label>
    <div class="control">
      <input type="email" class="input" id="email" placeholder="Email" name="Email" required>
    </div>
  </div>
  <div class="field">
    <label class="label" for="message">Message</label>
    <div class="control">
      <textarea class="textarea" rows="3" name="Message" id="message" placeholder="Message"></textarea>
    </div>
  </div>
  <div class="field">
    <div netlify-recaptcha></div>
  </div>
  <div class="field">
    <div class="field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="field-body">
      <div class="field">
        <div class="control">
          <button class="button is-primary">
            Send message
          </button>
        </div>
      </div>
    </div>
  </div>
</form>
