# Text
 The text variable details what ```text``` will be displayed when the NPC is
 interacted with; there are certain formatting rules regarding this text that
 are quite important in ensuring that the NPC’s text works correctly and looks
 visually appealing. Below is some example text from an NPC that can be used to
 compare with what is being explained, to make it easier to understand:

```
text [
  "when i used\n to hang off\n a wall"
  "id pull\n out from it \nand then"
  "id do a \n jump. . . and \n go like super far!"
  "but when i \ndidn’t pull \noutwards"
  "id mostly just \n go up higher"
  "i call it the \npull out method"
  "\n. . ."
  "i made that \none up years \nago"
  "i imagined it \nwould get more \nof a laugh"
  "\n. . ."
  "please \nleave me alone"
]
```

Text is entirely contained within square brackets []. When writing text ensure
that it is always wrapped inside these brackets or else the game may not 
interpret the text correctly -- or worse, crash.

Text is then split into different sections, each section is encased within 
quotes "". These sections define when a button-prompt will appear asking the
player to advance the text, when the user presses the appropriate button the
text will advance and begin scrolling through to the next section. It is
important to reguarly split text into sections for easier reading.

Finally, a special type of character is used called a new-line ```\n```, this
character informs the game to start writing text on the next line, rather than
being displayed itself. Once again, it is important to reguarly add new-lines so
that the text does not clip outside of the text box; however, no more than three
lines should be in any given text section, otherwise potential veritcal clipping
may occur.

The text box itself can fit appoximately 22 characters on each line, however,
this number will vary depending on the characters used due to the font having
varying character widths. 
