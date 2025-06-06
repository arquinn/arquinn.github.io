---
title: "Hippocrates: Healing Persistent Memory Bugs without Doing Any Harm"
authors:
  - Ian Neal
  - Andi Quinn
  - Baris Kasikci

booktitle: Proceedings of the 26th ACM International Conference on
           Architectural Support for Programming Languages and
           Operating Systems

month: Apr
year: 2021
abbr: ASPLOS
date: 2021-04-01 12:00:00-0000
location: Virtual, USA
type: conference

abstract: "Persistent memory (PM) technologies aim to revolutionize
           storage systems, providing persistent storage at near-DRAM
           speeds. Alas, programming PM systems is error-prone, as the
           misuse or omission of the durability mechanisms (i.e.,
           cache flushes and memory fences) can lead to durability
           bugs (i.e., unflushed updates in CPU caches that violate
           crash consistency). PM-specific testing and debugging tools
           can help developers find these bugs, however even with such
           tools, fixing durability bugs can be challenging.  To
           determine the reason behind this difficulty, we first study
           durability bugs and find that although the solution to a
           durability bug seems simple, the actual reasoning behind
           the fix can be complicated and time-consuming. Overall, the
           severity of these bugs coupled with the difficultly of
           developing fixes for them motivates us to consider
           automated approaches to fixing durability bugs.  We
           introduce Hippocrates, a system that automatically fixes
           durability bugs in PM systems. Hippocrates automatically
           performs the complex reasoning behind durability bug fixes,
           relieving developers of time-consuming bug
           fixes. Hippocrates’s fixes are guaranteed to be safe, as
           they are guaranteed to not introduce new bugs (“do no
           harm”). We use Hippocrates to automatically fix 23
           durability bugs in realworld and research systems. We show
           that Hippocrates produces fixes that are functionally
           equivalent to developer fixes. We then show that solely
           using Hippocrates’s fixes, we can create a PM port of Redis
           which has performance rivaling and exceeding the
           performance of a manually-developed PM-port of Redis."

---