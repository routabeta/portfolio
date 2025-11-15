---
title: Fuzzy Line Following Robot
description: A line following robot using an IR sensor, Elegoo Uno, and custom CAD frame.
date: 2024-09-01
tech: ["Arduino", "C", "Solidworks", "Breadboarding", "PID control"]
slug: line_following_robot
heroImage: /src/assets/line_following_robot.png
heroAlt: An image of my line following robot
demoLink: https://www.youtube.com/watch?v=u8r43yeaL40
---

## Project Overview

I build an adaptive line following robot using an analog 5 IR sensor array and an Elegoo Uno R3. The robot calibrates for 5 seconds before moving, using collected IR values to build two confidence intervals around a given 'light' and 'dark' reading. This approach allows for dynamic, *fuzzy* sensing that can adapt do different lighting and colour environments.

---

## Design Process

I began by researching existing implementations of this project to find a hardware setup that balanced cost with performance. I settled on an IR array and a two-motor design, which would allor me to implement more sophisticated algorithms than a simple 'bang-bang' controller.

I created mock CAD designs for each of the components in my project, like the motors and boards, so I could create an assembly to gauge fit. I prototyped the chassis and motor mounts in Solidworks, and 3D printed them at my local library.

To design the software, I used a simple PID controller. By tweaking the proportional, integral, and derivative terms, the PID algorithm is improved to make the car follow the course smoother and more efficiently. 

One challenge I faced was finding the initial values of line vs. non-line. Depending on the lighting conditions I was testing under, reflections off the tape often gave false readings. By inspecting the analog values the IR sensor was reading, I devised an algorithm that uses an initial calibration phase to implement a method that uses *statistical certainty*. Using repeated measurements, I am able to build a confidence interval around what I predict the line vs. non-line measurements to fall under. This method was successful!

There are lots of ways I could improve on this project, like modifying the design for greater agility and freedom of movement, or switching to vision-based predictive control. I hope to revisit the project with more sophisticated engineering skills to improve upon my design! 

---

## Skills and Tools

I learned about:
- Sensor fusion
- Statistical methods for finding data uncertainty
- Control theory
- 3D CAD

I used these tools:
- Arduino
- C
- PID controller
- Solidworks
- Breadboarding
- Soldering
