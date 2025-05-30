---
title: "Agamotto: How Persistent is your Persistent Memory Application?"
authors:
  - Ian Neal
  - Ben Reeves
  - Ben Stoler
  - Andi Quinn
  - Youngjin Kwon
  - Simon Peter
  - Baris Kasikci

booktitle: Proceedings of the 14th USENIX Symposium on Operating Systems Design
           and Implementation

month: Nov
year: 2020
abbr: OSDI
date: 2020-11-01 12:00:00-0000
location: Virtual, USA
type: conference
abstract: "Persistent Memory (PM) can be used by applications to
                  directly and quickly persist any data structure,
                  without the overhead of a file system. However,
                  writing PM applications that are simultaneously
                  correct and efficient is challenging. As a result,
                  PM applications contain correctness and performance
                  bugs. Prior work on testing PM systems has low bug
                  coverage as it relies primarily on extensive test
                  cases and developer annotations.  In this paper we
                  aim to build a system for more thoroughly testing PM
                  applications. We inform our design using a detailed
                  study of 63 bugs from popular PM projects. We
                  identify two application-independent patterns of PM
                  misuse which account for the majority of bugs in our
                  study and can be detected automatically. The
                  remaining application-specific bugs can be detected
                  using compact custom oracles provided by developers.
                  We then present AGAMOTTO, a generic and extensible
                  system for discovering misuse of persistent memory
                  in PM applications. Unlike existing tools that rely
                  on extensive test cases or annotations, AGAMOTTO
                  symbolically executes PM systems to discover
                  bugs. AGAMOTTO introduces a new symbolic memory
                  model that is able to represent whether or not PM
                  state has been made persistent. AGAMOTTO uses a
                  state space exploration algorithm, which drives
                  symbolic execution towards program locations that
                  are susceptible to persistency bugs. AGAMOTTO has so
                  far identified 84 new bugs in 5 different PM
                  applications and frameworks while incurring no false
                  positives."
---
