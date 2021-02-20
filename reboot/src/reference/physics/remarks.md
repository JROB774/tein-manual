# Remarks

The physics variables are handled globally and, currently, cannot be modified to
only be applied in certain areas of the game. This limits some potential uses
that physics modifications could potentially have.

Removing a variable from any of the physics files will lead to it being assigned
a default value, most likely 0. However, leaving a variable without a value in
the file will result in undefined and obscure behaviour from the game and is not
recommended at all.
