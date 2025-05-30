---
title: "Debugging the OmniTable Way"
authors:
  - Andi Quinn
  - Michael Cafarella
  - Jason Flinn
  - Baris Kasikci

booktitle: Proceedings of the 16th USENIX Symposium on Operating
           Systems Design and Implementation

month: July
year: 2022
abbr: OSDI
date: 2022-07-01 12:00:00-0000
location: Carlsbad, CA
type: conference

abstract: "Debugging is time-consuming, accounting for roughly 50% of
           a developer's time. To identify the cause of a failure, a
           developer usually tracks the state of their program as it
           executes on a failing input.  Unfortunately, most debugging
           tools make it difficult for a developer to specify the
           program state that they wish to observe and computationally
           expensive to observe execution state.  Moreover, existing
           work to improve our debugging tools often restrict the
           state that a developer can track by either exposing
           incomplete execution state or requiring manual
           instrumentation.  In this paper, we propose an OmniTable,
           an abstraction that captures all execution state as a large
           queryable data table.  We build a query model around an
           OmniTable that supports SQL to simplify debugging without
           restricting the state that a developer can observe: we find
           that OmniTable debugging queries are more succinct than
           equivalent logic specified using existing tools.  An
           OmniTable decouples debugging logic from the original
           execution, which SteamDrill, our prototype, uses to reduce
           the performance overhead of debugging. The system employs
           *lazy materialization*: it uses deterministic record/replay
           to store the execution associated with each OmniTable and
           resolves queries by inspecting replay executions.  It
           employs a novel multi-replay strategy that partitions query
           resolution across multiple replays and a parallel
           resolution strategy that simultaneously observes state at
           multiple points-in-time.  We find that SteamDrill queries
           are an order-of-magnitude faster than existing debugging
           tools."



---