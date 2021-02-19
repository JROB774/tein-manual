# Player Physics

Location in the unpacked data: ```data\playerphysics.txt```
Location in the unpacked data: ```data\playerphysics_lowgrav.txt```
Location in the unpacked data: ```data\playerphysics_water.txt```

The player physics files define a variety of different variables relating
specifically to how the player moves throughout the game world. The values will
control, movement speed, jump height, long-jump speed, and much more. Player
physics is split into three different files, all containing the same variables:
the first, ```playerphysics.txt```, is the standard physics for the player when moving
around levels, on ground and in air; the second, ```playerphysics_lowgrav.txt```,
is the physics used when the player is within a gravitational-pull beam; and the
third, ```playerphysics_water.txt```, is the physics applied when the player is
currently in a liquid (water, or toxic water). The variables contained within
these three files are as follows:

- gravity - The gravity applied to the player normally.
- leniency - The amount of time a player can fall through the air and still jump.
- max_fallspeed - The maximum speed the player can reach whilst fall.
- maxspeed - ???
- runspeed - The maximum movement speed of the player.
- ground_friction - The friction applied to turning whilst on the ground.
- stop_friction - How quickly the player stops moving after releasing a move key.
- air_friction - The friction applied to turning whilst in the air.
- fastfall_gravity - The gravity applied to the player whilst fast-falling.
- fastfall_jerkdown - Inital jerkdown force applied to the player when fast-fall is initiated.
- fastfall_maxspeed - The maximum speed the player can reach whilst fast-falling.
- float_time - ???
- jumpheight - The max height of the player’s jump.
- release_jumpheight - The height of the player’s short hop (tapping the jump button).
- longjump_slidethreshold - ???
- longjump_speed - The speed at which the player moves during a long jump.
- longjump_height - The height gained when performing a long jump from a ledge.
- longjump_airfriction - The friction applied to turning during a long jump.
- ledgejump_height - The height gained from a normal ledge jump (not a long jump).
- enemy\_bounceheight\_nojump - The height gained by the player when bouncing off an enemy.
- enemy\_bounceheight\_jump - The height gained by the player when bouncing off an enemy with a jump.
- mush\_bounceheight\_nojump - The height gained by the player when bouncing off a spring.
- mush\_bounceheight\_jump - The height gained by the player when bouncing off a spring with a jump.
- enemy\_prebounce\_time - ???
- enemy\_postbounce\_time - How long the "no jump" bounce force is applied for? (Impacts no jump bounce height.)
- swimspeed - The speed the player moves horizontally in the water.
- water_exitheight - The height gained when jumping out of the water.
