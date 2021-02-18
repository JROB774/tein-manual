# Remarks
Expanding the "palette.png" file to add more palettes, without making the
appropriate changes to the colour mapping shaders, will result in incorrect
colours and palettes being displayed.

Transparency/alpha is not read from the palette, so saving semi-transparent
pixels will simply result in the same colour being used in-game, but with the
alpha being set to full - removing the transparency. Fully transparent pixels
will either be black or white, depending on how the paint program being used to 
modify the palette handles saving transparency.

The map screen will make use of colours from the currently loaded area palette
to tint the different icons, graphics, etc. As will other graphical elements,
such as the tumor counter, NPC text boxes, etc. 
