# How to add NPCs

The first step in making a custom NPC is to add an additional NPC to the ```data\npcs.txt``` file found in the unpacked game data. First, the NPC must be named; NPCs in game are named based on order of appearance, and race. Skeleton NPCs are named ```NPCx``` (where ```x``` is a unique number to differentiate them), Light Blob NPCs are named ```NPCBx```, Ghosts are named ```NPCGx```, Dark Blobs are named ```NPCDx```, cameos such as Steven and Isaac, from Edmund's other games are named ```NPCXx```, and finally the large Stevens that transport Ash to the future are named ```NPCHx```. Therefore custom NPCs should use a unique naming scheme, such as ```NPCAx```, to prevent your mod from editing and conflicting with in-game NPCs.

The basic description, such as ```#basic sideways``` that appears below the name has no effect and is used to identify NPCs.

The ```movieclip``` decides what form your custom NPC takes.
```sound_id``` is similar, and decides the noises your NPC makes when it's dialogue activates. These are fairly descriptive, such as ```NPCSkull``` making a bone-rattling noise when spoken to. Generally, the ```sound_id``` should match the ```movieclip```.

The ```text``` decides what your custom NPC says when spoken to. Each set of double-quotes ```""``` is a separate box of text that appears in sequence. The new-line character ```\n``` makes the text after it start on a new line. Text should be surrounded by square brackets ```[]```, and dont forget to add curly brackets ```{}``` brackets around your NPC's code, or else an error will occur when you enter the level.

Here is an example of what an NPC entry could look like when complete:

```plaintext
NPC0 {
    #basic sideways
    movieclip NPC0
    sound_id NPCSkull
    text [
        "oh \n . . . \n its you. . ."
        "must be nice \n being alive \nn' all that"
        "when i died \n that tumor wiggled out"
        "it's been floating \n up there for years \n watching me"
        "please\n dont take it. . . \n its all i have left"
    ]
} 
```

To add your NPC to a level, you must add your NPC to the level's ```data\tilesets.txt``` code. The NPC's name should be written after ```npc_1```, ```npc_2``` or ```npc_3```. Then, add your npc to the level using the level editor; NPCs are found in tiles Z1 - 3 in the editor, in order of number. See the [Tile Reference](../reference/tiles.md) for more information on these particular tiles.

After finishing the [Getting Started / Tutorials](./getting_started.md) section, please see the [Modding Reference](../reference/reference.md) and particularly the <a href="npc.html">NPCs</a> section for more information on the possible values and details regarding custom NPCs.
