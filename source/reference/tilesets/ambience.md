# Ambience

The ```ambience``` variable takes in a filename from the ```audio\ambience\```
data folder. This variable will dictate the looping ambient noise that will play
throughout the area. The ambience files are of type ```OGG``` and the ```.ogg``
extension must be added to the name when being referenced. For example:

```
ambience caves # wrong
ambience caves.ogg # correct
```

The default available ambient sound loops are as follows:

- ```caves.ogg``` - (The Hollows, SS Exodus, Ruin)
- ```cogs.ogg``` - (Unused)
- ```flesh.ogg``` - (Retrograde, Nevermore)
- ```labloop.ogg``` - (The Machine)
- ```rain.ogg``` - (The End, Anguish)
- ```ruins.ogg``` - (Overflow, Blight, Ruin, The Future)
- ```volcano.ogg``` - (Anguish, Golgotha)
- ```water.ogg``` - (Unused)
- ```wind.ogg``` - (Arid Flats, Gloom, The Split, Wall of Sorrow)

If the ambience variable is left unset then no ambient noise will be played in the area. 
