---
title: "Scalable and Accurate Application-Level Crash-Consistency Testing via Representative Testing"
authors:
  - Yile Gu
  - Ian Neal
  - Jiexiao Xu
  - Shaun Christopher Lee
  - Ayman Said
  - Musa Haydar
  - Jacob Van Geffen
  - Rohan Kadekodi
  - Andi Quinn
  - Kasikci, Baris


booktitle: Proceedings of the ACM on Programming Languages,
           Volumn 9, Issue OOPSLA.

month: April
year: 2025
abbr: OOPSLA
date: 2025-10-12 12:00:00-0000
location: Singapore, Singapore
type: conference

abstract: "Crash consistency is essential for applications that must persist
           data. Crash-consistency testing has been commonly applied to find
           crash-consistency bugs in applications. The crash-state space grows
           exponentially as the number of operations in the program increases,
           necessitating techniques for pruning the search space. However,
           state-of-the-art crash-state space pruning is far from ideal. Some
           techniques look for known buggy patterns or bound the exploration for
           efficiency, but they sacrifice coverage and may miss bugs lodged deep
           within applications. Other techniques eliminate redundancy in the
           search space by skipping identical crash states, but they still fail
           to scale to larger applications.

	   In this work, we propose representative testing: a new crash-state
	   space reduction strategy that achieves high scalability and high
	   coverage. Our key observation is that the consistency of crash states
	   is often correlated, even if those crash states are not identical. We
	   build Pathfinder, a crash-consistency testing tool that implements an
	   update behaviors-based heuristic to approximate a small set of
	   representative crash states.

	   We evaluate Pathfinder on POSIX-based and MMIO-based applications,
	   where it finds 18 (7 new) bugs across 8 production-ready
	   systems. Pathfinder scales more effectively to large applications
	   than prior works and finds 4x more bugs in POSIX-based applications
	   and 8x more bugs in MMIO-based applications compared to
	   state-of-the-art systems."

---
