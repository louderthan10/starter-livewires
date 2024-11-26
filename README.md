# Craft Twig starter
This is a basic blog starter project for creating Craft CMS using the native Twig templating language. It's a simple install that requires no database dump and no npm and only uses one first-party plugin (CKeditor).

## Features
* A single for globals
* A home page single
* A blog single with articles channel and category structure
* A guestbook single with guestbook entries channel
* A pages structure for additional pages and subpages
* A Cloud-ready assets volume

The Entries sidebar has also been configured to make these pages and sections easier to find for this setup.

## Installation

1. Clone this repository and move into the folder:

   ```bash
   git clone https://github.com/craftcms/starter-twig.git
   cd starter-twig/
   ```

2. Start DDEV:

   ```bash
   ddev start
   ```

3. Install dependencies:

   ```bash
   ddev composer install
   ```

4. Run the Craft setup wizard:

   ```bash
   ddev craft install
   ```

Congratulations—Craft has been installed! You can explore the control panel by opening `https://starter-twig.ddev.site/admin` in your browser, or continue reading to import existing content.

> [!NOTE]  
> If you want to use a different subdomain/prefix for this DDEV project, update the `name` key in `.ddev/config.yaml`.

## Getting Help

If you have any questions or suggestions, you can always reach us at <support@craftcms.com> or [post a GitHub issue](https://github.com/craftcms/starter-wordpress/issues).

Thanks for trying Craft!

:lemon:
