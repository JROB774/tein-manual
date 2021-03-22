# Area Type
The ```area_type``` variable controls specific aspects of a tileset/area,
such as how it will handle deaths, etc. If the area type variable is left
undefined, then the area will be of type ```normal``` -- the default value. The
variable accepts the following values, with each one having a unique effect that
will change the way the area acts:

## ```ironcart```

The retro monitor filter will be applied, as will retro sounds, and a cart intro
graphic (cart\_intro\_png) will be displayed when entering the area. Dying will
send the player back to the first level in the area; if used in an area that was
not reached via the TV/Console, then the player will be spawned in the last
non-ironcart room they were in. Using the "Exit Cart" option from the menu will
take the player back to 1-1.

## ```cart```

The retro monitor filter will be applied, as will retro sounds, and a cart intro
graphic (cart\_intro\_png) will be displayed when entering the area. The player
will have a limited number of lives to beat the area. Using the "Exit Cart"
option from the menu will take the player back to 1-1.

## ```glitch```

The retro monitor filter will be applied, as will retro sounds, and a cart intro
graphic (cart\_intro\_png) will be displayed when entering the area. Graphical
elements will be reset/randomised on every death. Using the "Exit Cart" option
from the menu will take the player back to 1-1.

## ```normal```

The standard areas in the game, there are no extra effects or parameters added.

## ```dark```

The current tumor count will act as the player’s lives, and losing all lives
will respawn the player at the first level in the area.
