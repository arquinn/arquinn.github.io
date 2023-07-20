---
title: "GPUHarbor: Testing GPU Memory Consistency At Large (Experience  Paper)"

authors:
  - Reese Levine
  - Mingun Cho
  - Devon McKee
  - Andrew Quinn
  - Tyler Sorensen

booktitle: Proceedings of the 32nd ACM SIGSOFT International Symposium on
           Software Testing and Analysis and Implementation

month: July
year: 2023
abbr: ISSTA
date: 2023-07-17 12:00:00-0000
location: Seattle, WA, USA
pdf: Levine-issta23.pdf
type: conference

award:
  - Distinguished Artifact

abstract: "Memory consistency specifications (MCSs) are a difficult, yet
           critical, part of a concurrent programming framework. Existing MCS
           testing tools are not immediately accessible, and thus, they have
           only been applied to a limited number of platforms. However, in the
           post-Dennard scaling landscape, there has been an explosion of new
           architectures and frameworks, especially for GPUs. Studying the
           shared memory behaviors of different devices (across vendors and
           architecture generations) is important to ensure conformance and to
           understand the extent that devices show different behaviors.  In this
           paper, we present GPUHarbor, a widescale GPU MCS testing
           tool. GPUHarbor has two interfaces: a web interface and an Android
           app. Using GPUHarbor, we deployed a testing campaign that checks
           conformance and characterizes weak behaviors. We advertised GPUHarbor
           on forums and social media, allowing us to collect testing data from
           106 devices, spanning seven vendors. In terms of devices tested, this
           constitutes the largest study on weak memory behaviors by at least
           10×, and our conformance tests identified two new bugs on embedded
           Arm and NVIDIA devices. Analyzing our characterization data yields
           many insights, including quantifying and comparing weak behavior
           occurrence rates (e.g., AMD GPUs show 25.3× more weak behaviors on
           average than Intel). We conclude with a discussion of the impact our
           results have on software development for these performance-critical
           devices."

---
