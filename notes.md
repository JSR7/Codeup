# Notes

## Tools

Create an account at:

* [Typing IO](https://typing.io/)
* [Shortcut Foo](https://www.shortcutfoo.com)

## Useful links

* [Markdown](https://en.support.wordpress.com/markdown-quick-reference/)

## Vocabulary

* `markdown`, is a language similar to html, it is used to describe the structure of a document. The advantage is its syntax is shorter.
* `prompt`, the text before the cursor on a terminal
* `CDN`. Content Delivery Network.


## Terminal Commands

* `pwd`. Print Working Directory
* `cd`. Change directory
* `whoami`. Who am I? What's my user name.
* `mv <origin> <target>` Move a directory or a file to a specific location (target)
* `man <command>` Manual for any terminal command

## Character sets

* Repertoire. It's the set of numeric representations of characters
* Glyph. It's the visual representation of a character
* Character set. It's the numeric range used to represent characters (called code points)
* ASCII. First standard that used a range between  0 adn 255
* UNICODE supports a wider range

## Git

* **VCS**. Versioning Control System

* Snapshot -> Commits
    * Your name, your email, the date, message, identifier (hash)
* Repository -> folder, your code + git information (history of your code)

### Basic commands

* `git init` initializes a git repository
* `git status` Outputs the current state of your repository
* `git add <file_name>` Start tracking this file with Git
* `git commit -m "message here"` Commit some changes
* `git remote add origin git@github.com:CodeupClassroom/pinnacles_html.git` This is how you add a remote


## Github

* Remote. A remote git repository

## HTML elements

### Classification

* Block elements -> br p, div 
* Inline elements -> em, strong, span
* Void elements -> br, hr

* Elements can have attributes. Attributes describe properties for that element

- **Required**
    - img -> src
    - meta -> charset
- **Optional** -> id, class

An HTML file can have several states

These are related to syntax
* Well-formed
* Mal-formed

These are related to the standard
* Valid 
* Invalid

The value of some attributes is optional, for instance disabled in input.
The quotes are also optional unless the value has a space

## Servers paths

The root folder of a server, usually is not the same as the root folder of the machine
For our projects the root of the server is directory where our HTML pages are. For instance `pinnacles_html`. This folder is called the **public directory** 

### Paths

* Absolute paths. It starts with a /
* Relative paths


## Brew and tree

To install [brew](https://brew.sh/) run:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

To install tree run:

```
brew install tree
```

`tree` can be executed to colorize files and folders for easier distinction using the `tree -C` flag. For more options run `man tree`

## Protocols

**HTTP** - Hyper-Text Transfer Protocol

### HTTP Messages

2 parts
* Header
* Body

2 types of messages
* Request   -> Client-side -> Browser
* Response  -> Server-side -> Web server

### HTTP verbs (methods)

GET   -> Read - Download
POST  -> Write - Sending data

### Query string

`key = value` -> key-value pair

Some examples are:

* attributes in html elements
* GET parameters in query strings
* POST parameters in the body of a request

Example:

`?search_query=javascript`


## CSS


3 different ways to style an HTML

* **Inline styles**. You use the style HTML attribute directly in the element
* **Embedded styles**. You need to create a style element in the head section of your document
* **External stylesheets**. You need to use the link element to link the current document to the external stylesheet

### CSS selectors

* element. We use the tag name.
* ID. This one is for unique elements on a page.
* class. This one is for several elements with similar visual presentation.

### Specificity

Prioritize the rules based on the different types of selectors.

1. ID
1. class
1. element

# Pseudo-classes

They represent state on an element. for instance the states of a link (anchor tag).

* `:link`
* `:hover`
* `:visited`
* `:active`

## Properties

* Text properties
* Font properties
    * Serif
    * Sans serif
    * Monospaced
* Background properties
* List properties

## Box model

* Everything is a box in page
* That defines the position of the elements on a page
* Space -> Size
    * width, padding, border. -> Size
    * total width = width + padding + border
    * total height = height + padding + border
* Margin
* `box-sizing: content-box` normalizes the width of block level elements, so
that all of them respect the width defined by the `width` property.

## Responsive design

* What's a reset CSS file
    * UA stylesheet
* Different types of layouts
    * Fixed (pixels)
    * Fluid (percentages)
    * Responsive (change order of elements, hide/show elements)
* Device Independent Pixels (Device Pixel Ratio) vs Hardware pixels
    * Calculating CSS pixels
* The viewport `<meta name="viewport" content="width=device-width, initial-scale=1">`
* Specific resets for responsive designs
    * Fluid Images
```css
img, embed, object, video {
    max-width: 100%;
}
```

* Touch targets

```css
nav a, button {
    min-height: 48px;
    min-width: 48px;
}
```
* Media queries. They are external stylesheets or CSS rules that are applied
conditionally according to the current viewport.
