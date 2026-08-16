const assert = require('node:assert/strict');
const test = require('node:test');
const { JapanMapIcons } = require('../dist/index.js');
const { PinGlyphIcon } = require('@mapconductor/react-icons');

test('exports region-qualified Japanese glyphs', () => {
  assert.deepEqual(Object.values(JapanMapIcons).map((icon) => icon.id), [
    'jp.post_office', 'jp.police_box', 'jp.shrine',
  ]);
});

test('renders a Japanese glyph in the common pin container', () => {
  const svg = decodeURIComponent(new PinGlyphIcon(JapanMapIcons.postOffice).toBitmapIcon().url);
  assert.ok(svg.includes(JapanMapIcons.postOffice.pathData));
});
