# Cart Intro PNG

The ```cart_intro_png``` variable is used to specify what image to draw as the
intro when entering a cartridge level, as well as the graphic used in the
cartridge menu; this can be any graphic in the ```textures\``` folder, even newly
added ones. When specifying the filename, the ".png" file extension does not need
to be specified and adding it will result in the game crashing when it attempts to
load the the tileset. Furthermore, unlike other variable values in the tilesets
file, the intro PNG filename is not case-sensitive. If no value is specified the
game will default to using ```textures\titlecart.png``` as the intro graphic and
```textures\emptycart.png``` as the cartridge menu graphic.

The existing cartridge graphics are 160x90 pixels in size, scaled up to use a 
resolution of 1280x720 (a 16:9 aspect ratio). Cartridge graphics can be any
size, but if they do not match the 16:9 aspect ratio, then the graphic will be
displayed stretched and distorted. Furthermore, any number of colours is allowed
in the PNG graphic, however, when rendered in-game the graphic will be limited
to the colours in the chosen ```cart_intro_palette```. Examples of both of these
limitations can be seen below (the retro filter was disabled for easier and
clearer viewing): 

![Cart Intro Colour Limitation](../../assets/images/screenshots/scrn_intropng_colour.png)
The title background image used here has far fewer colours than the original PNG.

![Cart Intro Size Limitation](../../assets/images/screenshots/scrn_intropng_size.png)
The square trophy image is stretched and distorted to fit the aspect ratio.

When creating new cart intro graphics, it is best to use similar greyscale
colours to those used in the original cart graphics. This will allow for more
accurate control over what pixels map to what palette colours. Below is a useful
palette to use when drawing cart intros, with each colour mapping one-to-one with
the respective columns of the palette that will be used for rendering the PNG:

<span class="outlineblack">![Cart Intro Palette](../../assets/images/cartpalette.png)</span>
