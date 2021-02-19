# Art Alts


The ```art_alts``` variable controls what graphics will be swapped out for other
graphics within the area, and is quite different from many of the other variables
seen within the tilesets file. So, the purpose of art alts. is to tell the game
to replace any instance of a certain graphic and replace it with a different one;
for example, replacing all tumor graphics to make them look like mega tumors
instead. Note that entities altered by art alts. will still act exactly the same,
they will just appear diffeent. The basic syntax for art_alts is as follows:

```
art_alts [
  [ORIGINAL, REPLACEMENT]
  ...
]
```

Where ```ORIGINAL``` is an art asset name to change, and ```REPLACEMENT``` is an
art asset name that will replace the original asset. Line 2 in the example can
then be repeated over-and-over again allowing for as many art alts. to be applied
to an area as possible.

There is no limit to what assets can be swapped, however, not all graphics will
work correctly when being swapped; with some glitching or moving sporadically. To
avoid this it is usually best to swap out similar graphics, or graphics of the
same type (enemies, tiles, etc.). For a full list on all the available art alts.
within the game, see the [Art Alts.](../art_alts/overview.md) section for more
information. Do remember that art alts. are case-sensitive values. 
