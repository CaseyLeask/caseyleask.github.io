---
layout: post
title:  "Equal Width Elements in a List without Javascript"
date:   2013-08-11 19:42:51
categories: sass css
---

In this post I'm going to cover the various different methods I've found to create a list that fills a width evenly.

I'll be using [sass][sass], because I love it, and I'm going to lean on it to do some of the heavy lifting.
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

While we sort that out, I want to add some margins.

{% highlight scss %}
$mod: 'partial--content';
$content-width-px: 628px;
$content-height-px: 100px;
$number-of-items: 5;
$content-item-gutter-px: 20px;
$content-item-width-px: (floor($content-width-px -
                               ($content-item-gutter-px *
                                ($number-of-items - 1))) /
                               $number-of-items);

.#{$mod} {
  width: $content-width-px + $content-item-gutter-px;
  height: $content-height-px;
  padding-top: ($content-item-gutter-px / 2);
  padding-bottom: ($content-item-gutter-px / 2);
  margin-right: -($content-item-gutter-px / 2);
  margin-left: -($content-item-gutter-px / 2);
  padding: 0;
  background: navajowhite;
  list-style-type: none;
}

.#{$mod}__item {
  float: left;
  width: $content-item-width-px;
  height: $content-height-px - $content-item-gutter-px;
  margin: $content-item-gutter-px / 2;
  background: lightsteelblue;
}
{% endhighlight %}

<ul class="partial--example3">
  <li class="partial--example3__item">Lorem Ipsum</li>
  <li class="partial--example3__item">Lorem Ipsum</li>
  <li class="partial--example3__item">Lorem Ipsum</li>
  <li class="partial--example3__item">Lorem Ipsum</li>
  <li class="partial--example3__item">Lorem Ipsum</li>
</ul>

If you're like me, you flinched at the misaligned element at the end of that list.

We set a gutter width between items.
We then removed the space between the items from the width calculations and divide the remaining width by the items to get our element width.

The gutters that technically exist at the beginning and end of the list we offset by using negative margins on the ul element.

Now we've reached the part where things get tricky.

We have 3px of extra space between five items, which I want to be handled programmatically.
Here are the two most straightforward solutions, both of which use :last-child.

First; the calculation of the remainder.

{% highlight scss %}
$content-item-width-remainder-px: $content-width-px -
                                  $content-item-width-px * $number-of-items -
                                  ($content-item-gutter-px * ($number-of-items - 1));
{% endhighlight %}

The first method:

{% highlight scss %}
.#{$mod}__item:last-child {
  width: $content-item-width-px + $content-item-width-remainder-px;
}
{% endhighlight %}

We increase the width of the last item;

Second:

{% highlight scss %}
.#{$mod}__item:last-child {
  margin-left: ($content-item-gutter-px / 2) + $content-item-width-remainder-px;
}
{% endhighlight %}

We increase the gap between the second last and the last item.

I'd recommend the first method for lists of one row, and the second for where images dominate the content.

[sass]: http://sass-lang.com/
[smacss]: http://smacss.com/
[sub-pixel-problems]: http://ejohn.org/blog/sub-pixel-problems-in-css/
