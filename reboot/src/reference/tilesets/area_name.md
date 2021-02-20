# Area Name

The area name is a unique identifier for a given area, it is the text that will
appear on the save file when a game is saved within the zone, when writing the
label frame within the tilesets file, it should be wrapped in double-quotes
"Example Name" allowing for spaces. Not doing this may confuse the game and
cause problems when reading the area’s tileset.

Whilst it may be assumed that this variable also controls the level name
(bottom-right corner in-game), this is in fact incorrect. The individual level
names are controlled via the ```levelinfo.txt``` file, in the ```data\``` folder of the
unpacked game files; for more information on editing level info, click here. The
text graphic displayed at the top of the screen when a new zone is entered is
also not controlled by this property, see the Area Label Frame section below for
more info.

The only other factor controlled by the area name is the slant effect seen in
Nevermore/The Future (see image below). By setting an area’s name to "Nevermore"
it will be given said slanting effect, but as stated previously, will also
result in the, most likely, unwanted side-effect of the save file displaying
"Nevermore". The only, currently known, solution to setting the slant effect
is by hacking and modifying a plain-text value contained withing the game’s
executable located at address 0x00232A18. However, performing the hack and
handling the legality of redistributing the executable is more effort than it is
worth. Furthermore, the string appears to be of a fixed length, or at the very
least only contain a few more bytes that could be overwritten. Meaning assigning
a zone like the Wall of Sorrow the slanting effect would be impossible, due to
this limitation. 

![Nevermore slanting effect](../../assets/images/screenshots/scrn_slant_01.png)
Notice the slight slant down on the left side of the screen, when compared to the right.

