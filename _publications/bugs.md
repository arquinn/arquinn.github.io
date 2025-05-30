---
title: "Debugging in the Brave New World of Reconfigurable Hardware"
authors:
  - Jiacheng Ma
  - Gefei Zuo
  - Kevin Loughlin
  - Haoyang Zhang
  - Andi Quinn
  - Baris Kasikci


booktitle: Proceedings of the 27th ACM International Conference on
           Architectural Support for Programming Languages and
           Operating Systems

month: Feb
year: 2022
abbr: ASPLOS
date: 2022-02-01 12:00:00-0000
location: Lausanne, Switzerland
type: conference

abstract: "Software and hardware development cycles have traditionally
           been quite distinct. Software allows post-deployment
           patches, which leads to a rapid development cycle. In
           contrast, hardware bugs that are found after fabrication
           are extremely costly to fix (and sometimes even unfixable),
           so the traditional hardware development cycle involves
           massive investment in extensive simulation and formal
           verification. Reconfigurable hardware, such as a Field
           Programmable Gate Array (FPGA), promises to propel hardware
           development towards an agile software-like development
           approach, since it enables a hardware developer to patch
           bugs that are detected during on-chip testing or in
           production. Unfortunately, FPGA programmers lack bug
           localization tools amenable to this rapid development
           cycle, since past tools mainly find bugs via simulation and
           verification. To develop hardware bug localization tools
           for a rapid development cycle, a thorough understanding of
           the symptoms, root causes, and fixes of hardware bugs is
           needed.  In this paper, we first study bugs in existing
           FPGA designs and produce a testbed of reliably-reproducible
           bugs. We classify the bugs according to their intrinsic
           properties, symptoms, and root causes. We demonstrate that
           many hardware bugs are comparable to software bug
           counterparts, and would benefit from similar techniques for
           bug diagnosis and repair. Based upon our findings, we build
           a novel collection of hybrid static/dynamic program
           analysis and monitoring tools for debugging FPGA designs,
           showing that our tools enable a software-like development
           cycle by effectively reducing developers' manual efforts
           for bug localization."

---