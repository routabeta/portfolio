---
title: Checkers AI
description: A browser Checkers AI game using a minimax agent with alpha-beta pruning to play optimally.
date: 2023-09-01
tech: ["Python", "Flask"]
slug: checkers_ai
heroImage: /checkers_ai.png
heroAlt: A game position against my AI
repoLink: https://github.com/routabeta/Checkers-AI/
demoLink: https://www.youtube.com/watch?v=b2iJv0at5Rs
---

## Project Overview

I coded a browser AI checkers game that uses a Flask RESTful API and a minimax algorithm.

Check out the demo for a video of the game!

---

## Design Process

I started by doing research on game theory algorithms, settling on a minimax algorithm with alpha-beta pruning as a good idea to build. I created the fundamental elements for the game loop, including the minimax simulation. Designing the cost function required a bit of research into the game theory behind Checkers until I found something that performed optimally. I then added the alpha-beta pruning to decrease decision-tree exploration time by over 60%! I really enjoyed learning about the tree algorithm behind this idea.

Creating player interaction was tricky as I had no experience with web dev. I followed some tutorials to create a basic Flask API to link the client and server side.

---

## Skills and Tools

I learned about:
- Game theory!
- Full-stack app architecture
- Git version control and repositories

I used these tools:
- Python
- Git
