# Overview
Location in the unpacked data: ```textures\palette.png```

Palettes are used to recolour the many different assests in The End is Nigh.
By loading different palettes for each unique area of the game, each zone is
able to look drastically different whilst using many of the same assets.

The file that defines the palette information can be opened in any basic paint
program to be modified, allowing for changes to be made to existing palettes as
well as the ability to create entirely new ones.

The palette is made up of pixels, and these pixels are interpreted in two ways:
as rows, and as a columns. The rows marks a unique palette that can be set, with
its row number acting as its palette ID (0 - 63). Whereas each column the pixel
is in (0 - 15) specifies what graphics the colour in that particular palette row
will be mapped to, whether its background tiles, water/lava, tile details, etc. 

