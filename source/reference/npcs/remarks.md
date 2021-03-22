# Remarks

Placing one of the NPC tiles (Z1 - 3) in a level with its value in the tileset
being undefined or set to none will simply result in nothing appearing at the
location. Fortunately the game will not crash or present any other kinds of
abstract behaviour.

Setting the NPCs ```movieclip``` or ```sound_id``` variables to invalid values
will result in the game crashing when the level containing the NPC is entered.
Futhermore, not includng any of these fields, including text, will also cause a
crash. However, if any of these problems occur, the game will display a helpful
error message making debugging such as issue relatively easy.

Inclusion of the the text field but leaving it like so: ```text = []``` will
lead to the game crashing when the NPC is interacted with; no error message is
supplied in such instances. 
