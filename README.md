# Tabsy CSS #
## Simple tabs toggler component written in pure CSS with no dependencies ##


### Install ###

With npm:
```sh
npm install tabsy-css
```

With Bower:
```sh
bower install tabsy-css
```

### Usage ###

Include css:
```sh
<link href='tabsy.css' rel='stylesheet' type='text/css'>
```

Initial required structure, place any content you want within the tabs:
```sh
<div class="tabsy">
    <input type="radio" id="tab1" name="tab" checked>
    <label class="tabButton" for="tab1">Tab One</label>
    <div class="tab">
    	<div class="content">
    		Content One
    	</div>
    </div>
    <input type="radio" id="tab2" name="tab" checked>
    <label class="tabButton" for="tab2">Tab Two</label>
    <div class="tab">
    	<div class="content">
    		Content Two
    	</div>
    </div>
    <input type="radio" id="tab3" name="tab" checked>
    <label class="tabButton" for="tab3">Tab Three</label>
    <div class="tab">
    	<div class="content">
    		Content Three
    	</div>
    </div>
</div>
```

### Demo ###

Demo available [here](http://www.rvdizajn.com/tabsy-css/).

### Options ###

Default css settings are placed in `library/_variables.scss`:

### Note ###

Based on Flexbox feature. Where not supported simple fallback is applied.

### License  ###

Tabsy CSS is licensed under the [MIT license](http://opensource.org/licenses/MIT).
