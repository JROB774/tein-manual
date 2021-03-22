# Background Graphics

The ```background_graphics``` variable specifies what graphic to display as the
background image of a level. If no background_graphics variable is specified then
the game will render the background as a solid dark-grey colour; this is the same
as if None is used as the background graphics value. Each background has a unique
anchor-point, meaning each one will be placed in a level differently, sometimes
resulting in the solid grey colour showing through in areas. The ```N0``` tile can be
used to offset the background within a level, so that it can be placed where desired.

As the background graphics variable takes in movie clips as its value, this means
that any of the available art alts. can be used as a background image. For a full
list on all the available art alts. see the [Art Alts.](../art_alts/overview.md)
section.

Examples of the different background graphics can be seen below. 

<script src="../../../assets/scripts/alts.js"></script>
<script type="text/javascript">
    display_alt("backs", 
        per_row = 2,
        ord_name = [
            "aireshipbg",
            "Background",
            "bg2",
            "bgretro",
            "bgretro2",
            "bgretrox",
            "bgsolid",
            "ch2bg",
            "ch3bg",
            "ch4abg",
            "field2bg",
            "hellbg",
            "neverbg",
            "None"
        ],
        ord_extra = [
            "(SS Exodus)",
            "(The Hollows)",
            "(The End, and Anguish)",
            "(Retro and Iron Carts)",
            "(Unused)",
            "(IronCarts)",
            "(Ruin and Acceptance)",
            "(Arid Flats, and Gloom)",
            "(Overflow, and Blight)",
            "(The Split, and Wall of Sorrow)",
            "(Retrograde and The Machine)",
            "(Golgotha)",
            "(Nevermore and the Future)",
            "(N/A)"
        ]);
</script>
