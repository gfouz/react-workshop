---
title:  CSS BEM. 
author: Giovani Fouz Jiménez.
description: CSS Architecture...
img: bem.jpg
position: top
date: march 30, 2022
---

## BEM.
When it comes to finding the right class name, it can quickly drive you to despair. 
Even the most experienced CSS developers don't always find the right class name right away.
The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

Here’s an example of what a CSS developer writing in the BEM style might write:
```css

/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}

```
In this CSS methodology a block is a top-level abstraction of a new component, for example a button: .btn { }. This block should be thought of as a parent. Child items, or elements, can be placed inside and these are denoted by two underscores following the name of the block like .btn__price { }. Finally, modifiers can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like btn--orange.

The markup might then look like this:
```html
 <a class="btn btn--big btn--orange" href="https://css-tricks.com">
  <span class="btn__price">$9.99</span>
  <span class="btn__text">Subscribe</span>
</a>
```
If another developer wrote this markup, and we weren’t familiar with the CSS, we should still have a good idea of which classes are responsible for what and how they depend on one another. Developers can then build their own components and modify the existing block to their heart’s content. Without writing much CSS, developers are potentially capable of creating many different combinations of buttons simply by changing a class in the markup.

## Why should we consider BEM?
If we want to make a new style of a component, we can easily see which modifiers and children already exist. We might even realize we don’t need to write any CSS in the first place because there is a pre-existing modifier that does what we need.
If we are reading the markup instead of CSS, we should be able to quickly get an idea of which element depends on another (in the previous example we can see that .btn__price depends on .btn, even if we don’t know what that does just yet.)
Designers and developers can consistently name components for easier communication between team members. In other words, BEM gives everyone on a project a declarative syntax that they can share so that they’re on the same page.