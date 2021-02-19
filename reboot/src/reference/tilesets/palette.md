# Palette

The palette variable is used to specify which colour palette the tileset/area
will use when drawing graphics to the screen. The number supplied as a value
references a row of colours, in the palettes file, that will be used to draw the
level. The file storing these colours is the ```textures\palette.png``` file. The
first row in the file uses the ID number 0 and each palette going down follows
consecutively, ending with palette 63 -- meaning there are 64 unique palettes in
total. If no palette variable is specified for a tileset, it will use palette 0
by default.

For more information on what each row and column of the palette file means, how
to modify palettes themselves, how to expand the palettes file, and other general
palette information, see the [Palettes](../palettes/overview.md) section of the
reference.
