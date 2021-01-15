# Manual Syntax

This manual references and deals with a variety of different types of data regarding The End is Nigh. As a result, it is important that this data can be spotted and understood easily during reading and not mistaken for regular text. To make this a possibility different rules about syntax and formatting have been put into place, the following sections outline these rules and where they will apply.

## Variables/Data

Case-sensitive and important data values, variable names, etc. will be formatted like so:

```variable_name_or_value```

Using this clear, monospace, font allows for such values to easily stand out in large blocks of text, as well as allowing for the case of each letter to be clearly visisble; this is important as such variable names will often be case-sensitive. Note file paths, and directories, are also formatted using this method; for example:<br/><br/>

```audio\sfx\npc.wav```

This is a standard way of representing file paths and should be easily understandable.

## Code/Files

The End is Nigh makes use of many external data files to store important information for the game. Excerpts from these files will be formatted like so:

```c
example_code {
some_value
<mark>value_of_importance</mark>
etc
}
```
This is done for similar reasons to variables/data (hence the similar formatting). Furthermore, values of extreme importance, relevant to the current topic, will be highlighted. As can be seen on line 3 of the example code above.

When an ellipsis is used in an exerpt from one of the game's many files, it means that there is extra data that has been omitted due to lack of relevance. This allows readers to see that what is being shown is only a small section of a larger piece of data.

When an ellipsis is used in a piece of examply syntax it means that the data can carry on after what is being shown, representing that the variable can take multiple values.


## Memory Addresses

When dealing with executable hacking, memory addresses are an important aspect, they are formatted the same as variables but are written out in hexadecimal, this is noted by the prefix <span class="variable">0x</span>. Memory addresses, being referenced in-line, will often look like the following:<br/><br/>

```asm
0x20ADC108: ...
```

However, lists of memory addresses will be formatted in a similar fashion to code/files:
				
```asm
0x20ADC108: ...
0x22CBFB12: ...
0x124A0802: ...
```
				
With the value stored at the memory address written after the colon (where the ellipsis is present in the examples).
				
## Tile References
			
Tiles will often be refferred to using the following ID formatting: Z1, Z1 - 3, etc. These IDs, consisting of letters and numbers, refer to the specific location the tile can be found at in the [Tile Reference](./reference/tiles.md). The number refers to the horizontal position in the table and the letter referes to the vertical position. When a hypen is present between two tile values it means all tiles within that given range are being referred to.

This method is used as it makes looking-up the tiles much easier than having to search through the reference for a specific name to appear.
			