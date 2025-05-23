---
title: "Sledgehammer: Cluster-Fueled Debugging"
authors:
  - Andi Quinn
  - Jason Flinn
  - Michael Cafarella

booktitle: Proceedings of the 13th USENIX Symposium on Operating
           Systems Design and Implementation

month: Oct
year: 2018
abbr: OSDI
date: 2018-10-01 12:00:00-0000
location: Carlsbad, CA
type: conference

abstract: "Current debugging tools force developers to choose between
           power and interactivity. Interactive debuggers such as gdb
           let them quickly inspect application state and monitor
           execution, which is perfect for simple bugs. However, they
           are not powerful enough for complex bugs such as wild
           stores and synchronization errors where developers do not
           know which values to inspect or when to monitor the
           execution. So, developers add logging, insert timing
           measurements, and create functions that verify
           invariants. Then, they re-run applications with this
           instrumentation. These powerful tools are, unfortunately,
           not interactive; they can take minutes or hours to answer
           one question about a complex execution, and debugging
           involves asking and answering many such questions.  In this
           paper, we propose cluster-fueled debugging, which provides
           interactivity for powerful debugging tools by parallelizing
           their work across many cores in a cluster. At sufficient
           scale, developers can get answers to even detailed queries
           in a few seconds. Sledgehammer is a cluster-fueled
           debugger: it improves performance by timeslicing program
           execution, debug instrumentation, and analysis of results,
           and then executing each chunk of work on a separate
           core. Sledgehammer enables powerful, interactive debugging
           tools that are infeasible today. Parallel retro-logging
           allows developers to change their logging instrumentation
           and then quickly see what the new logging would have
           produced on a previous execution. Continuous function
           evaluation logically evaluates a function such as a
           data-structure integrity check at every point in a
           program’s execution. Retro-timing allows fast performance
           analysis of a previous execution. With 1024 cores,
           Sledgehammer executes these tools hundreds of times faster
           than single-core execution while returning identical
           results."

---

