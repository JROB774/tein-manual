# Variables Overview

- **[area_name](./area_name.md)** - The name that will appear on the save file. It is also used to reference the area in certain instances.
- **[area_label_frame](./area_label.md)** - The title graphic in the game’s SWF that is displayed when the area is entered.
- **[area_type](./area_type.md)** - What sub-type of area is it, defines certain properties of the level (e.g. dark levels use tumors as lives).
- **[tile_graphics](./tiles.md)** - The graphical tileset to use, changes details about the visuals of the area’s layers.
- **[overlay_graphics](./overlay.md)** - The graphics that are displayed on top of the active layer (bricks, rocks, bones, etc.).
- **[background_graphics](./back.md)** - The background image to use for the area.
- **[foreground_graphics](./front.md)** - The foreground image to use for the area.
- **midfx_graphics** - ???
- **midfx_layer** - ???
- **fx_shader** - The shader to apply certain visual effects in the area.
- **fx_shader_mid** - ???
- **shader_param** - Controls the intensity of the mid_fx layer (from 0 to 1, decimal numbers valid).
- **[palette](./palette.md)** - The row of the ```palette.png``` to use for rendering graphics. (Palette rows start couting from 0, not 1).
- **[music](./music.md)** - The music to play whilst in the area.
- **[ambience](./ambience.md)** - The ambient background noise that will be played in the area.
- **[music_volume](./music_vol.md)** - The volume the area’s music should be played at.
- **[ambience_volume](./ambi_vol.md)** - The volume the area’s ambience should be played at.
- **[stop_previous_music](./stop_music.md)** - A flag stating whether the previous music track should stop or continue playing silently.
- **tile_particle_1 (to 5)** - A particle effect, defined in ```particles.txt```, to assign to the two particle tiles.
- **global_particle_1 (to ???)** - A particle effect, defined in ```particles.txt```, to spawn globally throughout the area.
- **[npc_1 (to 3)](./npc.md)** - The NPCs, defined in npcs.txt, to assign to the three NPC tiles used in the level.
- **decoration_1 (to ???)** - The decorations to assign to the ??? decoration tiles used in the level.
- **[art_alts](./alts.md)** - Alternate sprite graphics to use on entities that allow for alts.
- **[toxic_timer](./toixc.md)** - Controls how long toxic clouds and water will take to kill the player in seconds.
- **[cart_intro_png](./cart_png.md)** - The filename from the ```textures\``` folder to use as the cartridge area’s intro graphic.
- **[cart_intro_palette](./cart_palette.md)** - The palette to use when rendering the cartridge intro graphic.