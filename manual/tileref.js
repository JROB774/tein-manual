function tile001 ()
{
	document.getElementById("tilename").innerHTML = "Empty/Air";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: False<br/><br/>Nothing, these tiles are not rendered and have no collision, making up the empty space of levels.";
}
function tile002 ()
{
	document.getElementById("tilename").innerHTML = "Solid";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>These tiles make up the basis of most levels. The player and other entities collide with these tiles and cannot pass through them.";
}
function tile003 ()
{
	document.getElementById("tilename").innerHTML = "Large Spike (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile kills the player on contact, the direction is simply cosmetic.";
}
function tile004 ()
{
	document.getElementById("tilename").innerHTML = "Large Spike (Down)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile kills the player on contact, the direction is simply cosmetic.";
}
function tile005 ()
{
	document.getElementById("tilename").innerHTML = "Large Spike (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile kills the player on contact, the direction is simply cosmetic.";
}
function tile006 ()
{
	document.getElementById("tilename").innerHTML = "Large Spike (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile kills the player on contact, the direction is simply cosmetic.";
}
function tile007 ()
{
	document.getElementById("tilename").innerHTML = "Thin Platform";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True, if any form of movement instructions are applied, the platform graphic is replaced with clouds instead.<br/><br/>These act like solid tiles when standing on top of them, but when passing through from underneath the player will go straight through the platform. Furthermore, when crouching/ducking and pressing jump the player will fall-through the platform.";
}
function tile008 ()
{
	document.getElementById("tilename").innerHTML = "Hook";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A solid tile with a grabbable hook on both the left and right sides.";
}
function tile009 ()
{
	document.getElementById("tilename").innerHTML = "Pipe Block (Not Grabbable)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>These are an alternate version of the standard solid tile, with a pipe graphic instead. Also, the ledges/corners cannot be grabbed, unlike standard solid tiles and the grabbable pipe variant.";
}
function tile010 ()
{
	document.getElementById("tilename").innerHTML = "Fake Solid";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>These tiles appear like the standard solid tiles, however the player and other entities will not collide with them. This allows for secret areas, monster closets, and a variety of other gameplay mechanics.";
}
function tile011 ()
{
	document.getElementById("tilename").innerHTML = "Weak/Crumbling Solid";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A solid tile that begins to break apart and crumble when the player comes into contact with it.";
}
function tile012 ()
{
	document.getElementById("tilename").innerHTML = "Small Spike (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile kills the player on contact, the direction is simply cosmetic.";
}
function tile013 ()
{
	document.getElementById("tilename").innerHTML = "Small Spike (Down)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile kills the player on contact, the direction is simply cosmetic.";
}
function tile014 ()
{
	document.getElementById("tilename").innerHTML = "Small Spike (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile kills the player on contact, the direction is simply cosmetic.";
}
function tile015 ()
{
	document.getElementById("tilename").innerHTML = "Small Spike (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile kills the player on contact, the direction is simply cosmetic.";
}
function tile016 ()
{
	document.getElementById("tilename").innerHTML = "Saw-blade/Drill";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>Similar to spike tiles, if the player comes into contact with this tile they will die. When placed in most situations the tile will appear in-game as a small saw-blade, however, if a solid tile is on either the left, or right, side of the tile then it will appear as a drill (facing the appropriate direction).";
}
function tile017_020 ()
{
	document.getElementById("tilename").innerHTML = "Switch (Unpressed)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This is a switch that starts in the unpressed-state, if the corresponding black switch tile (with the same number) is pressed then this switch will become unpressed.";
}
function tile021_024 ()
{
	document.getElementById("tilename").innerHTML = "Switch (Pressed)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This is a switch that starts in the pressed-state, if the corresponding white switch tile (with the same number) is pressed then this switch will become unpressed.";
}
function tile025_026 ()
{
	document.getElementById("tilename").innerHTML = "Decoration (Active)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile can be assigned a variety of special non-interactive decorations that will appear in game, allowing for more detailed levels. These decorations can be assigned to the individual decoration tiles by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference.";
}
function tile027 ()
{
	document.getElementById("tilename").innerHTML = "Breakable Solid";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>These blocks act as normal solid tiles, however, when charged into with enough speed (either by fast-falling or using a fast ledge jump) they will break apart.";
}
function tile028 ()
{
	document.getElementById("tilename").innerHTML = "Conveyer Belt Slow (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A slow moving conveyer belt, that moves the player in the direction it is facing.";
}
function tile029 ()
{
	document.getElementById("tilename").innerHTML = "Conveyer Belt Fast (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A fast moving conveyer belt, that moves the player in the direction it is facing.";
}
function tile030 ()
{
	document.getElementById("tilename").innerHTML = "Conveyer Belt Slow (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A slow moving conveyer belt, that moves the player in the direction it is facing.";
}
function tile031 ()
{
	document.getElementById("tilename").innerHTML = "Conveyer Belt Fast (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A fast moving conveyer belt, that moves the player in the direction it is facing.";
}
function tile032 ()
{
	document.getElementById("tilename").innerHTML = "Conveyer Belt Slow (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A slow moving conveyer belt, that moves the player in the direction it is facing.";
}
function tile033 ()
{
	document.getElementById("tilename").innerHTML = "Conveyer Belt Fast (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A fast moving conveyer belt, that moves the player in the direction it is facing.";
}
function tile034 ()
{
	document.getElementById("tilename").innerHTML = "Lock";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/Movable: True<br/><br/>>A solid block that will be destroyed when the player comes into contact with it whilst having a key in their inventory. On destruction all adjacent barrier blocks will be destroyed as well.";
}

function tile035 ()
{
	document.getElementById("tilename").innerHTML = "Barrier";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/Movable: True<br/><br/>>A solid block that will be destroyed when an adjacent lock block is opened by the player.";
}
function tile036_039 ()
{
	document.getElementById("tilename").innerHTML = "Particle Generator (Active)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile can be assigned a variety of different particle effects that will be spawned from the tile&#8217;s location, allowing for more detailed levels. These particles can be assigned to the individual particle spawner tiles by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference. Furthermore new particles can be created, and existing ones modified, in the particles.txt file, for more info about modifying particles see the Particles section in the Modding Reference";
}
function tile040 ()
{
	document.getElementById("tilename").innerHTML = "Pipe Block (Grabbable)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>These are an alternate version of the standard solid tile, with a pipe graphic instead. Unlike the other pipe tile variant, the ledges/corners can be grabbed with this tile.";
}
function tile041 ()
{
	document.getElementById("tilename").innerHTML = "Invisible Block";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A variant of the solid tile that has no graphic rendered, instead they are entirely invisible.";
}
function tile158 ()
{
	document.getElementById("tilename").innerHTML = "Hoast (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>An enemy that crawls slowly along the floor, either left or right, its skull can be bounced off of by the player. Contact with any other part of the enemy will result in death.";
}
function tile159 ()
{
	document.getElementById("tilename").innerHTML = "Hoast (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>An enemy that crawls slowly along the floor, either left or right, its skull can be bounced off of by the player. Contact with any other part of the enemy will result in death.";
}
function tile160 ()
{
	document.getElementById("tilename").innerHTML = "Floast";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>An enemy that floats in the air, its skull can be bounced off of by the player. Contact with any other part of the enemy will result in death.";
}
function tile161 ()
{
	document.getElementById("tilename").innerHTML = "Gasper";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>Floats in the air and emits a pollution cloud within approximately a four tile radius circle. The player can bounce off of the top of the enemy, but contact with any other part will result in death. Furthermore, if the player will slowly take damage whilst within the pollution cloud, eventually dying if in contact for too long.";
}
function tile162 ()
{
	document.getElementById("tilename").innerHTML = "Toast";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A frog-like enemy that will periodically bounce towards the player, its skull can be bounced off of by the player. Contact with any other part of the enemy will result in death.";
}
function tile163 ()
{
	document.getElementById("tilename").innerHTML = "Slag (Floor + Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy crawls slowly along the floor, in its respective directon (left or right), any form of contact with this enemy result in death for the player.";
}
function tile164 ()
{
	document.getElementById("tilename").innerHTML = "Slag (Floor + Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy crawls slowly along the floor, in its respective directon (left or right), any form of contact with this enemy result in death for the player.";
}
function tile165 ()
{
	document.getElementById("tilename").innerHTML = "Slag (Ceiling + Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy crawls slowly along the ceiling, in its respective directon (left or right), any form of contact with this enemy result in death for the player. This ceiling variant will fall upwards if no ceiling is in its path.";
}
function tile166 ()
{
	document.getElementById("tilename").innerHTML = "Slag (Ceiling + Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy crawls slowly along the ceiling, in its respective directon (left or right), any form of contact with this enemy result in death for the player. This ceiling variant will fall upwards if no ceiling is in its path.";
}
function tile167 ()
{
	document.getElementById("tilename").innerHTML = "Paraslag (Floor)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy remains stationary until the player comes close, it will then flip to either the ceiling or floor based on where it currently is. Any form of contact with this enemy will result in death for the player.";
}
function tile168 ()
{
	document.getElementById("tilename").innerHTML = "Paraslag (Ceiling)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy remains stationary until the player comes close, it will then flip to either the ceiling or floor based on where it currently is. Any form of contact with this enemy will result in death for the player.";
}
function tile169 ()
{
	document.getElementById("tilename").innerHTML = "Kuko Jr.";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A floating spiky enemy, any form of contact will result in death. Furthermore, these enemies can be reskinned to look like Ghosts (like those seen in the Wall of Sorrow) by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference.";
}
function tile170 ()
{
	document.getElementById("tilename").innerHTML = "Edema (Top-Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy bounces from wall-to-wall, ceilings, and floors, in a diagonal motion; the direction they start in is based on which of the four variants is placed in a level. Any form of contact will result in death for the player.";
}
function tile171 ()
{
	document.getElementById("tilename").innerHTML = "Edema (Bottom-Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy bounces from wall-to-wall, ceilings, and floors, in a diagonal motion; the direction they start in is based on which of the four variants is placed in a level. Any form of contact will result in death for the player.";
}
function tile172 ()
{
	document.getElementById("tilename").innerHTML = "Edema (Bottom-Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy bounces from wall-to-wall, ceilings, and floors, in a diagonal motion; the direction they start in is based on which of the four variants is placed in a level. Any form of contact will result in death for the player.";
}
function tile173 ()
{
	document.getElementById("tilename").innerHTML = "Edema (Top-Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy bounces from wall-to-wall, ceilings, and floors, in a diagonal motion; the direction they start in is based on which of the four variants is placed in a level. Any form of contact will result in death for the player.";
}
function tile175_a () // messsed up numbering...
{
	document.getElementById("tilename").innerHTML = "Anchorfish (Small Radius and Clockwise)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the anchoring block.<br/><br/>The Anchorfish rotates in a circle, the size of the circle and the direction in which the enemy will rotate is determined by the tile-variant that is placed in the level. The Anchorfish tile placed in the level editor marks where the pivot-point from which the enemy will rotate is, and it is also a solid block. All Achorfish start at their maximum radius above the pivot-point block, the small variant has a radius of two tiles, from the origin tile, and moves the fastest. Any form of contact will lead to player death.";
}
function tile175_b () // messsed up numbering...
{
	document.getElementById("tilename").innerHTML = "Anchorfish (Medium Radius and Clockwise)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the anchoring block.<br/><br/>The Anchorfish rotates in a circle, the size of the circle and the direction in which the enemy will rotate is determined by the tile-variant that is placed in the level. The Anchorfish tile placed in the level editor marks where the pivot-point from which the enemy will rotate is, and it is also a solid block. All Achorfish start at their maximum radius above the pivot-point block, the medium variant has a radius of four tiles, from the origin tile, and moves the second-fastest. Any form of contact will lead to player death.";
}
function tile176 ()
{
	document.getElementById("tilename").innerHTML = "Anchorfish (Large Radius and Clockwise)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the anchoring block.<br/><br/>The Anchorfish rotates in a circle, the size of the circle and the direction in which the enemy will rotate is determined by the tile-variant that is placed in the level. The Anchorfish tile placed in the level editor marks where the pivot-point from which the enemy will rotate is, and it is also a solid block. All Achorfish start at their maximum radius above the pivot-point block, the large variant has a radius of six tiles, from the origin tile, and moves the slowest. Any form of contact will lead to player death.";
}
function tile177 ()
{
	document.getElementById("tilename").innerHTML = "Anchorfish (Small Radius and Anti-Clockwise)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the anchoring block.<br/><br/>The Anchorfish rotates in a circle, the size of the circle and the direction in which the enemy will rotate is determined by the tile-variant that is placed in the level. The Anchorfish tile placed in the level editor marks where the pivot-point from which the enemy will rotate is, and it is also a solid block. All Achorfish start at their maximum radius above the pivot-point block, the small variant has a radius of two tiles, from the origin tile, and moves the fastest. Any form of contact will lead to player death.";
}
function tile178 ()
{
	document.getElementById("tilename").innerHTML = "Anchorfish (Medium Radius and Anti-Clockwise)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the anchoring block.<br/><br/>The Anchorfish rotates in a circle, the size of the circle and the direction in which the enemy will rotate is determined by the tile-variant that is placed in the level. The Anchorfish tile placed in the level editor marks where the pivot-point from which the enemy will rotate is, and it is also a solid block. All Achorfish start at their maximum radius above the pivot-point block, the medium variant has a radius of four tiles, from the origin tile, and moves the second-fastest. Any form of contact will lead to player death.";
}
function tile179 ()
{
	document.getElementById("tilename").innerHTML = "Anchorfish (Large Radius and Anti-Clockwise)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the anchoring block.<br/><br/>The Anchorfish rotates in a circle, the size of the circle and the direction in which the enemy will rotate is determined by the tile-variant that is placed in the level. The Anchorfish tile placed in the level editor marks where the pivot-point from which the enemy will rotate is, and it is also a solid block. All Achorfish start at their maximum radius above the pivot-point block, the large variant has a radius of six tiles, from the origin tile, and moves the slowest. Any form of contact will lead to player death.";
}
function tile180 ()
{
	document.getElementById("tilename").innerHTML = "Fixed Single Turret (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A turret with a fixed direction that reguarly fires singular bullets in said direction. Contact with either the bullets or the turret itself will lead to death.";
}
function tile181 ()
{
	document.getElementById("tilename").innerHTML = "Fixed Single Turret (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A turret with a fixed direction that reguarly fires singular bullets in said direction. Contact with either the bullets or the turret itself will lead to death.";
}
function tile182 ()
{
	document.getElementById("tilename").innerHTML = "Fixed Single Turret (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A turret with a fixed direction that reguarly fires singular bullets in said direction. Contact with either the bullets or the turret itself will lead to death.";
}
function tile183 ()
{
	document.getElementById("tilename").innerHTML = "Fixed Single Turret (Down)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A turret with a fixed direction that reguarly fires singular bullets in said direction. Contact with either the bullets or the turret itself will lead to death.";
}
function tile184 ()
{
	document.getElementById("tilename").innerHTML = "Fissure (Right and Cycle A)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the spawn-point tile.<br/><br/>Skull-headed creatures that leap out of the water into the air, with a maximum jump height of ten tiles above their spawn-point. The direction in which they jump and the timing cycle of said jump is controlled by the specific tile variant. Contact with the skull allows the player to bounce higher, any other form of contact will result in death. The tile placed in the editor marks the spawn-point from which the Fissures will continuously spawn from; they eventually despawn, or can be killed using spikes and other hazards.";
}
function tile185 ()
{
	document.getElementById("tilename").innerHTML = "Fissure (Left and Cycle A)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the spawn-point tile.<br/><br/>Skull-headed creatures that leap out of the water into the air, with a maximum jump height of ten tiles above their spawn-point. The direction in which they jump and the timing cycle of said jump is controlled by the specific tile variant. Contact with the skull allows the player to bounce higher, any other form of contact will result in death. The tile placed in the editor marks the spawn-point from which the Fissures will continuously spawn from; they eventually despawn, or can be killed using spikes and other hazards.";
}
function tile186 ()
{
	document.getElementById("tilename").innerHTML = "Fissure (Right and Cycle B)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the spawn-point tile.<br/><br/>Skull-headed creatures that leap out of the water into the air, with a maximum jump height of ten tiles above their spawn-point. The direction in which they jump and the timing cycle of said jump is controlled by the specific tile variant. Contact with the skull allows the player to bounce higher, any other form of contact will result in death. The tile placed in the editor marks the spawn-point from which the Fissures will continuously spawn from; they eventually despawn, or can be killed using spikes and other hazards.";
}
function tile187 ()
{
	document.getElementById("tilename").innerHTML = "Fissure (Left and Cycle B)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the spawn-point tile.<br/><br/>Skull-headed creatures that leap out of the water into the air, with a maximum jump height of ten tiles above their spawn-point. The direction in which they jump and the timing cycle of said jump is controlled by the specific tile variant. Contact with the skull allows the player to bounce higher, any other form of contact will result in death. The tile placed in the editor marks the spawn-point from which the Fissures will continuously spawn from; they eventually despawn, or can be killed using spikes and other hazards.";
}
function tile188 ()
{
	document.getElementById("tilename").innerHTML = "Musk";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>This enemy will slowly move towards the player, floating through the air and when close enough will charge rapidly at the player. Any form of contact will kill the player character.";
}
function tile189 ()
{
	document.getElementById("tilename").innerHTML = "Crunch (Small Radius)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>Chained up enemies that will charge at the player when the player comes close enough, only being stopped by the length of their chain, with this variant having a maximum charge radius of two tiles from the anchor-point. Any contact will result in death.";
}
function tile190 ()
{
	document.getElementById("tilename").innerHTML = "Crunch (Medium Radius)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>Chained up enemies that will charge at the player when the player comes close enough, only being stopped by the length of their chain, with this variant having a maximum charge radius of four tiles from the anchor-point. Any contact will result in death.";
}
function tile191 ()
{
	document.getElementById("tilename").innerHTML = "Crunch (Large Radius)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>Chained up enemies that will charge at the player when the player comes close enough, only being stopped by the length of their chain, with this variant having a maximum charge radius of six tiles from the anchor-point. Any contact will result in death.";
}
function tile192 ()
{
	document.getElementById("tilename").innerHTML = "Croast (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>Skull-headed birds that will idly fly in their respective direction, until they notice the player. They will then begin flying towards the player and swoop down to attack. Contact with the skull allows the player to bounce higher, but contact with any other part will resul in death.";
}
function tile193 ()
{
	document.getElementById("tilename").innerHTML = "Croast (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>Skull-headed birds that will idly fly in their respective direction, until they notice the player. They will then begin flying towards the player and swoop down to attack. Contact with the skull allows the player to bounce higher, but contact with any other part will resul in death.";
}
function tile194 ()
{
	document.getElementById("tilename").innerHTML = "Springboard";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/Movable: True<br/><br/>>A spring that can be bounced on by the player to reach much greater heights than a normal jump.";
}
function tile195 ()
{
	document.getElementById("tilename").innerHTML = "Tumor";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>Collectibles found in most levels of the game, with no more than one per screen/level. The total number of tumors collected act as lives in any level labeled as a dark world. Setting a level as a dark world level can be done by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference.";
}
function tile196 ()
{
	document.getElementById("tilename").innerHTML = "Cartridge";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>Collectible cartridges that unlock a new retro zone that can be played on the TV. These are usually found in secret areas, with one being obtained from every area/zone of the game.";
}
function tile197_202 ()
{
	document.getElementById("tilename").innerHTML = "???";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: ???<br/><br/>Movable: ???<br/><br/>Most likely unused and non-functional tiles that have no purpose.";
}
function tile203 ()
{
	document.getElementById("tilename").innerHTML = "Fissure (Up and Small Jump)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the spawn-point tile.<br/><br/>Skull-headed creatures that leap out of the water into the air, with a maximum jump height of ten tiles above their spawn-point. The direction in which they jump and the timing cycle of said jump is controlled by the specific tile variant. Contact with the skull allows the player to bounce higher, any other form of contact will result in death. The tile placed in the editor marks the spawn-point from which the Fissures will continuously spawn from; they eventually despawn, or can be killed using spikes and other hazards.";
}
function tile204 ()
{
	document.getElementById("tilename").innerHTML = "Fissure (Up and Large Jump)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, moves the spawn-point tile.<br/><br/>Skull-headed creatures that leap out of the water into the air, with a maximum jump height of ten tiles above their spawn-point. The direction in which they jump and the timing cycle of said jump is controlled by the specific tile variant. Contact with the skull allows the player to bounce higher, any other form of contact will result in death. The tile placed in the editor marks the spawn-point from which the Fissures will continuously spawn from; they eventually despawn, or can be killed using spikes and other hazards.";
}
function tile205 ()
{
	document.getElementById("tilename").innerHTML = "Pollution Cloud";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, leaving a temporary trail of pollution as it travels.<br/><br/>A cloud of pollution (the same as those spawned by the Gasper enemy), with a radius of four tiles from its spawn-point/center-tile (visually it appears as though it is 4.5 but hanging on a ledge in this lip-area does not have any effect). The player will slowly be damanged whilst in the pollution, eventually leading to death if in contact for too long. The time it takes for pollution to kill the player can be modified using the \"toxic_timer\" variable in the \"tilesets.txt\" file; view the Tilesets section for more information.";
}
function tile206 ()
{
	document.getElementById("tilename").innerHTML = "Mother";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False, attempting to move Mother enemies results in a variety of glitches.<br/><br/>When the player gets close to these enemeis they being to expand and multiply towards the player, only retracting when they are far enough away from the player character. Any form of contact will result in death.";
}
function tile207 ()
{
	document.getElementById("tilename").innerHTML = "Line-of-Sight Turret";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>When the player is in view of the turret, it will continuously track the player and fire singular bullets. Contact with either the bullets or the turret itself will lead to death. Furthermore, this turret can be reskinned to look like the spitting monsters seen in Retrograde, by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference.";
}
function tile208_213 ()
{
	document.getElementById("tilename").innerHTML = "Cannon";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, but the sprite will jitter about violently.<br/><br/>>Different coloured cannons that fire out projectiles towards the closest target tile of the same colour (no matching target tile will result in a game crash). The numbers on each cannon tile indicate at what interval they will fire at. The cannonballs themselves will kill the player on contact, however, the player is able to bounce off the top-side of the cannonballs to gain extra height in their jump.";
}
function tile214_219 ()
{
	document.getElementById("tilename").innerHTML = "Fireball Emitter";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>Different coloured fireball launchers that fire out projectiles towards the closest target tile of the same colour (no matching target tile will result in a game crash). The numbers on each fireball tile indicate at what interval they will fire at. The fireballs themselves will kill the player on contact and, unlike cannon balls, cannot be bounced off of.";
}
function tile220_222 ()
{
	document.getElementById("tilename").innerHTML = "Target";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True, Cannons and Fireball Emitters will adjust their aim as the target moves.<br/><br/>Cannons and Fireball Emitters will attempt to fire their shots at the closest target tile that matches their colour. For each colour of cannon/fireball there must be at least one matching target or the game will crash.";
}
function tile223 ()
{
	document.getElementById("tilename").innerHTML = "Fixed Burst Turret (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A turret with a fixed direction that reguarly fires five-round bursts of bullets in said direction. Contact with either the bullets or the turret itself will lead to death.";
}
function tile224 ()
{
	document.getElementById("tilename").innerHTML = "Fixed Burst Turret (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A turret with a fixed direction that reguarly fires five-round bursts of bullets in said direction. Contact with either the bullets or the turret itself will lead to death.";
}
function tile225 ()
{
	document.getElementById("tilename").innerHTML = "Fixed Burst Turret (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A turret with a fixed direction that reguarly fires five-round bursts of bullets in said direction. Contact with either the bullets or the turret itself will lead to death.";
}
function tile226 ()
{
	document.getElementById("tilename").innerHTML = "Fixed Burst Turret (Down)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A turret with a fixed direction that reguarly fires five-round bursts of bullets in said direction. Contact with either the bullets or the turret itself will lead to death.";
}
function tile227 ()
{
	document.getElementById("tilename").innerHTML = "Line-of-Sight V-Turret (Unused)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A turret that fires out two bullets at a time in the shape of a V, in the general direction of the player when it has line-of-sight. Contact with either the bullets or the turret itself will lead to death. This particular turret went unused in the final game, but is still fully-functional.";
}
function tile228 ()
{
	document.getElementById("tilename").innerHTML = "Rapid-Fire Line-of-Sight Turret";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>When the player is in view of the turret, it will continuously track the player and fire a constant spray of bullets. Contact with either the bullets or the turret itself will lead to death.";
}
function tile229 ()
{
	document.getElementById("tilename").innerHTML = "Predictive Line-of-Sight Turret (Unused)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>This turret attempts to predict the player&#8217;s movement and position to aim where it will shoot. Contact with either the bullets or the turret itself will lead to death. This particular turret went unused in the final game.";
}
function tile230 ()
{
	document.getElementById("tilename").innerHTML = "Kuko";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A bigger variant of the Kuko Jr. A floating spiky enemy, any form of contact will result in death.";
}
function tile231 ()
{
	document.getElementById("tilename").innerHTML = "Key";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A key collectible that when touched will go into the player&#8217;s inventory (top-right of the screen). If the player comes into contact with a lock tile whilst holding a key then the key will be lost and the lock tile, and all adjacent barrier tiles, will be destroyed.";
}
function tile232 ()
{
	document.getElementById("tilename").innerHTML = "Glowing Mushroom";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A decoration tile made to look like a mushroom that emits glowing light. (Only used in The Hollows area, in the game itself).";
}
function tile233 ()
{
	document.getElementById("tilename").innerHTML = "Agonyia";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>Floating, stationary, spiky balls attached to chains (used heavily throughout The Future / Dark Area levels). Any form of contact will result in death for the player.";
}
function tile234 ()
{
	document.getElementById("tilename").innerHTML = "Feral";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A variant of the Agonyia enemies that will slowly move towards the player character when close. Floating spiky balls attached to chains (used heavily throughout The Future / Dark Area levels). Any form of contact will result in death for the player.";
}
function tile235 ()
{
	document.getElementById("tilename").innerHTML = "Agon";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>Warning: Placing this enemy behind Solid (Overlay/Front) tiles will result in the game crashing, reason unknown.<br/><br/>A larger variant of the Agonyia enemies. Floating, stationary, spiky balls attached to chains (used heavily throughout The Future / Dark Area levels). Any form of contact will result in death for the player.";
}
function tile236 ()
{
	document.getElementById("tilename").innerHTML = "Charger (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A slug-like enemy that slowly moves in its respective direction, but when the player enters line-of-sight (usually by standing on the same platform as the Charger) the enemy will charge rapidly at the player; there is a small cooldown period after each charge. Any form of contact, both when moving normally and charging, will result in player death.";
}
function tile237 ()
{
	document.getElementById("tilename").innerHTML = "Charger (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A slug-like enemy that slowly moves in its respective direction, but when the player enters line-of-sight (usually by standing on the same platform as the Charger) the enemy will charge rapidly at the player; there is a small cooldown period after each charge. Any form of contact, both when moving normally and charging, will result in player death.";
}
function tile238 ()
{
	document.getElementById("tilename").innerHTML = "Drooper (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A larger variant of the Slag enemy. This enemy crawls slowly along the floor, in its respective directon (left or right), any form of contact with this enemy result in death for the player. Unlike the Slag, the Drooper does not have a variant allowing it to crawl along ceilings.";
}
function tile239 ()
{
	document.getElementById("tilename").innerHTML = "Drooper (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A larger variant of the Slag enemy. This enemy crawls slowly along the floor, in its respective directon (left or right), any form of contact with this enemy result in death for the player. Unlike the Slag, the Drooper does not have a variant allowing it to crawl along ceilings.";
}
function tile240 ()
{
	document.getElementById("tilename").innerHTML = "Gorger (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A larger variant of the Charger enemy. A slug-like enemy that slowly moves in its respective direction, but when the player enters line-of-sight (usually by standing on the same platform as the Gorger) the enemy will charge rapidly at the player; there is a small cooldown period after each charge. Any form of contact, both when moving normally and charging, will result in player death.";
}
function tile241 ()
{
	document.getElementById("tilename").innerHTML = "Gorger (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A larger variant of the Charger enemy. A slug-like enemy that slowly moves in its respective direction, but when the player enters line-of-sight (usually by standing on the same platform as the Gorger) the enemy will charge rapidly at the player; there is a small cooldown period after each charge. Any form of contact, both when moving normally and charging, will result in player death.";
}
function tile242 ()
{
	document.getElementById("tilename").innerHTML = "Retinara";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A stationary laser turret that will track the player when it has line-of-sight; whilst tracking it will charge up a laser and eventually instantly fire resulting in death for the player. Breaking line-of-sight will instantly reset the charging process.";
}
function tile243 ()
{
	document.getElementById("tilename").innerHTML = "X Floast";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A variant of the Floast enemy, it floats in the air and its skull can be bounced off of by the player. However, after bouncing on the skull it will break and kill the X Floast, meaning it is only a one-time use. Contact with any other part of the enemy will result in death.";
}
function tile244 ()
{
	document.getElementById("tilename").innerHTML = "Thistlefish (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A fish that swims through water, in its respective direction. When the player gets close the Thistlefish will being to rapidly charge at the player and is even capable of launching itself out of the water. If a Thistlefish ends up stuck on land it will bounce and flop around attempting to get back into water. Any contact with this enemy will kill the player.";
}
function tile245 ()
{
	document.getElementById("tilename").innerHTML = "Thistlefish (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>A fish that swims through water, in its respective direction. When the player gets close the Thistlefish will being to rapidly charge at the player and is even capable of launching itself out of the water. If a Thistlefish ends up stuck on land it will bounce and flop around attempting to get back into water. Any contact with this enemy will kill the player.";
}
function tile246 ()
{
	document.getElementById("tilename").innerHTML = "Wailer (Inflated)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>The Wailer is a ghost that will periodically inflate and deflate, only becoming dangerous and a threat when inflated. This particular variant will remain in its inflated state constantly and will never become safe/harmless. (This enemy is seen throughout Ruin and Acceptance)."
}
function tile247 ()
{
	document.getElementById("tilename").innerHTML = "Wailer (Cycle A)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>The Wailer is a ghost that will periodically inflate and deflate, only becoming dangerous and a threat when inflated. The number on the Wailer tile indicates what cycle it will inflate and deflate on. (This enemy is seen throughout Ruin and Acceptance)."
}
function tile248 ()
{
	document.getElementById("tilename").innerHTML = "Wailer (Cycle B)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>The Wailer is a ghost that will periodically inflate and deflate, only becoming dangerous and a threat when inflated. The number on the Wailer tile indicates what cycle it will inflate and deflate on. (This enemy is seen throughout Ruin and Acceptance)."
}
function tile249 ()
{
	document.getElementById("tilename").innerHTML = "Mine";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A stationary mine attached to a chain. When the player comes into contact with the mine they will be lauched in the opposite direction at an extremely fast speed. These tiles can be used both as obstacles to hinder the player, as well as tools to help the player through a level (gaining extra jump height, etc.)."
}
function tile250 ()
{
	document.getElementById("tilename").innerHTML = "Exit Warp";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: Trrue<br/><br/>These warps are found in all secret levels found within the game, and will warp the player back to the main path when entered. If an exit warp is entered whist on the main path / in a normal level then the player will be taken back to The End 1-1 (home)."
}
function tile251_253 ()
{
	document.getElementById("tilename").innerHTML = "NPC";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile can be assigned a variety of different NPCs that will be placed at the tile&#8217;s location, allowing for custom interactive characters. These NPCs can be assigned to the individual NPC tiles by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference. Furthermore new NPCs can be created, and existing ones modified, in the npcs.txt file, for more info about modifying NPCs see the NPCs section of the Modding Reference.";
}
function tile254 ()
{
	document.getElementById("tilename").innerHTML = "Tutorial Graphic (Basic Movement)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile will display one of the different tutorial graphics/instructions. This variant shows the basic movement controls, moving left and right, as well as jumping.";
}
function tile255 ()
{
	document.getElementById("tilename").innerHTML = "Tutorial Graphic (Jumping)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile will display one of the different tutorial graphics/instructions. This variant shows how holding the jump button will vary jump height.";
}
function tile256 ()
{
	document.getElementById("tilename").innerHTML = "Tutorial Graphic (Ledge Grabbing + Jumping)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile will display one of the different tutorial graphics/instructions. This variant shows info regarding grabbing on to ledges and performing the two types of jumps from ledges.";
}
function tile257 ()
{
	document.getElementById("tilename").innerHTML = "Glowing Mushroom (Small Double)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A decoration tile made to look like a mushroom that emits glowing light. This variant displays two smaller versions of the standard Glowing Mushroom. (Only used in The Hollows area, in the game itself).";
}
function tile258 ()
{
	document.getElementById("tilename").innerHTML = "Ring";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>The collectible rings seen throughout the retro cartridge levels.";
}
function tile259 ()
{
	document.getElementById("tilename").innerHTML = "Friend Head";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>The collectible head of the friend, can then be placeed on the stand/hook in The End 1-1.";
}
function tile260 ()
{
	document.getElementById("tilename").innerHTML = "Friend Body";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>The collectible body of the friend, can then be placeed on the stand/hook in The End 1-1.";
}
function tile261 ()
{
	document.getElementById("tilename").innerHTML = "Friend Heart";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>The collectible heart of the friend, can then be placeed on the stand/hook in The End 1-1.";
}
function tile262 ()
{
	document.getElementById("tilename").innerHTML = "Friend Stand/Hook";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>The stand/hook located in The End 1-1 where the different pieces of the friend can be placed.";
}
function tile263 ()
{
	document.getElementById("tilename").innerHTML = "???";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: ???<br/><br/>Movable: ???<br/><br/>An unused tile, most likely originally associated with the other friend tiles grouped in this section.";
}
function tile264 ()
{
	document.getElementById("tilename").innerHTML = "Acceptance Escape Ending";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: False<br/><br/>Ends the Acceptance escape sequence at the end of the game. It is found in the level Ruin 1.";
}
function tile265 ()
{
	document.getElementById("tilename").innerHTML = "Television and Console";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: False<br/><br/>The TV and Console, with posters on the wall, located in The End 1-1. This can be interacted with to enter the cartridge selection menu.";
}
function tile266 ()
{
	document.getElementById("tilename").innerHTML = "Solid Block with Gear";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A solid block with a gear decoration added onto it. These are used throughout The Machine to let the player distinguish the crushing blocks from the regular terrain.";
}
function tile267 ()
{
	document.getElementById("tilename").innerHTML = "Solid Block with Eye";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A solid block with a eye decoration added onto it. These are used throughout Golgotha to let the player distinguish the crushing blocks from the regular terrain.";
}
function tile268 ()
{
	document.getElementById("tilename").innerHTML = "Level Goal/Ending";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>The ending goal used in all the cartridge levels and triggers the cartridge ending/winner screen, as well as sending the player back to the cartridge menu.";
}
function tile269 ()
{
	document.getElementById("tilename").innerHTML = "Mega Tumor";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>Collectibles found in the various secret levels of each zone, with no more than one per secret screen/level. These tumor variants add five tumors instead of just one. The total number of tumors collected act as lives in any level labeled as a dark world. Setting a level as a dark world level can be done by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference.";
}
function tile270 ()
{
	document.getElementById("tilename").innerHTML = "Watcher";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: False<br/><br/>Slowly floats towards the player through the air; any form of contact will result in death for the player. (These enemies are only encountered in Nevermore).";
}
function tile271 ()
{
	document.getElementById("tilename").innerHTML = "Agonyia (Very Large)";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Enemy<br/><br/>Movable: True<br/><br/>A larger variant of the Agonyia enemies, even larger than the Agon variant. Floating, stationary, spiky balls attached to chains (used heavily throughout The Future / Dark Area levels). Any form of contact will result in death for the player. Additionally, this enemy can be reskinned to appear as Pus-Man; this can be done by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference.";
}
function tile272 ()
{
	document.getElementById("tilename").innerHTML = "Swarm of Flies";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A decorational effect to add more visual flare to a level, this tile has no impact on gameplay.";
}
function tile273 ()
{
	document.getElementById("tilename").innerHTML = "Jumping Insect";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: False<br/><br/>A decorational effect to add more visual flare to a level, this tile has no impact on gameplay.";
}
function tile274 ()
{
	document.getElementById("tilename").innerHTML = "Small Moving Grub";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: False<br/><br/>A decorational effect to add more visual flare to a level, this tile has no impact on gameplay.";
}
function tile275 ()
{
	document.getElementById("tilename").innerHTML = "Stationary Critter";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A decorational effect to add more visual flare to a level, this tile has no impact on gameplay.";
}
function tile276 ()
{
	document.getElementById("tilename").innerHTML = "Small Drone";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: False<br/><br/>A decorational effect to add more visual flare to a level, this tile has no impact on gameplay.";
}
function tile277 ()
{
	document.getElementById("tilename").innerHTML = "Small Fish";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: False<br/><br/>A decorational effect to add more visual flare to a level, this tile has no impact on gameplay.";
}
function tile278 ()
{
	document.getElementById("tilename").innerHTML = "Tentacle/Worm";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: True<br/><br/>A decorational effect to add more visual flare to a level, this tile has no impact on gameplay.";
}
function tile279 ()
{
	document.getElementById("tilename").innerHTML = "Friend and Giant Orb";
	document.getElementById("tiledesc").innerHTML = "Layer: Active<br/>Type: Basic<br/><br/>Movable: False<br/><br/>The Friend character attached to the giant orb, seen in Ruin 20 / Acceptance 1. Jumping inside will result in the transportation to Nevermore if the player has 450+ tumors.";
}
function tile042 ()
{
	document.getElementById("tilename").innerHTML = "Camera Bounds";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Every level must have two of these tiles within them to function correctly, they mark the boundaries of the camera rectangle. They can either be placed with one in the top-left corner of the camera area and the other in bottom-right or one in the bottom-left and the other in the top-right. All of the tiles within the resulting rectangle they create will be visible to the player when in the level, and anything outside will be out of the camera&#8217;s sights. If there are more than two camera bounds tiles in a level, the game will simply pick the two camera bounds that form the largest rectangle. It is considered good practice to make the resulting camera boudaries have approximately an 8:5 tile ratio inside.";
}
function tile043 ()
{
	document.getElementById("tilename").innerHTML = "Debug Spawn Point";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Most likely used during the game&#8217;s development to spawn at certain locations easily for testing, this tile is useless without access to debug commands.";
}
function tile044 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile045 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile046 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile047 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Down)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile048 ()
{
	document.getElementById("tilename").innerHTML = "Move Change Direction (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to redirect and guide movable objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied.";
}
function tile049 ()
{
	document.getElementById("tilename").innerHTML = "Move Change Direction (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to redirect and guide movable objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied.";
}
function tile050 ()
{
	document.getElementById("tilename").innerHTML = "Move Change Direction (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to redirect and guide movable objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied.";
}
function tile051 ()
{
	document.getElementById("tilename").innerHTML = "Move Change Direction (Down)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to redirect and guide movable objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied.";
}
function tile052 ()
{
	document.getElementById("tilename").innerHTML = "Move Extension";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>This tile can be used to extend the area a movement instruction/trigger impacts. This is done by joining the two areas that should both be effected with a line of these tiles; this could be used to, for example, make two buildings fall at the same time even if the player only walks on one of them. These tiles are not effected by movement instructions and do not act as triggers themselves, so the player walking through them will not trigger the desired movement effect.";
}
function tile053 ()
{
	document.getElementById("tilename").innerHTML = "Falling Movement (Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>All tiles with a this tag will begin falling downward at the specified speed, based on the variant chosen.";
}
function tile054 ()
{
	document.getElementById("tilename").innerHTML = "Falling Movement (Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>All tiles with a this tag will begin falling downward at the specified speed, based on the variant chosen.";
}
function tile055 ()
{
	document.getElementById("tilename").innerHTML = "Falling Movement (Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>All tiles with a this tag will begin falling downward at the specified speed, based on the variant chosen.";
}
function tile056 ()
{
	document.getElementById("tilename").innerHTML = "Falling Movement Trigger (Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player comes into contact with this tile all connnected tiles with a falling movement trigger will begin falling downward at the specified speed.";
}
function tile057 ()
{
	document.getElementById("tilename").innerHTML = "Falling Movement Trigger (Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player comes into contact with this tile all connnected tiles with a falling movement trigger will begin falling downward at the specified speed.";
}
function tile058 ()
{
	document.getElementById("tilename").innerHTML = "Falling Movement Trigger (Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player comes into contact with this tile all connnected tiles with a falling movement trigger will begin falling downward at the specified speed.";
}
function tile059 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Right and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile060 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Left and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile061 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Up and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile062 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Down and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile063 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Right and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile064 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Left and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile065 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Up and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile066 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Down and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile067 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Right and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile068 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Left and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile069 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Up and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile070 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration (Down and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>TMovable: False<br/><br/>hese tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed.";
}
function tile071 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Right and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile072 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Left and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile073 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Up and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile074 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Down and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile075 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Right and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile076 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Left and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile077 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Up and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile078 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Down and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile079 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Right and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile080 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Left and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile081 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Up and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile082 ()
{
	document.getElementById("tilename").innerHTML = "Move No Acceleration With Pause (Down and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Unlike the other variant of move instructions, these ones will not apply acceleration, so the object will move at a fixed/constant speed. Furthermore, a short pause will be added before a directional change takes effect.";
}
function tile083 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Right and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile084 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Left and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile085 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Up and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile086 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Down and Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile087 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Right and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile088 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Left and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile089 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Up and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile090 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Down and Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile091 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Right and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile092 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Left and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile093 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Up and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile094 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Down and Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will being moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile095 ()
{
	document.getElementById("tilename").innerHTML = "Do Not Move Background";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any movement instructions adjacent to this tile will exclude the background layers from being moved, so they will remain where they are.";
}
function tile096 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile097 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile098 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile099 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Down)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile100 ()
{
	document.getElementById("tilename").innerHTML = "Stop";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When a moving object comes into contact with this tile it will stop moving and remain there.";
}
function tile101 ()
{
	document.getElementById("tilename").innerHTML = "Destroy/Kill";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When a moving object comes into contact with this tile it will be destroyed/killed.";
}
function tile102_105 ()
{
	document.getElementById("tilename").innerHTML = "Spawner";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the switch tile with the corresponding number is pressed, blocks will be spawned wherever this tile is located.";
}
function tile106_109 ()
{
	document.getElementById("tilename").innerHTML = "Despawner";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the switch tile with the corresponding number is pressed, blocks will be despawned wherever this tile is located.";
}
function tile110 ()
{
	document.getElementById("tilename").innerHTML = "Button Save State (Unused)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Originally used as an indicator for the game to save the current button state for the currently active level. However, this feature is now unused and non-functional.";
}
function tile111 ()
{
	document.getElementById("tilename").innerHTML = "Warp Point";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>A warp point where the player will be teleported/warped too.";
}
function tile112 ()
{
	document.getElementById("tilename").innerHTML = "Movement Wrap";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any movement instruction tiles with this tile attached/adjacent will make the object wrap around when it has exited the screen. For example, if an object went off the left side of the screen they would return on the right side of the screen, still moving in the same direction.";
}
function tile113 ()
{
	document.getElementById("tilename").innerHTML = "Do Not Move Tiles";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any movement instructions adjacent to this tile will exclude the tile/active layer from being moved, so they will remain where they are.";
}
function tile114 ()
{
	document.getElementById("tilename").innerHTML = "Do Not Move Overlay";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any movement instructions adjacent to this tile will exclude the overlay/Tag layer from being moved, so they will remain where they are.";
}
function tile115 ()
{
	document.getElementById("tilename").innerHTML = "Ascending Movement Trigger (Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player comes into contact with this tile all connnected tiles with an ascending movement trigger will begin ascending at the specified speed.";
}
function tile116 ()
{
	document.getElementById("tilename").innerHTML = "Ascending Movement Trigger (Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player comes into contact with this tile all connnected tiles with an ascending movement trigger will begin ascending at the specified speed.";
}
function tile117 ()
{
	document.getElementById("tilename").innerHTML = "Ascending Movement Trigger (Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player comes into contact with this tile all connnected tiles with an ascending movement trigger will begin ascending at the specified speed.";
}
function tile118 ()
{
	document.getElementById("tilename").innerHTML = "Weighted Movement Trigger (Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player stands on top of a tile with this tag/trigger, it and all connected tiles with the trigger will begin falling down at the specified speed. When the player is no longer standing on the tile(s) they will begin ascending upwards until they come into contact with a stop tile.";
}
function tile119 ()
{
	document.getElementById("tilename").innerHTML = "Weighted Movement Trigger (Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player stands on top of a tile with this tag/trigger, it and all connected tiles with the trigger will begin falling down at the specified speed. When the player is no longer standing on the tile(s) they will begin ascending upwards until they come into contact with a stop tile.";
}
function tile120 ()
{
	document.getElementById("tilename").innerHTML = "Weighted Movement Trigger (Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player stands on top of a tile with this tag/trigger, it and all connected tiles with the trigger will begin falling down at the specified speed. When the player is no longer standing on the tile(s) they will begin ascending upwards until they come into contact with a stop tile.";
}
function tile121 ()
{
	document.getElementById("tilename").innerHTML = "Sine Movement (Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any objects that are intructed to move by a movement instruction/trigger that is attatched to this tile, will move at a sine wave based rate. The more of these tiles that are added the more of an impact they will have.";
}
function tile122 ()
{
	document.getElementById("tilename").innerHTML = "Sine Movement (Medium)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any objects that are intructed to move by a movement instruction/trigger that is attatched to this tile, will move at a sine wave based rate. The more of these tiles that are added the more of an impact they will have.";
}
function tile123 ()
{
	document.getElementById("tilename").innerHTML = "Sine Movement (Fast)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any objects that are intructed to move by a movement instruction/trigger that is attatched to this tile, will move at a sine wave based rate. The more of these tiles that are added the more of an impact they will have.";
}
function tile124 ()
{
	document.getElementById("tilename").innerHTML = "Crushing Block (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any tiles with this trigger/tag attached will act as normal, but when the player moves in front of the tile(s) specified path, it will rapidly move towards the player and only stop when solid ground is hit. Once it has stopped the tiles will slowly move back into their original position. (This tag is used to create the crushing block traps seen in The Machine).";
}
function tile125 ()
{
	document.getElementById("tilename").innerHTML = "Crushing Block (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any tiles with this trigger/tag attached will act as normal, but when the player moves in front of the tile(s) specified path, it will rapidly move towards the player and only stop when solid ground is hit. Once it has stopped the tiles will slowly move back into their original position. (This tag is used to create the crushing block traps seen in The Machine).";
}
function tile126 ()
{
	document.getElementById("tilename").innerHTML = "Crushing Block (Up)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any tiles with this trigger/tag attached will act as normal, but when the player moves in front of the tile(s) specified path, it will rapidly move towards the player and only stop when solid ground is hit. Once it has stopped the tiles will slowly move back into their original position. (This tag is used to create the crushing block traps seen in The Machine).";
}
function tile127 ()
{
	document.getElementById("tilename").innerHTML = "Crushing Block (Down)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any tiles with this trigger/tag attached will act as normal, but when the player moves in front of the tile(s) specified path, it will rapidly move towards the player and only stop when solid ground is hit. Once it has stopped the tiles will slowly move back into their original position. (This tag is used to create the crushing block traps seen in The Machine).";
}
function tile128 ()
{
	document.getElementById("tilename").innerHTML = "Crushing Block (All)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>Any tiles with this trigger/tag attached will act as normal, but when the player moves in front of any of the tile&#8217;s sides, it will rapidly move towards the player and only stop when solid ground is hit. Once it has stopped the tile(s) will now remain in their new position and will not return to where they once were. (This tag is used to create the multi-directional crushing block traps seen in Golgotha).";
}
function tile129 ()
{
	document.getElementById("tilename").innerHTML = "Wind / Gravitational Pull (Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When this tag is placed inside a level the player will constantly be slowly pushed in the specified direction. (This tag is used in the end stages of Ruin and the start of Acceptance).";
}
function tile130 ()
{
	document.getElementById("tilename").innerHTML = "Wind / Gravitational Pull (Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When this tag is placed inside a level the player will constantly be slowly pushed in the specified direction. (This tag is used in the end stages of Ruin and the start of Acceptance).";
}
function tile131 ()
{
	document.getElementById("tilename").innerHTML = "Background";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>This tag is used to set the relative position of the background image in the level. It is most commonly placed near the bottom-right corner of a level&#8217;s camera bounds.";
}
function tile132 ()
{
	document.getElementById("tilename").innerHTML = "Foreground";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>This tag is used to set the relative position of the foreground image in the level. It is most commonly placed near the bottom-right corner of a level&#8217;s camera bounds.";
}
function tile133 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Right and Very Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will begin moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile134 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Left and Very Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will begin moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile135 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Up and Very Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will begin moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile136 ()
{
	document.getElementById("tilename").innerHTML = "Move With Pause (Down and Very Slow)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles can be used to create paths to guide and move objects/enemies, etc. around a level. If an object collides with a movement tile then it will begin moving in the direction marked on the tile and will not stop until new movement instructions are supplied. Furthermore, a short pause will be added before a directional change takes effect, this pause is smoothed out by the object slowing and down and then accelerating once more when it begins moving again.";
}
function tile137_and_141 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Top-Right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile138_and_142 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Bottom-right)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile139_and_143 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Top-Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile140_and_144 ()
{
	document.getElementById("tilename").innerHTML = "Map/Level Transition (Bottom-Left)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>These tiles mark entrances into a given level, the directional arrows specify which direction the player is entering the map from, allowing for the world map made up of different levels to connect together. They also act as exits to other levels, the opposite direction to the one shown specifies which direction the player is leaving from. If a level has no level transition tiles then there is no way to leave and travel to connected areas, leaving the player stuck.";
}
function tile145 ()
{
	document.getElementById("tilename").innerHTML = "Warp Point (Leave Area)";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When the player goes through an exit warp (usually found at the end of a secret level) or selects the \"Leave Area\" option from the menu, they will be teleported to the last warp point tile that they encountered.";
}
function tile146 ()
{
	document.getElementById("tilename").innerHTML = "???";
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: ???<br/><br/>An unused and non-functional tile, its previous purpose is unknown.";
}
function tile147 ()
{
	document.getElementById("tilename").innerHTML = "Checkpoint"
	document.getElementById("tiledesc").innerHTML = "Layer: Tag<br/>Type: Tag<br/><br/>Movable: False<br/><br/>When/if the player dies they will be respawned at the checkpoint nearest to the entrance they used to enter the level.";
}
function tile148 ()
{
	document.getElementById("tilename").innerHTML = "Water"
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Liquid<br/><br/>Movable: True<br/><br/>A tile made out of water, the player character is able to swim through the water using the jump and duck/crouch keys.";
}
function tile149 ()
{
	document.getElementById("tilename").innerHTML = "Polluted Water"
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Liquid<br/><br/>Movable: True<br/><br/>A tile made out of water, the player character is able to swim through the water using the jump and duck/crouch keys. This variant of water will damage the player whilst they are submerged and will eventually kill the player. This property is the same to that of the pollution clouds, except the player is able to swim through these tiles.";
}
function tile150 ()
{
	document.getElementById("tilename").innerHTML = "Lava"
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Liquid<br/><br/>Movable: True<br/><br/>A tile made out of lava, any form of contact with this tile will result in death for the player.";
}
function tile151 ()
{
	document.getElementById("tilename").innerHTML = "Water (Until Bottom)"
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Liquid<br/><br/>Movable: True<br/><br/>A tile made out of water, the player character is able to swim through the water using the jump and duck/crouch keys. This variant will make all tiles below it into water as well, resulting in less time being spent placing large quantities of tiles.";
}
function tile152 ()
{
	document.getElementById("tilename").innerHTML = "Polluted Water (Until Bottom)"
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Liquid<br/><br/>Movable: True<br/><br/>A tile made out of water, the player character is able to swim through the water using the jump and duck/crouch keys. This variant of water will damage the player whilst they are submerged and will eventually kill the player. This property is the same to that of the pollution clouds, except the player is able to swim through these tiles. Furthermore, this tile will make all tiles below it into polluted water as well, resulting in less time being spent placing large quantities of tiles.";
}
function tile153 ()
{
	document.getElementById("tilename").innerHTML = "Lava (Until Bottom)"
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Liquid<br/><br/>Movable: True<br/><br/>A tile made out of lava, any form of contact with this tile will result in death for the player. This variant will make all tiles below it into lava as well, resulting in less time being spent placing large quantities of tiles.";
}
function tile154 ()
{
	document.getElementById("tilename").innerHTML = "Solid (Overlay/Front)"
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile is exactly the same as the standard solid tile; however, it acts as though it were an overlay/front tile, meaning it will ignore movement instructions if a \"Do Not Move Overlay\" tag tile is attached to the move instruction.";
}
function tile155 ()
{
	document.getElementById("tilename").innerHTML = "Gravitational Pull Beam"
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Basic<br/><br/>Movable: False<br/><br/>This tile acts very similar to water, allowing the player to swim through it with the same controls. The difference is that this tile will constantly apply an unpward force to the player, pushing them higher. (This tile is made use of throughout The Machine).";
}
function tile156 ()
{
	document.getElementById("tilename").innerHTML = "Particle Generator (Overlay/Front)";
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile can be assigned a variety of different particle effects that will be spawned from the tile&#8217;s location, allowing for more detailed levels. These particles can be assigned to the individual particle spawner tiles by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference. Furthermore new particles can be created, and existing ones modified, in the particles.txt file, for more info about modifying particles see the Particles section in the Modding Reference";
}
function tile157 ()
{
	document.getElementById("tilename").innerHTML = "Fake Solid (Overlay/Front)"
	document.getElementById("tiledesc").innerHTML = "Layer: Overlay<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile is exactly the same as the standard fake solid tile; however, it acts as though it were an overlay/front tile, meaning it will ignore movement instructions if a \"Do Not Move Overlay\" tag tile is attached to the move instruction.";
}
function tile280_300 ()
{
	document.getElementById("tilename").innerHTML = "Modular Background 1 Piece";
	document.getElementById("tiledesc").innerHTML = "Layer: Back 1<br/>Type: Basic<br/><br/>Movable: True<br/><br/>One of many modular background tiles that can be used in conjunction with the other pieces to create unique backgrounds for levels. These pieces sit infront of the background 2 layer and the level&#8217;s background image.";
}
function tile301_304 ()
{
	document.getElementById("tilename").innerHTML = "Decoration (Background 1)";
	document.getElementById("tiledesc").innerHTML = "Layer: Back 1<br/>Type: Basic<br/><br/>Movable: True<br/><br/>This tile can be assigned a variety of special non-interactive decorations that will appear in game as part of the background 1 layer, allowing for more detailed levels. These pieces sit infront of the background 2 layer and the level&#8217;s background image. These decorations can be assigned to the individual decoration tiles by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference.";
}
function tile313_333 ()
{
	document.getElementById("tilename").innerHTML = "Modular Background 2 Piece";
	document.getElementById("tiledesc").innerHTML = "Layer: Back 2<br/>Type: Basic<br/><br/>Movable: False<br/><br/>One of many modular background tiles that can be used in conjunction with the other pieces to create unique backgrounds for levels. These pieces sit behind the background 1 layer and infront of the level&#8217;s background image.";
}
function tile334_337 ()
{
	document.getElementById("tilename").innerHTML = "Decoration (Background 2)";
	document.getElementById("tiledesc").innerHTML = "Layer: Back 2<br/>Type: Basic<br/><br/>Movable: False<br/><br/>This tile can be assigned a variety of special non-interactive decorations that will appear in game as part of the background 2 layer, allowing for more detailed levels. These pieces sit behind the background 1 layer and infront of the level&#8217;s background image. These decorations can be assigned to the individual decoration tiles by modifying the tilesets.txt file, for more info about modifying tilesets see the Tilesets section in the Modding Reference.";
}
function tile305_312 ()
{
	document.getElementById("tilename").innerHTML = "???";
	document.getElementById("tiledesc").innerHTML = "Layer: Back 2<br/>Type: ???<br/><br/>Movable: ???<br/><br/>Most likely unused and non-functional tiles that have no purpose.";
}