#Animate.less
*Just-add-water CSS animation*

based on [animate.css](https://github.com/daneden/animate.css).

`animate.less` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

##Usage
To use animate.less in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animate` to an element, along with any of the animation names. That's it! You've got a CSS animate element. Super!

You can do a whole bunch of other stuff with animate.css when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:

```javascript
$('#yourElement').addClass('animate bounceOutLeft');
```

You can change the duration of your animations, add a delay or change the number of times that it plays!

```less
#yourElement {
    .animation-duration(3s);
    .animation-delay(2s);
    .animation-iteration-count(infinite);
}
```

*Note: Safari in Mountion Lion (OS 10.8) has a display glitch with the Flippers. They may not appear at all until the animation is completed, or the page may have other artifacting. One fix is to add overflow: hidden to the parent div.*

##License
Animate.less is licensed under the MIT license. (http://opensource.org/licenses/MIT)

##Learn more
You can learn more about animate.css over at http://daneden.me/animate
You can also get in touch via email (axel+animate@etcheverry.biz) or twitter (@euskadi31) if you need any help or have any issues.

##Cheat Sheet

####Attention seekers:
flash
bounce
shake
tada
swing
wobble
wiggle
pulse

####Flippers (currently Webkit, Firefox, &amp; IE10 only):
flip
flipInX
flipOutX
flipInY
flipOutY

####Fading entrances:
fadeIn
fadeInUp
fadeInDown
fadeInLeft
fadeInRight
fadeInUpBig
fadeInDownBig
fadeInLeftBig
fadeInRightBig

####Fading exits:
fadeOut
fadeOutUp
fadeOutDown
fadeOutLeft
fadeOutRight
fadeOutUpBig
fadeOutDownBig
fadeOutLeftBig
fadeOutRightBig

####Bouncing entrances:
bounceIn
bounceInDown
bounceInUp
bounceInLeft
bounceInRight

####Bouncing exits:
bounceOut
bounceOutDown
bounceOutUp
bounceOutLeft
bounceOutRight

####Rotating entrances:
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight

####Rotating exits:
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight

####Lightspeed:
lightSpeedIn
lightSpeedOut

####Specials:
hinge
rollIn
rollOut

## Other Resources

- There's a [Ruby gem](https://github.com/camelmasa/animate-rails) available for Animate.css
- The original [animate.css](https://github.com/daneden/animate.css) project