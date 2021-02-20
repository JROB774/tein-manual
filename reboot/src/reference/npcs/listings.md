# NPC Listing (IDs and Movie Clips)

A graphical list displaying all of the NPCs within the game. With their 
appropriate NPC IDs (the values used to set NPCs in the Tilesets file) below 
them, these values also double-up as being the names used to reference the 
particular movie_clip (graphic/sprite) that an NPC is given. Remember that
variables and their values are case-sensitive, in the case of NPCs all of the
IDs are fully capitalised, no lower-case.

<script src="../../assets/scripts/npcs.js"></script>

## Skeletons
<script type="text/javascript">display_npcs("npc", 17, start = 0, padding = 2, per_row = 6)</script>

## Light Blobs
<script type="text/javascript">display_npcs("npcb", 7)</script>

## Ghosts
<script type="text/javascript">display_npcs("npcg", 7)</script>

## Dark Blobs
<script type="text/javascript">display_npcs("npcd", 7)</script>

## Characters
<script type="text/javascript">display_npcs("npcx", 5, start = 1, padding = 1, per_row = 5)</script>

## Stevens
<script type="text/javascript">display_npcs("npch", 4, start = 1, padding = 1, per_row = 4)</script>

As well as the NPC movie clips listed above, NPCs can also be assigned any of
the alternate art values as their ```movie_clip`` value. For a full listing on
the available movie clips that can be used, see the 
[Art Alts](./reference/art_alts.md). section. 
