# Music
 
The ```music``` variable can take in either one or two filenames from the
```audio\music\``` folder (as well as its various sub-folders). This variable
will dictate the looping background music that will play throughout the area.
If one filename is supplied for the variable, it will simply play said music file
continuously throughout the area. However, if two music files are given then the
first file will be played once as an intro, and the second will be played on loop
for the rest of the area. The syntax for these two methods of using ```music```
are as follows:
 
```
music FILENAME.ogg # single-file
music [FILENAME_INTRO.ogg, FILENAME_LOOP.ogg] # multi-file
```

Where the all-caps ```FILENAME``` variants are various music files.

The music files themselves are of type ```OGG``` and the ```.ogg``` extension
must be added to the name when being referenced. For example:
 
```
music 1812_loop #wrong
music [1812_intro, 1812_loop] # wrong

music 1812_loop.ogg #correct
music [1812_intro.ogg, 1812_loop.ogg] # correct
```

Note that music is not just contained within the root folder and there are other
sub-folders that contain music. When accessing retro, and glitch music it is
important to include the appropriate directory/folder name so that the game knows
where to search for the files. Like so:

```
music retro\danse_loop.ogg
music glitch\nobm_loop.ogg
```
 
The default music intros, loops, etc. are as follows:
 
- ```danse_intro.ogg``` and ```danse_loop.ogg``` - (The End)
- ```newworld_intro.ogg``` and ```newworld_loop.ogg``` - (Arid Flats)
- ```1812_intro.ogg``` and ```1812_loop.ogg``` - (Overflow)
- ```hungarian_rhapsody_intro.ogg``` and ```hungarian_rhapsody_loop.ogg``` - (Wall of Sorrow)
- ```slave_intro.ogg``` and ```slave_loop.ogg``` - (SS Exodus)
- ```dante_intro.ogg``` and ```dante_loop.ogg``` - (The Hollows)
- ```hell_intro.ogg``` and ```hell_loop.ogg``` - (Golgotha)
- ```fields_intro.ogg``` and ```fields_loop.ogg``` - (Retrograde)
- ```bumblebee_intro.ogg``` and ```bumblebee_loop.ogg``` - (The Machine)
- ```danse_intro_dark.ogg``` and ```danse_loop_dark.ogg``` - (Anguish)
- ```newworld_intro_dark.ogg``` and ```newworld_loop_dark.ogg``` - (Gloom)
- ```1812_intro_dark.ogg``` and ```1812_loop_dark.ogg``` - (Blight)
- ```mountainking_fakeout.ogg``` and ```mountainking_loop.ogg``` - (Ruin)
- ```escape.ogg``` - (Acceptance)
- ```requiem_intro.ogg``` and ```requiem_loop.ogg``` - (Nevermore and The Future)
- ```hmk_secret_intro.ogg``` and ```hmk_secret_loop.ogg``` - (Downwards Secret)
- ```gymnopedies_intro.ogg``` and ```gymnopedies_loop.ogg``` - (Upwards Secret)
- ```gynossiennes_intro.ogg``` and ```gynossiennes_loop.ogg``` - (Main Menu)
- ```supercart.ogg``` - (All (Iron) Carts Collected)
- ```the_end_is_nigh_vocals.ogg``` - (Credits Vocals)
- ```credits.ogg``` - (Credits Instrumental)
- ```newworld2_intro.ogg``` and ```newworld2_loop.ogg``` - (Unused)
- ```gameover.ogg``` - (Unused)
- ```mountainking_intro.ogg``` - (Unused)

- ```retro\danse_intro.ogg``` and ```retro\danse_loop.ogg``` - (Mortaman)
- ```retro\newworld_intro.ogg``` and ```retro\newworld_loop.ogg``` - (Blaster Massacre)
- ```retro\1812_intro.ogg``` and ```retro\1812_loop.ogg``` - (River City Rancid)
- ```retro\hungarian_rhapsody_intro.ogg``` and ```retro\hungarian_rhapsody_loop.ogg``` - (Ash Climber)
- ```retro\slave_intro.ogg``` and ```retro\slave_Loop.ogg``` - (Fallen Fantasy)
- ```retro\dante_intro.ogg``` and ```retro\dante_loop.ogg``` - (Catastrovania)
- ```retro\hell_intro.ogg``` and ```retro\hell_Loop.ogg``` - (Dig Dead)
- ```retro\fields_intro.ogg``` and ```retro\fields_loop.ogg``` - (Rubble Bobble)
- ```retro\bumblebee_intro.ogg``` and ```retro\bumblebee_loop.ogg``` - (Morbid Gear)
- ```retro\beeth5_intro.ogg``` and ```retro\beeth5_loop.ogg``` - (Super Mega Cart All Stars)
- ```retro\requiem_intro.ogg``` and ```retro\requiem_loop.ogg``` - (Iron Carts)
- ```retro\turkish_intro.ogg``` and ```retro\turkish_loop.ogg``` - (The End is Nigh)
- ```retro\gnossiennes_loop.ogg``` - (Cartridge Menu)
- ```retro\gameover.ogg``` - (Cartrige Game Over)

- ```glitch\nobm_intro.ogg``` and ```glitch\nobm_loop.ogg``` - (Scab or Die)
- ```glitch\newworld_intro.ogg``` and ```glitch\newworld_loop.ogg``` - (Tombs and Torture)
- ```glitch\bumblebee_intro.ogg``` and ```glitch\bumblebee_loop.ogg``` - (Pus-man)
- ```glitch\homk_intro.ogg``` and ```glitch\homk_loop.ogg``` - (Ghosts ’N Grieving)
- ```glitch\dante_intro.ogg``` and ```glitch\dante_loop.ogg``` - (Dead Racer)
- ```glitch\dance_intro.ogg``` and ```glitch\dance_loop.ogg``` - (Spike Tales)
- ```glitch\turkish_intro.ogg``` and ```glitch\turkish_loop.ogg``` - (The End is Nigh Corrupted)

If the music variable is left unset then no background music will be played in the area. 
