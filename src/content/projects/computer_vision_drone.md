---
title: Computer Vision Research Drone Platform
description: A ROS 2-enabled drone for centralized computer vision research.
date: 2025-08-01
tech: ["ROS 2", "C++", "Solidworks"]
slug: computer_vision_drone
heroImage: /drone_still.png
heroAlt: Image of the drone hovering
demoLink: https://www.youtube.com/watch?v=gomUQwkU3bQ
---

# Project Overview

The Mechatronic Systems Lab uses ROS2-compatible drones to support computer vision research, however the current model used by the lab has closed software and is no longer in in production.

This project involved the research and development of a drone capable of supporting computer vision research in the Mechatronic Systems Lab. I used open-source hardware/software, custom-designed physical components in SolidWorks, and leveraged peripherals optimized for low-latency FPV drones to provide an economical and modular system. I configured and wrote firmware to optimize the ROS2 and video-streaming integration. In all, a new build of the drone from scratch costs almost 4x less than the retail price of the currently used drones.

Project aspects include:
- Following ROS2 commands, publishing sensor data over topics, and offering services without a companion computer;
- Streaming 1080p 60fps video to a ground station for CV processing with ~160ms latency;
- Propellor guard frame optimized for impact resistance and modular assembly/replacement;
- Stable hover in-place/at altitude/in yaw using optical flow sensor + rangefinder when not receiving commands.
- Detailed technical documetation for to enable future reproducing and improvements to the drone.


Click on the image to see a hover demo!

 | Drone hover test | 
|--|
|[![Drone hover test](https://img.youtube.com/vi/QIUPPUqqtxU/0.jpg)](https://www.youtube.com/watch?v=QIUPPUqqtxU) | 

# Design Process

This project involves building a cost-effective, reliable, and ROS2-compatible video streaming drone. I first outlined my project constraints:

|Requirements|Considerations|
|--------|---------|
| - The drone must support high-quality video (>=720p) | - The drone should be built upon open-source software |
| - The drone must have reliable video transmission with low latency (<250ms) | - The drone should be flexible to future modifications (sensor mounts, stack upgrades) |
| - The drone must be compatible with ROS2 (send/receive messages) | - Parts should be easy to source, replace, or fabricate |
|| - The drone should be have basic agility |
|| - The drone should be cost-effective |

I created detailed documentation on my research into part selection, compatibility, and ordering sheets, all for internal use. I also maintained an engineering logbook to track my process and design intentions throughout the process.

As I desgined CAD models for the drone, I tested them in a Solidworks assembly and maintained a database of the useful files for future repairs or improvements.

I customized a fork of Ardupilot firmware for the drone, calibrated and tuned PIDs and data filtering, and developed test scripts for the drone and image sending.

## Skills and Tools

I learned about:
- System design
- Troubleshooting!
- Writing C++ firmware
- CAD design
- Designing safety systems

I used these tools:
- Python / C++
- Solidworks
- Microsoft Office Suite
- Git
