# MapConductor Icons for Japan — React

Japan-specific map glyphs for MapConductor React. This pack is selected explicitly; it never changes because of browser locale.

## Installation

The first npm release is in preparation. Its install command will be:

```sh
npm install @mapconductor/react-icons @mapconductor/react-icons-jp
```

To try the source now, clone `react-icons` at branch `0.2.0-2` and this repository beside it, then run `npm install && npm run build` in both directories. Install the built directories into your app with `npm install /path/to/react-icons /path/to/react-icons-jp`.

## Quick start

```ts
import { PinGlyphIcon } from '@mapconductor/react-icons';
import { JapanMapIcons } from '@mapconductor/react-icons-jp';

const postOfficeMarker = new PinGlyphIcon(JapanMapIcons.postOffice, {
  fillColor: '#e53935',
  glyphColor: '#ffffff',
});

const bitmapIcon = postOfficeMarker.toBitmapIcon();
```

Use `JapanMapIcons.policeBox` and `JapanMapIcons.shrine` the same way. Glyph IDs and shapes match the Android and iOS packages.

<!-- BEGIN GENERATED ICON CATALOG -->
## Included glyphs

Glyph IDs are stable across Android, iOS, and React.

| Preview | API | Stable ID | Description |
|---|---|---|---|
| <img src="docs/icons/post_office.svg" width="40" height="40" alt="Japanese post office map symbol"> | `JapanMapIcons.postOffice` | `jp.post_office` | Japanese post office map symbol |
| <img src="docs/icons/police_box.svg" width="40" height="40" alt="Japanese koban, shown as crossed police batons"> | `JapanMapIcons.policeBox` | `jp.police_box` | Japanese koban, shown as crossed police batons |
| <img src="docs/icons/shrine.svg" width="40" height="40" alt="Shinto shrine"> | `JapanMapIcons.shrine` | `jp.shrine` | Shinto shrine |
<!-- END GENERATED ICON CATALOG -->
