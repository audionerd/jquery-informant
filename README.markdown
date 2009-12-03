jquery.informant
================

A jQuery port of [Indie Lab's Informant for Prototype.js](http://github.com/ihearithurts/informant/)

Bonus features in the jQuery plugin version:

* easily include/exclude forms based on selector, e.g.:

> `$('form:not([class~=uninformed])').informant();`

* easily adjust the alert message, e.g.:

> `$('form').informant({ message: "O RLY?" }); `

THE CAVEAT SLIDE
----------------
* It was a quick hack.
* Never tested in IE. Tested only in Firefox and Safari for Mac. 
* Briefly tested with multiple forms, but not thoroughly.
* Never used in production