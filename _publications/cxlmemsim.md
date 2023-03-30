---
title: "CXLMemSim: A pure software simulated CXL.mem for performance characterization"
authors:
  - Yiwei Yang
  - Pooneh Safayenikoo
  - Jiacheng Ma
  - Tanvir Ahmed Khan
  - Andrew Quinn

booktitle: Proceedings of the 5th Young Architects Workshop
month: March
year: 2023
abbr: YArch
date: 2023-03-01 12:00:00-0000
location: Vancouver, BC, Canada
pdf: https://arxiv.org/pdf/2303.06153.pdf
type: workshop

abstract: "The emerging CXL.mem standard provides a new type of byte-addressable
           remote memory with a variety of memory types and hierarchies. With
           CXL.mem, multiple layers of memory -- e.g., local DRAM and
           CXL-attached remote memory at different locations -- are exposed to
           operating systems and user applications, bringing new challenges and
           research opportunities. Unfortunately, since CXL.mem devices are not
           commercially available, it is difficult for researchers to conduct
           systems research that uses CXL.mem. In this paper, we present our
           ongoing work, CXLMemSim, a fast and lightweight CXL.mem simulator for
           performance characterization. CXLMemSim uses a performance model
           driven using performance monitoring events, which are supported by
           most commodity processors. Specifically, CXLMemSim attaches to an
           existing, unmodified program, and divides the execution of the
           program into multiple epochs; once an epoch finishes, CXLMemSim
           collects performance monitoring events and calculates the simulated
           execution time of the epoch based on these events. Through this
           method, CXLMemSim avoids the performance overhead of a full-system
           simulator (e.g., Gem5) and allows the memory hierarchy and latency to
           be easily adjusted, enabling research such as memory scheduling for
           complex applications. Our preliminary evaluation shows that CXLMemSim
           slows down the execution of the attached program by 4.41x on average
           for real-world applications. "

---
