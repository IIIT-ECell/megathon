
# CSS Documentation
Materialize CSS has been used as the backing framework, with a custom-materialize.css stylesheet to:
1. Modify default materialize look and feel
2. Setup own materialize-like [OOCSS][] mini framework as per needs. [Link](#custom)
3. Regular conventional styling of elements

[OOCSS]: http://clubmate.fi/oocss-acss-bem-smacss-what-are-they-what-should-i-use/#Object_Oriented_CSS_OOCSS

## Custom
### Layout: Single Column
There are two custom single-row/column classes based on flexbox, with align-content modifier classes.

#### Single-Column Row
##### Container-level
`.align-box`: Apply to the container class. Generates a single column layout that's horizontally centered

`.right` and `left`: Generates a single column layout that's aligned to the right or left accordingly

##### Element level
`.right` and `left`: Apply to individual elements in the container. Aligns it to the right or left accordingly

#### Single-Row Column
##### Container-level
`.align-box-h`: Apply to the container class. Generates a single row layout that's horizontally and vertically centered

`right` and `.left`: Generates a single row layout that's aligned to the right or left accordingly

### Components
#### Fixed height image container
`.fixh-container`: has a default height of *15rem*, with overflow hidden and overflow-wrap as break-word. Options to change height should be added

#### Fixed width and height image container
`.fixwh-container`: has a default height of *4rem* and default width of *16rem*, with overflow hidden and overflow-wrap as break-word. Options to change height should be added

Has a `stout` option to reduce width

#### Object-fit generic image classes for upper
`.of`: Default, fits as a contain
`.of .cover`: Object fit as cover, like in background-image

### Font Classes
Right now, only two custom font stacks are defined. Should be updated to use a native font stack

**Default fallback**: "Helvetica Neue",Helvetica,Arial,sans-serif
- **Bebas Neue**
- **Norwester**

### Opacity classes
Set an opacity for elements applied to, numbered from `.opacity-1` to `.opacity-9` in integral progression for 0.1 - 0.9 opacity
