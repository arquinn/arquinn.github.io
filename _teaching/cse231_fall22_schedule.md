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
| 09/23 | **Lesson**     | Course Overview                          |                                                                                   | [System Research Faces](https://www.usenix.org/legacy/event/hotos05/final_papers_backup/red_team/red_html/paper.html#foot32)<br />[OStep](http://www.ostep.org)<br />[worse is better](https://www.dreamsongs.com/WorseIsBetter.html)<br />[Hints for Design](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/acrobat-17.pdf)| |
| 09/26 | **Lesson**     | Reading, Reviews, and History            | [Unix](/assets/pdf/unix.pdf)                                                      | [How to Read a paper](https://www.albany.edu/spatial/WebsiteFiles/ResearchAdvices/how-to-read-a-paper.pdf) <br /> [Paper reading advice](http://www.cs.kent.edu/~jmaletic/howtoread.html) <br />  [Multics Memory](https://dl.acm.org/doi/10.1145/800001.811668)<br />[Multics IO](https://dl.acm.org/doi/10.1145/800212.806497) | [About You]()|
| 09/28 | **Lesson**     | Projects and u-kernels                   | [u-Kernel Construction](https://dl.acm.org/doi/10.1145/224056.224075) | [Brinch Hansen](https://dl.acm.org/doi/10.1145/362258.362278)<br />[From Rig to Mach](https://dl.acm.org/doi/10.5555/324493.325071) | Review |
| 09/30 | **Discussion** | The Exokernel and other things           | [The Exokernel](https://dl.acm.org/doi/10.1145/224056.224076)                     |[Exokernel Performance](https://dl.acm.org/doi/10.1145/268998.266644) | Review |
| 10/03 | **Discussion** | The Multikernel                          | [The MultiKernel](https://dl.acm.org/doi/10.1145/1629575.1629579) | [Linux Scalability]() | Review |
| 10/05 | **Discussion** | Project Meetings                         | -- | -- | -- |
| 10/07 | **Discussion** | On Interfaces                            | [Scalable Commutativity](https://dl.acm.org/doi/10.1145/2517349.2522712) | | Review |
| 10/10 | **Lesson**     | Scheduling                               | [A decade of wasted cores](https://people.ece.ubc.ca/sasha/papers/eurosys16-final29.pdf)| | Review |
| 10/12 | **Discussion** | Scheduler Policies                       | [Lottery Scheduling](https://www.usenix.org/conference/osdi-94/lottery-scheduling-flexible-proportional-share-resource-management) | | Review |
| 10/14 | **Discussion** | Scheduler designs                        | [Scheduler Activations](https://dl.acm.org/doi/10.1145/121132.121151)                | | Review |
| 10/17 | **Lesson**     | File Systems                             | [A Fast File-System for UNIX](https://dl.acm.org/doi/10.1145/989.990) | | Review<br />Kernel Reflect|
| 10/19 | **Discussion** | Log-Structured File System               | [LFS](https://dl.acm.org/doi/10.1145/121132.121137) | [Clustering vs. logging](https://www.usenix.org/legacy/publications/library/proceedings/neworl/full_papers/seltzer.pdf) | Review |
| 10/21 | **Cancelled**  | --                                       | -- | -- | -- |
| 10/24 | **Discussion** | Distributed File Systems                 | [Speculator](https://dl.acm.org/doi/10.1145/1095810.1095829) |  | Review |
| 10/26 | **Discussion** | Single Level Stores                      | [Eros](https://www.usenix.org/conference/2002-usenix-annual-technical-conference/design-evolution-eros-single-level-store) | | Review |
| 10/28 | **Lesson**     | Virtualization                           | [Virtualization Requirements](https://dl.acm.org/doi/10.1145/361011.361073) | | Review|
| 10/31 | **Discussion** | Para-virtualization                      | [Xen](https://dl.acm.org/doi/10.1145/945445.945462)   | | Review |
| 11/02 | **Discussion** | Making Virtualization Efficient          | [Ballooning](https://dl.acm.org/doi/10.1145/844128.844146)    | | Review |
| 11/04 | **Lesson**        | Reliability                              | [Why do Computers stop](https://www.hpl.hp.com/techreports/tandem/TR-85.7.pdf) | | Review<br /> FS Reflect |
| 11/07 | **Discussion**    | Finding Bugs                             | [Eraser](https://dl.acm.org/doi/10.1145/265924.265927) | | Review |
| 11/09 | **Presentations** | Isolating Failures                       | [PCC](https://personal.utdallas.edu/~hamlen/Papers/necula96safe.pdf) | | Review |
| 11/11 | **No Class**      | Veteran's Day|                          |  | | |
| 11/14 | **Presentations** | Students Choices | Student Choice #1<br /> Student Choice #2 | | Review<br />Reliable Reflect |
| 11/16 | **Presentations** | Students Choices | Student Choice #3<br /> Student Choice #4 | | Review |
| 11/21 | **Presentations** | Students Choices | Student Choice #5<br /> Student Choice #6 | | Review |
| 11/23 | **Presentations** | Students Choices | Student Choice #7<br /> Student Choice #8 | | Review |
| 11/25 | **No Class**| Thanksgiving |                           |  | | |
| 11/28 | **Presentations** | Students Choices | Student Choice #9<br /> Student Choice #10 | | Review |
| 11/30 | **Presentations** | Students Choices | Student Choice #11<br /> Student Choice #12 | | Review |
| 12/02 | **Debate** | Distributed Systems: RPC vs DSM               | [Implementing RPC]()<br />[Ivy]() | | Review |



## Paper Pool for Presentations

| Area | Paper | Description |
| ---- | ----- | ------------|
| Cool Kernels        | [Theseus](https://www.usenix.org/system/files/osdi20-boos.pdf) | What if we wrote OSes in Rust? |
| Cool Kernels        | [LegoOS](https://www.usenix.org/system/files/osdi18-shan.pdf) | How should OSes be designed for disaggregation? |
| Cool Kernels        | [The DemiKernel](https://dl.acm.org/doi/10.1145/3477132.3483569) | How small can we make the Operating System? |
| Cool Kernels        | [Lightweight Contexts](https://www.usenix.org/system/files/conference/osdi16/osdi16-litton.pdf) | A new isolation abstraction for safe and efficient applications |
| Cool Kernels        | [Zap](https://www.cs.cmu.edu/~sosman/publications/osdi2002/osdi2002_zap.pdf) | A new abstraction to migrate applications across machines |
| Cool Kernels        | [Resource Containers](https://www.usenix.org/legacy/publications/library/proceedings/osdi99/full_papers/banga/banga.pdf) | A new abstraction for tracking resources |
| Cool Storage        | [TxOS](https://dl.acm.org/doi/10.1145/1629575.1629591)   | What if FSes had transactions? |
| Cool Storage        | [OptFS](https://dl.acm.org/doi/10.1145/2517349.2522726)  | A new logging technique for FS Consistency |
| Cool Storage        | [Rethink the Sync](https://www.usenix.org/legacy/event/osdi06/tech/nightingale/nightingale.pdf) | Using speculation go get synchronous FS behavior for asynchronous FS cost |
| Cool Stroage        | [Aurora](https://dl.acm.org/doi/10.1145/3477132.3483563) | What if your OS was always checkpointing? |
| Cool Stroage        | [Twizzler](https://www.usenix.org/system/files/atc20-bittman.pdf) | What if everything is an object? |
| Cool Virtualization | [Hypervisor](https://www.cs.cornell.edu/fbs/publications/vft.sosp.pdf) | How can we get transparent fault tolerance? |
| Cool Virtualization | [LightVM](https://dl.acm.org/doi/pdf/10.1145/3132747.3132763) | How small can we make VMs? |
| Cool Virtualization | [IX](https://www.usenix.org/system/files/conference/osdi14/osdi14-paper-belay.pdf)  | Can we use this virtualization stuff for faster networking? |
| Cool Reliability    | [Kairux](https://dl.acm.org/doi/10.1145/3341301.3359650) | What even is a bug? |
| Cool Reliability    | [Bugs as Deviant Behavior](https://dl.acm.org/doi/10.1145/502034.502041)| Detecting software bugs as
| Cool Reliability    | [Microreboot](https://www.usenix.org/legacy/event/osdi04/tech/full_papers/candea/candea.pdf) | ``Have you tried turning it off and on again?'' |
| Cool Reliability    | [Failure-Oblivous Computing](https://www.usenix.org/legacy/event/osdi04/tech/full_papers/rinard/rinard.pdf) | Try ignoring the failure and see if it goes away |
| Cool Reliability    | [Software-based Fault Isolation](https://dl.acm.org/doi/pdf/10.1145/168619.168635) | Isolating module failures with software |
