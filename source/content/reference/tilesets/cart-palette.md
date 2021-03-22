# Cart Intro Palette

The ```cart_intro_palette``` variable is used to specify what palette should be
used to draw the intro graphic for a cartridge. As with regular palettes, the
number references the row of colours to use from the ```textures\palette.png```
file -- starting from 0 and ending at 63. However, unlike regular palettes, the
colours used in the cart intro images are not mapped to columns in the same way.
Rather than column colours being mapped based on what element is being drawn
(tile, background, etc.), cartridge palette columns map based on the greyscale
shade. Using the greyscale palette specified in the [Cart Intro PNG](./cart_png.md)
section to draw cartridge graphics will help when mapping palette colours to a
given intro image. If no palette variable is specified for a cart intro, it will
use palette 0 by default.

For more information on what each row and column of the palette file means, how
to modify palettes themselves, how to expand the palettes file, and other
general palette information, see the [Palettes](../palettes/overview.md) section
of the reference. 
