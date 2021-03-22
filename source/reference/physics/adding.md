# Adding New Physics

Originally, physics variables were handled globally and could not be applied in individual areas of the game. At some point Tyler decided to be a really cool guy and gave us the ability to do just that.

Say you wanted to give The End twice as much gravity.
First you would need to make a copy of the physics file you want to edit. For this example, we want to edit playerphysics.txt.
Name the copied file something logical like "playerphysics_heavygravity".
Next, you would open this file and change the value of the gravity to twice its original value (from 40 to 80).
Now for the most important part. After you have saved this new file you need to add it to the tileset for the area you want it to be abpplied to.
To do this, open tilesets.txt and add a line specifying the physics file you just created.
In our example it would look like this:
```
player_physics data/playerphysics_heavygravity.txt
```

For water physics, gravity beam physics, or platform physics, you use the same method above except that in the tilesets file you will specify them with the following variables:
```
water_physics data/playerphysics_honey.txt
lowgrav_physics data/playerphysics_gyrobeams.txt
platform_physics data/platformphysics_fast.txt
```
The names used above are just used as an example. Obviously you would want to put the name of whatever file you are using in their place.
If the specified file does not exist, then the game will default to the normal physics.

Removing a variable from any of the physics files will lead to it being assigned
a default value, most likely 0. However, leaving a variable without a value in
the file will result in undefined and obscure behaviour from the game and is not
recommended at all.


