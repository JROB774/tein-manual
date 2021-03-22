# Overlay Graphics

The ```overlay_graphics``` variable dictates what graphics are drawn on top of
the active/solid tiles and the first layer of modular background tiles. As can
be seen in the example images, this could mean changing a few bricks in
The End overlay, to a cluster of rocks in the Arid Flats overlay, and so on;
allowing for each area to have a unique theme and visual flare. If the variable
is unset then it will be given the value of ```TileOverlays```, the default
value. None is also a valid value for overlay graphics, and will result in no
overlays being displayed for the area.

The specific graphics overlayed on each tile in the level is determined randomly
when the level is loaded, and if ```TileGlitch``` is being used as the 
```tile_graphics``` value, then further randomisation to the tiles and overlays
will occur.

As the overlay graphics variable takes in movie clips as its value, this means
that any of the available art alts. can be used as overlay graphics. For a full
list on all the available art alts. see the [Art Alts.](../art_alts/overview.md)
section.

Examples of the different overlay graphics can be seen below. 

<script src="../../../assets/scripts/alts.js"></script>
<script type="text/javascript">
    display_alt("overs", 
        per_row = 2,
        ord_name = [
           "Overlaysairship",
           "Overlayscaves",
           "Overlayscity",
           "Overlayscomplex",
           "Overlaysend",
           "Overlaysfield",
           "Overlayshell",
           "Overlaysretro",
           "Overlaystheglow",
           "Overlaystox",
           "Overlaystox2",
           "TileOverlays"
        ],
        ord_extra = [
            "(SS Exodus)",
            "(Overflow, and Blight)",
            "(The End, and Anguish)",
            "(The Machine)",
            "(Nevermore, and The Future)",
            "(Arid Flats, and Retrograde)",
            "(Glitch Carts)",
            "(Golgotha, and Gloom)",
            "(Retro and Iron Carts)",
            "(Ruin, and Acceptance)", 
            "(The Split, and Wall of Sorrow)",
            "(The Hollows)",
            "(N/A)" 
        ]);
</script>
