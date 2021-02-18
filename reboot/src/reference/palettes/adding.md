# Adding Palettes
In its default state, the palettes file can only store 64 unique palette entries
(rows). However, this can be changed by modifying aspects of certain shader,
which can be located in the "shaders\" directory of the unpacked data. Two
specific shaders will need to be modified for this to work "colormapped.shader"
and "colormapped_duplicatedforstupidreasons.shader", as these shaders control
how colours from the palette are mapped to colours used by the game's assets.

Open both palettes in any text editor (Notepad, Notepad++, Sublime-Text, etc.)
and you will see the following text:

## colormapped:

```c
#version 130

uniform mat2x4 color_xform;
uniform sampler2D palettetex;
uniform float palette;

#if COMPILING_VERTEX_PROGRAM

    void vert(){
        //gl_FrontColor = gl_Color * color_xform[0] + color_xform[1];
        vec4 outcolor = gl_Color * color_xform[0] + color_xform[1];
        gl_FrontColor = vec4(texture(palettetex, vec2((outcolor.r*15.0+.5)/16.0,(palette+.5)/64.0)).rgb,
        outcolor.a);
        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
    }

#elif COMPILING_FRAGMENT_PROGRAM

    void frag(){
        gl_FragColor = gl_Color;
    }

#endif 
```

## colormapped_duplicatedforstupidreasons

```c
#version 130

uniform mat2x4 color_xform;
uniform sampler2D palettetex;
uniform float palette;

#if COMPILING_VERTEX_PROGRAM

    void vert(){
        //gl_FrontColor = gl_Color * color_xform[0] + color_xform[1];
        vec4 outcolor = gl_Color * color_xform[0] + color_xform[1];
    
        gl_FrontColor = vec4(texture(palettetex, vec2((outcolor.r*15.0+.5)/16.0,(palette+.5)/64.0)).rgb,
        outcolor.a);
        if(outcolor.r < .1 && outcolor.g < .1 && outcolor.b > .9){
            gl_FrontColor = vec4(0.0,0.0,0.0, outcolor.a);
        }
        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
    }

#elif COMPILING_FRAGMENT_PROGRAM

    void frag(){
        gl_FragColor = gl_Color;
    }

#endif
```

The highlighted values are the important ones, the 16.0 is the number of columns 
in the palette file (width) and the 64.0 is the number of rows in the palette
file (height). The height is the only value that needs to be modified, simply
change this value in both shaders to the number of however many palettes you
would like, make sure this matches your palette file itself. Now the new palette
row number (64 onwards) needs to simply be referenced in the "tilesets.txt" file
for the area that will use the new palette (see the [Modifying Palettes](./modifying.md) section
if you do not know how to set a palette for an area), and that is all that needs
to be done to add more palette rows to the game.

For more information regarding shaders, click here. 

