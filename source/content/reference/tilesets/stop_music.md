# Stop Previous Music

The ```stop_previous_music``` variable is used to specify whether the previous
music track being played should be stopped or not; it accepts either a ```true``` or
```false``` value. If it is set to false then when the previous area is re-entered the
music will not play from the start again, this is usually used in secret areas so
that the music does not reset everytime a secret is entered. However, if it is
set to ```true``` then the music will restart from the beginning when the previous area
is re-entered. The default value for this variable is ```true```, so if the variable is
left unset then the previous music track will be set to stop when entering the
area. 
