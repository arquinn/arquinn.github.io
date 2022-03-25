---
title: "Execution Reconstruction: Harnessing Failure Reoccurrences for Failure Reproduction"
authors:
  - Gefei Zuo
  - Jiacheng Ma
  - Andrew Quinn
  - Pramod Bhatotia
  - Pedro Fonseca
  - Baris Kasikci,

booktitle: Proceedings of the 42nd ACM SIGPLAN International
           Conference on Programming Language Design and
           Implementation

month: July
year: 2021
abbr: PLDI
date: 2021-07-01 12:00:00-0000
location: Virtual, USA
pdf: zuo21.pdf
type: conference

abstract: "Reproducing production failures is crucial for software
           reliability. Alas, existing bug reproduction approaches are
           not suitable for production systems because they are not
           simultaneously efficient, effective, and accurate. In this
           work, we survey prior techniques and show that existing
           approaches over-prioritize a subset of these properties,
           and sacrifice the remaining ones. As a result, existing
           tools do not enable the plethora of proposed failure
           reproduction use-cases (e.g., debugging, security
           forensics, fuzzing) for production failures.  We propose
           Execution Reconstruction (ER), a technique that strikes a
           better balance between efficiency, effectiveness and
           accuracy for reproducing production failures. ER uses
           hardware-assisted control and data tracing to shepherd
           symbolic execution and reproduce failures. ER’s key novelty
           lies in identifying data values that are both inexpensive
           to monitor and useful for eliding the scalability
           limitations of symbolic execution. ER harnesses failure
           reoccurrences by iteratively performing tracing and
           symbolic execution, which reduces runtime overhead. Whereas
           prior production-grade techniques can only reproduce short
           executions, ER can reproduce any reoccuring failure. Thus,
           unlike existing tools, ER reproduces fully replayable
           executions that can power a variety of debugging and
           reliabilty use cases. ER incurs on average 0.3% (up to
           1.1%) runtime monitoring overhead for a broad range of
           real-world systems, making it practical for real-world
           deployment."

---