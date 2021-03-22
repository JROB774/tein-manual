# NPC


The ```npc_x``` variables (where ```x``` is a number between 1 and 3) are used to
specify which NPCs from the ```data\npcs.txt``` will be spawned using the
respective Z1 - 3 tiles, when placed in a level. If an NPC variable is left
unset, then placing the corresponding NPC tile will simply do nothing and no NPC
will be spawned. This will be the same if the NPC variable is assigned a value
of None. Supplying an invalid/nonexistent NPC name to one of the variables will
result in a GSON error when the room containing the NPC is entered.

For more information about what NPCs are available to spawn, and how to modify
and create new NPCs, see the [NPCs](../npcs/npcs.md) section for detailed descriptions. 
