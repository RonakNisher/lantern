jQuery.webshims.register("form-message",function(f,c,e,i,j,g){var a=c.validityMessages,e=g.overrideMessages||g.customMessages?["customValidationMessage"]:[];a.en=a.en||a["en-US"]||{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}};["select","radio"].forEach(function(b){a.en.valueMissing[b]="Please select an option."});["date","time","datetime-local"].forEach(function(b){a.en.rangeUnderflow[b]="Value must be at or after {%min}."});["date","time","datetime-local"].forEach(function(b){a.en.rangeOverflow[b]=
"Value must be at or before {%max}."});a["en-US"]=a["en-US"]||a.en;a[""]=a[""]||a["en-US"];a.de=a.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}};["select","radio"].forEach(function(b){a.de.valueMissing[b]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(b){a.de.rangeUnderflow[b]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(b){a.de.rangeOverflow[b]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var h=
a[""];c.createValidationMessage=function(b,a){var d=h[a];d&&"string"!==typeof d&&(d=d[f.prop(b,"type")]||d[(b.nodeName||"").toLowerCase()]||d.defaultMessage);d&&"value,min,max,title,maxlength,label".split(",").forEach(function(a){if(-1!==d.indexOf("{%"+a)){var c=("label"==a?f.trim(f('label[for="'+b.id+'"]',b.form).text()).replace(/\*$|:$/,""):f.attr(b,a))||"";d=d.replace("{%"+a+"}",c);"value"==a&&(d=d.replace("{%valueLen}",c.length))}});return d||""};(c.bugs.validationMessage||!Modernizr.formvalidation||
c.bugs.bustedValidity)&&e.push("validationMessage");c.activeLang({langObj:a,module:"form-core",callback:function(a){h=a}});Modernizr.input.list&&!(f("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&c.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var a=this.options||[];if(!a.length){var c=f("select",this);if(c[0]&&c[0].options&&c[0].options.length)a=c[0].options}return a}}});e.forEach(function(a){c.defineNodeNamesProperty(["fieldset",
"output","button"],a,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(e){var d=c.defineNodeNameProperty(e,a,{prop:{get:function(){var a=this,b="";if(!f.prop(a,"willValidate"))return b;var e=f.prop(a,"validity")||{valid:1};if(e.valid||(b=c.getContentValidationMessage(a,e)))return b;if(e.customError&&a.nodeName&&(b=Modernizr.formvalidation&&!c.bugs.bustedValidity&&d.prop._supget?d.prop._supget.call(a):c.data(a,"customvalidationMessage")))return b;f.each(e,function(d,e){if("valid"!=
d&&e&&(b=c.createValidationMessage(a,d)))return!1});return b||""},writeable:!1}})})})});