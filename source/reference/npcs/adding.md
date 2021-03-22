# Adding NPCs

To add an NPC, the first thing that must be done is a new NPC entry must be
made in the "npcs.txt" file. This can be written out by following the syntax
given in the [Overview](./npcs.md) section, or by copying an existing NPC entry
and changing the values as neccessary. When making a new NPC ensure that its ID
is completely unique from all the others, otherwise conflicts will occur. Then
set all of its variables/properties appropriately, the information in the
previous sections of this page can be used as a guide to help.

Once the NPC has had all of its information filled out, it must then be assigned
to a specific NPC tile (Z1 - 3), using the "tilesets.txt" file. Locate the
specific area tileset that you wish for the NPC to appear in and add in an
```npc_x``` variable, where x is a value between 1 and 3; this refers to which
NPC tile will be used to place the NPC. An example excerpt from "The End"
tileset, shwocasing the NPC definitions:

```
1 {
  ...

  npc_1 NPC0
  npc_2 NPC1
  npc_3 NPC2

  ...
}
```

Once this is done, placing any one of the NPC tiles in a level using this
tileset will spawn the new NPC.

For more detailed information on modifying tilesets using the "tilesets.txt"
file, click [here](./references/tilesets/overview.md). 
