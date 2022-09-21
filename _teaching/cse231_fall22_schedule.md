---
layout: class
title: CSE 231
term: Fall
year: 2022-2023
description: Advanced Operating Systems
category: schedule
---

|    Date   | Type | Topic | Readings | Auxilary Material |   Due  |
|-----------|------|-------|----------|----------|--------|
| 09/23 | **Lesson** |Course Overview                              |                                                                                   | [The Faces of System Research](https://www.usenix.org/legacy/event/hotos05/final_papers_backup/red_team/red_html/paper.html#foot32)<br />[OStep](http://www.ostep.org)<br />[worse is better](https://www.dreamsongs.com/WorseIsBetter.html)<br />[Hints for Computer System Design](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/acrobat-17.pdf)| |
| 09/26 | **Lesson** |Reading, Reviews, and History                | [Unix](/assets/pdf/unix.pdf)                                                      | [How to Read a paper](https://www.albany.edu/spatial/WebsiteFiles/ResearchAdvices/how-to-read-a-paper.pdf) <br /> [How to Read & Evaluate Technical Papers](http://www.cs.kent.edu/~jmaletic/howtoread.html) <br />  [Multics Memory](https://dl.acm.org/doi/10.1145/800001.811668)<br />[Multics IO](https://dl.acm.org/doi/10.1145/800212.806497) | [About You]()|
| 09/28 | **Lesson** |Projects and u-kernels                       | [u-Kernel Construction](https://dl.acm.org/doi/10.1145/224056.224075) | [Brinch Hansen](https://dl.acm.org/doi/10.1145/362258.362278)<br />[Rashid: From Rig to Accent to Mach](https://dl.acm.org/doi/10.5555/324493.325071) | Review |
| 09/30 | **Discussion** |The Exokernel and other things           | [The Exokernel](https://dl.acm.org/doi/10.1145/224056.224076)                     |[Exokernel Performance](https://dl.acm.org/doi/10.1145/268998.266644) | Review |
| 10/03 | **Discussion** |The Multikernel                          | [The MultiKernel](https://dl.acm.org/doi/10.1145/1629575.1629579) | [Linux Scalability]() | Review |
| 10/05 | **Discussion** |On Interfaces                            | [Scalable Commutativity](https://dl.acm.org/doi/10.1145/2517349.2522712) | | Review |
| 10/07 | **Presentations** |Cool Kernels 1                        | [The DemiKernel](https://dl.acm.org/doi/10.1145/3477132.3483569)<br />[LegoOS]() | | Review<br />Reflection |
| 10/10 | **Presentations** |Cool Kernels 2                        | [Theseus](https://www.usenix.org/system/files/osdi20-boos.pdf)<br />[NrOS](https://www.usenix.org/system/files/osdi21-bhardwaj.pdf)| | Review |
| 10/12 | **Lesson** |Scheduling                                   | [A decade of wasted cores]()| | Review |
| 10/14 | **Discussion** | Scheduler Policies                      | [Lottery Scheduling](https://www.usenix.org/conference/osdi-94/lottery-scheduling-flexible-proportional-share-resource-management) | | Review |
| 10/17 | **Discussion** | Scheduler designs                        | [Scheduler Activations](https://dl.acm.org/doi/10.1145/121132.121151)                | | Review |
| 10/19 | **Lesson** |File Systems                                 | [A Fast File-System for UNIX](https://dl.acm.org/doi/10.1145/989.990) | | Review |
| 10/21 | **Discussion** |Log-Structured File System                 | [LFS](https://dl.acm.org/doi/10.1145/121132.121137) | Clustering vs. logging | Review |
| 10/24 | **Presentations** |Cool File Systems 1<br /> (Abstractions)    | [TxOS](https://dl.acm.org/doi/10.1145/1629575.1629591)<br />[OptFS](https://dl.acm.org/doi/10.1145/2517349.2522726)| | Review<br />Reflection |
| 10/26 | **Presentations** |Cool File Systems 2<br /> (Speculation)     | [Speculator](https://dl.acm.org/doi/10.1145/1095810.1095829)<br />[Rethink the Sync](https://www.usenix.org/legacy/event/osdi06/tech/nightingale/nightingale.pdf) | | Review |
| 10/28 | **Discussion** |Single Level Stores                        | [Eros](https://dl.acm.org/doi/10.1145/319344.319163) | | Review |
| 10/31 | **Presentations** |Cool Single Level Stores              | [Aurora](https://dl.acm.org/doi/10.1145/3477132.3483563)<br />[Twizzler](https://www.usenix.org/system/files/atc20-bittman.pdf) | | Review |
| 11/02 | **Lesson** |Virtualization                                | [Virtualization Requirements](https://dl.acm.org/doi/10.1145/361011.361073) | | Review|
| 11/04 | **Discussion** |Para-virtualization                       | [Xen](https://dl.acm.org/doi/10.1145/945445.945462)<br />[Ballooning](https://dl.acm.org/doi/10.1145/844128.844146)    | | Review |
| 11/07 | **Discussion** |Making Virtualizaiton Efficient           | [Ballooning](https://dl.acm.org/doi/10.1145/844128.844146)    | | Review |
| 11/09 | **Presentations** |Cool Virtualization 1                  | [Hypervisor]()<br />[ReVirt](https://www.usenix.org/legacy/publications/library/proceedings/osdi02/tech/dunlap.html)  | | Review |
| 11/11 | **No Class**| Veteran's Day|                          |  | | |
| 11/14 | **Presentations** |Cool Virtualization 2                  | [Migration Paper]()<br />[IX]()  | | Review|
| 11/16 | **Lesson** |Reliability                                   | [Why do Computers stop]() | | Review<br />Reflection |
| 11/21 | **Presentations** |Cool Reliability (Testing)             | [Eraser](https://dl.acm.org/doi/10.1145/265924.265927)<br />[Bugs as Deviant Behavior](https://dl.acm.org/doi/10.1145/502034.502041)| | Review |
| 11/23 | **Presentations** |Cool Reliability (Survival)           | [Microreboot]() <br />[Failure-Oblivioius Computing]() | | Review |
| 11/25 | **No Class**| Thanksgiving |                           |  | | |
| 11/28 | **Presentations** |Cool Reliability (Debugging)          | [Kairux](https://dl.acm.org/doi/10.1145/3341301.3359650)<br />[The OmniTable](https://www.usenix.org/system/files/osdi22-quinn.pdf) | | Review |
| 11/30 | **Presentations** |Cool Reliability (Isolation/Security) | [Efficient Software Isolation](https://dl.acm.org/doi/pdf/10.1145/168619.168635)<br />[PCC](https://personal.utdallas.edu/~hamlen/Papers/necula96safe.pdf) | | Review |
| 12/02 | **Debate** | Distributed Systems: RPC vs DSM               | [Implementing RPC]()<br />[Ivy]() | | Review |
