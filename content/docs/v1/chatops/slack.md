---
description: "Slack app setup and usage"
title: Slack
draft: false
homepage: false
Aliases:
  - "/docs/chatops/slack/"
---

The GeoJS Slack app allows you to lookup geographical information about IPs from the comfort of Slack.

## Installation

Slack make installation super easy. Either [click here](https://slack.com/oauth/authorize?&client_id=159217363895.234425956290&scope=commands), use the button below or [search their Marketplace](https://jloh.slack.com/apps/search?q=GeoJS).

<a href="https://slack.com/oauth/authorize?&client_id=159217363895.234425956290&scope=commands"><img alt="Add to Slack" class="slack-icon" src="/img/add_to_slack.png" srcset="/img/add_to_slack.png 1x, /img/add_to_slack@2x.png 2x" /></a>

## Usage

We currently only have one command, our slash command, which you can use by typing `/geojs [ip in here]`. For example `/geojs 8.8.8.8`.

If you would like to show the result to the whole channel type `display` after the IP you're trying to lookup, eg `/geojs 8.8.8.8 display`.

<figure class="image">
  <img src="/img/chatops/slack_app_example.png">
</figure>

## Support

Should you run into any issues with the Slack app, you can reach out via the [contact page](/contact/) or [Twitter](https://jloh.pub/l/twitter).

This information is also displayed using `/geojs help` inside Slack.
