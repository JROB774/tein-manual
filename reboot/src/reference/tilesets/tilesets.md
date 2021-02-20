# Tilesets

Location in the unpacked data: ```data\tilesets.txt```

The tilesets file is one of the most important when modding TEIN, especially in
regards to adding new areas/zones. The file dictates general information about a
given area, but also defines many of the traits and aspects that will make an
area unique (graphical elements, what music to use, palette, etc.).

Here is an example tileset taken from the game, ("The End" downward secret area
tileset):

```
1xd { #1 bonus downward areas
  area_name "The End"
  area_label_frame 1
  tile_graphics Tilecity
  overlay_graphics Overlayscity
  background_graphics bg2
  palette 1
  fx_shader reflectionripples


  music [**hmk_secret_intro.ogg, hmk_secret_loop.ogg**]
  ambience rain.ogg
  stop_previous_music false

  music_volume 1
  ambience_volume 1

  area_type normal

  tile_particle_1 drip

  npc_1 NPCD6
  npc_2 NPC0
  npc_3 none
}
```

Whilst this may seem complex, the syntax for a tileset can be broken down and
represented as the following:

```
[**TILESET_NAME**] {
  [**VARIABLE_NAME**] [VALUE]
  ...
}
```

The # followed by text, in The End example, is simply a comment and not
interpreted/read by the game itself, hence why it was not added in the
simplified syntax breakdown.

So, overall, the "tilesets.txt" file simply stores a series of tilesets that
define properties, features, and aspects of the different zones in the game.
Allowing for them to make use of different assets, music, NPCs, alternate
graphics, particles, etc. 

## Contents

- [**Variables Overview**](./vars.md) - Details about the Area Name variable.
- [**Area Name**](./area_name.md) - Details about the Area Label Frame variable.
- [**Area Label Frame**](./area_label.md) - Details about the Area Type variable.
- [**Area Type**](./area_type.md) - Details about the Tile Graphics variable.
- [**Tile Graphics**](./tiles.md) - Details about the Overlay Graphics variable.
- [**Overlay Graphics**](./overlay.md) - Details about the Background Graphics variable.
- [**Background Graphics**](./back.md) - Details about the Foreground Graphics variable.
- [**Foreground Graphics**](./front.md) - Details about the Palette variable.
- [**Palette**](./palette.md) - Details about the Music variable.
- [**Music**](./music.md) - Details about the Ambience variable.
- [**Ambience**](./ambience.md) - Details about the Music Volume variable.
- [**Music Volume**](./music_vol.md) - Details about the Ambience Volume variable.
- [**Ambience Volume**](./ambi_vol.md) - Details about the Stop Previous Music variable.
- [**Stop Previous Music**](./stop_music.md) - Details about the NPC variable.
- [**NPC**](./npc.md) - Details about the Art Alts. variable.
- [**Art Alts**](./alts.md) -  Details about the Toxic Timer variable.
- [**Toxic Timer**](./toxic.md) - Details about the Cart Intro PNG variable.
- [**Cart Intro PNG**](./cart_png.md) - Details about the Cart Intro Palette variable.
