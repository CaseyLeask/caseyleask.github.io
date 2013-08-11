---
layout: post
title:  "Equal Width Elements in a List without Javascript"
date:   2013-08-11 19:42:51
categories: sass css
---

In this post I'm going to cover the various different methods I've found to create a list that fills a width evenly.

I'll be using [sass][sass], because I love it, and some of these methods lean on it to do the heavy lifting.
Also, at least in this version I'll be writing the markup in a format that vagely resembles [smacss][smacss].

Let's start with fixed width, fixed height elements with a specified number of items;

{% highlight scss %}
$modifier: 'partial--content';
$content-width-px: 628px;
$content-height-px: 100px;
$content-items: 4;
$content-item-width-px: $content-width-px / $content-height-px;

.#{$modifier} {
  width: $content-width;
  height: $content-height;
  margin: 0;
  padding: 0;
  background: navajowhite;
  list-style-type: none;
}

.#{$modifier}__item {
  float: left;
  width: $content-item-width-px;
  height: $content-height-px;
}
{% endhighlight %}

<ul class="partial--example1">
  <li class="partial--example1__item">Lorem Ipsum</li>
  <li class="partial--example1__item">Lorem Ipsum</li>
  <li class="partial--example1__item">Lorem Ipsum</li>
  <li class="partial--example1__item">Lorem Ipsum</li>
</ul>

This example is very contrived and convenient.
Let's add another item and see what happens!

{% highlight scss %}
$modifier: 'partial--content';
$content-width-px: 628px;
$content-height-px: 100px;
$content-items: 5;
$content-item-width-px: $content-width-px / $content-height-px;

.#{$modifier} {
  width: $content-width;
  height: $content-height;
  margin: 0;
  padding: 0;
  background: navajowhite;
  list-style-type: none;
}

.#{$modifier}__item {
  float: left;
  width: $content-item-width-px;
  height: $content-height-px;
}
{% endhighlight %}

<ul class="partial--example2">
  <li class="partial--example2__item">Lorem Ipsum</li>
  <li class="partial--example2__item">Lorem Ipsum</li>
  <li class="partial--example2__item">Lorem Ipsum</li>
  <li class="partial--example2__item">Lorem Ipsum</li>
  <li class="partial--example2__item">Lorem Ipsum</li>
</ul>

The rendered css will look like;

{% highlight css %}
.partial--content {
  width: 628px;
  height: 100px;
  margin: 0;
  padding: 0;
  background: navajowhite;
  list-style-type: none; }

.partial--content__item {
  float: left;
  width: 125.6px;
  height: 100px;
  background: lightsteelblue; }
{% endhighlight %}

Depending on the browser you're using, you might see that it's not working well.
Fractional pixels have [problems][sub-pixel-problems].
On my computer, this works in Chrome & Firefox, but not Opera or Safari.
That's definitely a deal breaker.

[sass]: http://sass-lang.com/
[smacss]: http://smacss.com/
[sub-pixel-problems]: http://ejohn.org/blog/sub-pixel-problems-in-css/
