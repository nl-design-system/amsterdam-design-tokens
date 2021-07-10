# Design Tokens for Amsterdam Design System

**This project is not endorsed by the Municipality of Amsterdam.**

Applying design elements from this project is strictly prohibited for organisations that are not part of the Municipality of Amsterdam.

This project is part of a community iniative to use NL Design System components for projects that need to adhere to the Amsterdam Design System. Teams from the central Municipality of Amsterdam, as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## Getting started

Include the Design Token CSS variables:

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css"
/>
```

Combine it with the latest Web Components from the NL Design System community, for example:

```html
<script
  src="https://unpkg.com/@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js"
  type="module"
></script>
```

Then you can go ahead and see the result:

```html
<utrecht-html-content>
  <h1>Page styled with NL Design System</h1>
</utrecht-html-content>
```

## License

This project is free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md).

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).
