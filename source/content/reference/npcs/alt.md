# Alt. Text
The ```alt_text``` variable is used and formatted in exactly the same way as the
regular text variable. However, this variable is only used on the four Steven
NPCs and acts as the alternate text to display when the appropriate number of
tumors has been collected. Below is a list of how many tumors is needed to make
each NPC trigger their alternate text (these amounts are hard-coded):

- NPCH1 :: 50 Tumors
- NPCH2 :: 100 Tumors
- NPCH3 :: 170 Tumors
- NPCH4 :: 300 Tumors

Furthermore, the addresses for the various tumor counts needed to trigger alternate text are as follows:

```
0x000E489D: 50
0x000E495C: 100
0x000E49A8: 170
0x000E4A3A: 300
```

Attempting to apply the ```alt_text``` variable to any other NPC will do nothing.
Based on testing, it is apparent that the NPC IDs that react to alternate text
are hard-coded into the game and will require executable hacking to modify. The
addresses for the alternate text NPCs are as follows:

```
0x00231274: "NPCH1"
0x002312AC: "NPCH2"
0x002312B4: "NPCH3"
0x00231294: "NPCH4"
```

For more information on how to modify these values effectively, see the
Executable Hacking section. 
