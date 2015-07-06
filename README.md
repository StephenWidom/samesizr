## SAMESIZR
A simple jQuery plugin to make all matched elements as tall as the tallest one

Before samesizr:
![Before samesizr](http://stephenwidom.com/images/before-samesizr.png)

After samesizr:
![After samesizr](http://stephenwidom.com/images/after-samesizr.png)

## USE:
```js
$(window).on("load resize",function(){
	$('.quicklink').samesizr();
});
```

## OPTIONS:
### mobile:   767 
The browser width below which samesizr sets matched elements' height to 'auto'

[See it in action](http://stephenwidom.com/projects/samesizr)

*Developed by Stephen Widom - http://stephenwidom.com*