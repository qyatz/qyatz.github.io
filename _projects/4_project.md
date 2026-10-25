---
layout: page
title: Soft-Skinned Humanoid Robot
description: A storable, deployable humanoid robot with a rigid endoskeleton and a soft exterior for safe interaction with people
img: assets/img/12.jpg
importance: 3
category: fun
---

**柔らかい外装を有するヒューマノイドロボットの開発** (Development of a Humanoid Robot with a Soft Exterior)

## Overview

This project develops an endoskeleton-type humanoid robot covered with a soft exterior, aiming at a robot that can interact with people the way Baymax does.
Development is planned to continue over several years:

| Year   | Goal                                              |
| ------ | ------------------------------------------------- |
| FY2026 | Upper body                                        |
| FY2027 | Lower body                                        |
| FY2028 | Full-body integration and execution of real tasks |

In FY2026, we build an extendable and bendable torso and arms (the endoskeleton), the soft exterior and the hands, integrate them into one robot, and exhibit it regularly at on-campus events and external exhibitions to confirm that it can interact with people.

## Motivation

Humanoid and companion robots such as ASIMO, Pepper and aibo have long shown the idea of robots that live alongside people and support daily life.
Although highly capable humanoids are now being developed, robots that genuinely coexist with people are still rare.
One reason is that robot hardware is still **hard**: when a robot shares space with people, the risk of injury or damage on contact with people and the environment must be reduced.

Making the hardware **soft** is an effective way to limit such damage, and robots with soft hardware — soft robots — have been studied extensively in laboratories related to ours.
However, in most soft robots almost every element is soft, which leads to low output or an inability to support themselves.

On the software side, a robot in daily life has to judge which task people actually want, understanding their mood and intention.
Learning-based control and vision-language models are now being applied to robots as "physical AI", and we plan to apply vision-language-action (VLA) models, which interpret images and spoken language and turn them into actions, to interactive communication with people.

## Robot Concept

- **Rigid endoskeleton** so that the robot can stand on its own and hold objects
- **Soft exterior** so that it can work safely close to people
- **Storable and deployable**: stored compactly when not in use and deployed into a humanoid form when needed, for easy transport and storage at home
- **Humanoid, friendly design** that people find approachable and that can serve many purposes
- Reacting to people using cameras and contact sensors (under consideration)

Humanoids and soft robots are both active research fields, but soft robots with a deployable endoskeleton have rarely been reported, and their effectiveness has not yet been fully evaluated.

## Technical Approach

- **Endoskeleton**: a parallel mechanism with telescopic struts driven by wires — the telescopic and parallel structure provides strength, and the wire drive provides compact storage and deployment.
- **Soft exterior**: candidate designs include a membrane tied to the endoskeleton by strings in all radial directions, or inflatable rings on each link covered by a membrane. The exterior is designed to fold like bellows so that it does not interfere with the endoskeleton during storage and deployment.
- **Motion and exterior studies** start on a commercial small humanoid (Booster K1) before moving to our own hardware.

## Plan

| Period (FY2026) | Task                                                                        |
| --------------- | --------------------------------------------------------------------------- |
| Sep             | Concept design                                                              |
| Oct – Dec       | Development with the Booster K1 (soft exterior and control studies)         |
| Oct – Feb       | Design and prototyping of the deployable endoskeleton, soft exterior, hands |
| Feb – Mar       | Integration of the endoskeleton, exterior and hands                         |
| Jan – Jun       | Implementation of humanoid control                                          |
| Mar – Jun       | Exhibitions                                                                 |
| Jul             | Final report                                                                |

Candidate exhibitions include on-campus events (Wakaba-sai, Homecoming Day, Koudai-sai) and maker events such as Kyoto Micro Maker Faire, NT Hakodate, NT Kanazawa and Maker Faire Tokyo, where many visitors can touch the robot directly.

## Safety

Tasks that involve interaction with people are first tested with mannequins, and always run with a person ready at the emergency stop.
If safety cannot be confirmed before an exhibition, the robot is shown without motion or with mannequin-only demonstrations.

## Team

Members of the Robot Technology Research Club (ロボット技術研究会), from undergraduate to doctoral students, with experience in CanSat, NHK "Makaizo no Yoru", XROBOCON, ROBO-ONE and robotics research, supported by advisors.

## Expected Outcomes

- Feasibility of an endoskeleton humanoid with a soft exterior for living alongside people
- Fabrication methods for soft exteriors that can also be applied to collaborative and service robots
- Sparking interest in robot development among people of all ages through hands-on exhibitions
