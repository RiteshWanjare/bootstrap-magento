# Bootstrap Magento
### A Twitter Bootstrap 3.1, HTML5, Magento 1.8 Template

---

### Git

Firstly, clone our repo down to a folder:

```bash
git clone https://github.com/RiteshWanjare/bootstrap-magento.git
```

----

### Build a New "Child" Theme under the `bootstrap-magento` Package

To begin, you should create a new folder with your new theme name (e.g. `mytheme`) under `app/design/frontend/bootstrap-magento/mytheme` and `skin/frontend/bootstrap-magento/mytheme`.

From here, you'll want to install the site and enable the theme through Magento's design configuration. Firstly, install your site like any other Magento installation. There's plenty of guides out there on that. Then, visit `System > Configuration > Design` and change the package from `default` to `bootstrap-magento`. Additionally, change the translations, templates, skin, layout and default to  whatever you named your theme (such as `mytheme`).

----

The process we like to stick with when developing is have our dependencies managed for us, and use a task runner to compile them into CSS / JavaScript files which are served to the user. You don't have to do this, however it's a great way to save time down the track, even if there's a bit of a learning curve to begin with.

### Asset Dependency Management and Automatic Compilation

The first thing to do this is install [Bower](http://bower.io) and [gulp.js](http://gulpjs.com) (both are NodeJS applications).

To install Bower dependencies (not included in the theme becuase they're simply not required for everybody), you'll need to use Bower.

```bash
cd skin/frontend/mytheme/default
bower install
```

Once you have gulp.js installed globally, open up your terminal and change directory into your theme and execute `gulp`:

```bash
cd skin/frontend/mytheme/default
npm install
gulp
```

That's it. From now on, your changes you make to LESS files will automatically compile into CSS, and the same with JavaScript. Refresh your page to see changes!

### Adding New Bootstrap Components

This theme does not ship with all Bootstrap CSS and JavaScript. The reason is, most sites don't **need** all the components and therefore you're bloating a site by providing more than required. We're including only the files required to get this bootstrap-magento theme running.

To add new Bootstrap styles, simply open up `less/style.less`. From there, you may directly import Bootstrap files, or your own files which in turn import Bootstrap's. For example, add the following into `less/style.less`:

```css
@import "media.less"; /* Relative to less/style.less */
```

Then, in `less/media.less`:

```css
/* In less/media.less */
@import "../bower_components/bootstrap/less/media.less"; /* Relative to less/media.less */

.media {
    /* Your custom overrides go below the call to Bootstrap's styles */
}
```

> You may choose to import more than just Bootstrap's LESS / CSS files. Feel free to import anything this way, it's good practice.

To add new JavaScript files, open up `gulpfile.js`. gulp.js is seperated into a number of tasks. One of them is the `js` task. Inside it, you'll see a bunch of JavaScript files listed out. If you require more Bootstrap files (or indeed any JavaScript files), simply add them to the list.

```javascript
// ...
.src([
    'bower_components/jquery/jquery.js',
    'bower_components/bootstrap/js/transition.js',
    'bower_components/bootstrap/js/collapse.js',
    'bower_components/bootstrap/js/carousel.js',
    'bower_components/bootstrap/js/dropdown.js',
    'bower_components/bootstrap/js/modal.js',
    // Add new files here
    'js/script.js'
])
// ...
```

### FAQs

1. **Notify isn't working?** - check you are not running `gulp` on a headless (command-line only) server, such as a remote webserver or Vagrant box. Windows may need modification of your `gulpfile.js` and `package.json` files to work properly.

### Manual Development (No gulp.js)

Feel free to edit any of the files under `dist/css` and `dist/js` if you'd like to manually develop your site. There's no harm in doing this, if you don't want to use gulp.js in the future. Keep in mind that, if you decide to compile with gulp.js that you will lose your manual changes.


### Grunt Command 

1. skin\frontend\bootstrap-magento\default>grunt watch
