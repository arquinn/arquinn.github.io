---
layout: class
title: CSE 134
term: Spring
description: <s>Embedded</s> Operating Systems
year: 2023-2024
category: schedule
---

# CSE134 Spring 2024

The schedule below was tentative and changed frequently as we progressed through
the quarter.

| Date  |         Subject                  |                                              Notes/Slides                                               | Books Sections | Due |
|-------|----------------------------------|---------------------------------------------------------------------------------------------------------|----------------|-----|
| 04/01 | Syllabus Day                     | [slides](/assets/pdf/134/l00.pdf)                                                                       |                |     |
| 04/03 | Introduction: OSes               | [notes](/assets/pdf/134/l01-intro-to-OSes.pdf)                                                          | [Intro](https://pages.cs.wisc.edu/~remzi/OSTEP/intro.pdf) | |
| 04/05 | Introduction: Pintos             | [HW1 Doc](/assets/pdf/134/hw1-intro-to-pintos.pdf)                                                      |                | [HW0](https://canvas.ucsc.edu/courses/73382/assignments/574673?module_item_id=1284211) |
| 04/08 | Concurrency: Review              | [notes](/assets/pdf/134/l02-concurrency-review.pdf)                                                     | [Locks](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf) <br /> [Cond Vars](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf) <br /> [Semaphores](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf) | [HW1](https://canvas.ucsc.edu/courses/73382/assignments/574673?module_item_id=1284211) <br /> [HW1 Doc](/assets/pdf/134/hw1-intro-to-pintos.pdf) |
| 04/10 | Concurrency: advanced topics     | [notes](/assets/pdf/134/l03-advanced-concurrency.pdf)                                                   | [Concurrent Data Structures](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks-usage.pdf)  | |
| 04/12 | Concurrency: in Pintos           |                                                                                                         |                    |      |
| 04/15 | Processes: the abstraction       | [notes](/assets/pdf/134/l04-processes.pdf)                                                              | [Processes](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-intro.pdf) <br /> [Direct Execution](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf) |  [HW2](https://canvas.ucsc.edu/courses/73382/assignments/583791) |
| 04/17 | *Bonus Office Hours*             |                                                                                                         |                |      |
| 04/19 | Processes: scheduling            | [notes](/assets/pdf/134/l05-scheduling.pdf)                                                             | [Scheduling](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf) | [A1](/assets/pdf/134/p01.pdf) |
| 04/22 | Processes: Unix APIs and Pintos  |                                                                                                         | [Process API](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-api.pdf) |  |
| 04/24 | Virtual Memory: Base+Bounds      | [notes](/assets/pdf/134/l06-virtual-memory-intro.pdf)                                                   | [Address Spaces](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf) <br /> [Address Translation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-mechanism.pdf) <br /> |  [HW3](https://canvas.ucsc.edu/courses/73382/assignments/586867) |
| 04/26 | Virtual Memory: Segmentation     | See above                                                                                               | [Segmentation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf) |      |
| 04/29 | Virtual Memory: Paging           | [notes](/assets/pdf/134/l07-paging.pdf)                                                                 | [Paging](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf) <br /> [TLBs](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-tlbs.pdf) |   |
| 05/01 | Virtual Memory: Paging           | See above                                                                                               | [Swapping Mechanism](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys.pdf) <br />[Swapping Policies](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-beyondphys-policy.pdf) |      |
| 05/03 | Virtual Memory: Optimizations    | [notes](/assets/pdf/134/l08-advanced-paging.pdf)                                                        | [Advanced Page Table](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-smalltables.pdf) <br />[Complete VM systems](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-complete.pdf) |      |
| 05/06 | *Bonus  Office Hours*            |                                                                                                         |     | [A2](/assets/pdf/134/p02.pdf)     |
| 05/08 | Assignment 3 Walk-through        |                                                                                                         |     |      |
| 05/10 | *CRSS IAB Meeting--No class*     |                                                                                                         |     |      |
| 05/13 | Persistence: the Block Layer     | [notes](/assets/pdf/134/l09-persistence.pdf)                                                            | [I/O Devices](https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf) | [HW4](https://canvas.ucsc.edu/courses/73382/assignments/589780) |
| 05/15 | Persistence: Hard Drives         | See above                                                                                               | [Hard Disk Drives](https://pages.cs.wisc.edu/~remzi/OSTEP/file-disks.pdf) |      |
| 05/17 | Persistency: RAID                | [notes](/assets/pdf/134/l10-raid.pdf)                                                                   | [RAID](https://pages.cs.wisc.edu/~remzi/OSTEP/file-raid.pdf) |      |
| 05/20 | *Campus Closure--No class*       |                                                                                                         |     |  |
| 05/22 | Persistency: File Systems        | [jamboard](https://jamboard.google.com/d/12P3QqzpLtz7atBKl6ZwKLk3e-4axUQR1EymDBwLTt1E/edit?usp=sharing) | [FS Interface](https://pages.cs.wisc.edu/~remzi/OSTEP/file-intro.pdf) <br /> [FS Implementation](https://pages.cs.wisc.edu/~remzi/OSTEP/file-implementation.pdf) |    |
| 05/24 | Persistency: File Systems        | See above                                                                                               | See above | [A3](/assets/pdf/134/p03.pdf)     |
| 05/27 | *Memorial Day--No class*         |                                                                                                         |        | [HW5](https://canvas.ucsc.edu/courses/73382/assignments/592803)     |
| 05/29 | Persistency: Crash Consistency   | [jamboard](https://jamboard.google.com/d/1ixYztaSHafwgpiz3ij1m110_pfqXgB1_ZdRvRsC2Zu4/edit?usp=sharing) | [FSCK and Journaling](https://pages.cs.wisc.edu/~remzi/OSTEP/file-journaling.pdf) |  |
| 05/31 | Persistency: Crash Consistency   | See above                                                                                               | See above |      |
| 06/03 | Persistency: Log-Structured FS   | See above                                                                                               | [Log-structured FS](https://pages.cs.wisc.edu/~remzi/OSTEP/file-lfs.pdf) |  |
| 06/05 | Virtual Machines                 | [jamboard](https://jamboard.google.com/d/15pGYDLVE6Uxr8lfPGgWHUXcFxp_QC16JiISBfvrAHC8/edit?usp=sharing) | [Virtual Machines](https://pages.cs.wisc.edu/~remzi/OSTEP/vmm-intro.pdf) |      |
| 05/07 | uKernels                         | [jamboard](https://jamboard.google.com/d/1RTmqTm3WIETMy5KEhUWtv3fgKVjKTQhK3D-GjokXBl0/edit?usp=sharing) |     |      |
| 06/10 | *Final Exam*                     |                                                                                                         |     | [Online Exam](https://canvas.ucsc.edu/courses/73382/assignments/596329)  |
| 06/14 | --                               |                                                                                                         |     | [A4](/assets/pdf/134/p04.pdf) |
