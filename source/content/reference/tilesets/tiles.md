# Tile Graphics

The ```tile_graphics``` variable dictates what graphics are used when drawing the
environment tiles for the game, these include the solid tiles and the modular
background layer pieces. As can be seen in the example images, this could mean
changing a damaged building wall in The End tileset, to a natural rocky wall in
the Arid Flats tileset, and so on; allowing for each area to have a unique theme
and visual flare. As well as the graphics for the environment tiles themselves,
the value given to the tile graphics will also control what default decorations
an area will use. However, these decorations can be overwritten by assigning new
ones using the ```decoration_1``` (to ???) variable. For more information on what these
default decorations are, see the Decorations section on this page. If the
variable is unset then it will be given the value of ```Tile```, the default value.
None is not a valid value for tile graphics, and will result in the game crashing
on startup.

Whilst it may be logical to also assume that the tile graphics will impact the
small images drawn on top of the tiles (bricks, rocks, etc.), this is in fact not
true and is instead controlled by the ```overlay_graphics``` variable. Furthermore,
graphics such as Water, Lava, and Pollution/Toxic are also controlled via other
factors, in this case shaders. For more info on adding shaders to tilesets, click
here.

The specific graphics assigned to each tile within the tileset is determined
randomly when the level is loaded, and in the case of ```TileGlitch``` graphics,
further randomisation to the tiles will occur.

As the tile graphics variable takes in movie clips as its value, this means that
any of the available art alts. can be used as tile graphics. For a full list on
all the available art alts. see the [Art Alts](../art_alts/overview.md). section.

Examples of the different tile graphics can be seen below.

<script src="../../../assets/scripts/alts.js"></script>
<script type="text/javascript">
    display_alt("tiles", 
        per_row = 2,
        ord_name = [
            "theglow", 
            "Tile",
            "Tileairship",
            "Tilecaves",
            "Tilecity",
            "Tilecomplex",
            "TileEnd",
            "Tilefield",
            "TileGlitch",
            "Tilehell",
            "Tileretro",
            "Tilesewers",
            "Tiletox",
            "Tiletox2"
        ],
        ord_extra = [
            "(Ruin, and Acceptance)", 
            "(N/A)", 
            "(SS Exodus)",
            "(Overflow, and Blight)",
            "(The End, and Anguish)",
            "(The Machine)",
            "(Nevermore, and The Future)",
            "(Arid Flats, and Retrograde)",
            "(Glitch Carts)",
            "(Golgotha, and Gloom)",
            "(Retro and Iron Carts)",
            "(Unused)",
            "(The Split, and Wall of Sorrow)",
            "(The Hollows)"
        ])</script>

