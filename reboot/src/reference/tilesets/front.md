# Foreground Graphics

The ```foreground_graphics``` variable specifies what graphic to display as the
foreground image of a level. If no foreground_graphics variable is specified then
the game will not render anything as the foreground; this is the same as if None
is used as the foreground graphics value. Each foreground has a unique
anchor-point, meaning each one will be placed in a level differently. The N1
tile can be used to offset the foreground within a level, so that it can be
placed where desired.

As the foreground graphics variable takes in movie clips as its value, this
means that any of the available art alts. can be used as a foreground image.
For a full list on all the available art alts. see the
[Art Alts.](../art_alts/overview.md) section.

Examples of the different foreground graphics can be seen below. 

<script src="../../../assets/scripts/alts.js"></script>
<script type="text/javascript">
    display_alt("fronts", 
        per_row = 2,
        ord_name = [],
        ord_extra = ["(The End and Anguish)", "(Unused)"]);
</script>

