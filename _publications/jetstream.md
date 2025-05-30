---
title: "JetStream: Cluster-Scale Parallelization of Information Flow Queries"
authors:
  - Andi Quinn
  - David Devecsery
  - Peter M. Chen
  - Jason Flinn

booktitle: Proceedings of the 12th USENIX Symposium on Operating
           Systems Design and Implementation

month: Nov
year: 2016
abbr: OSDI
date: 2016-11-01 12:00:00-0000
location: Savannah, Ga
type: conference
abstract: Dynamic information flow tracking (DIFT) is an importanttool
                  in many domains, such as security, debugging,
                  forensics, provenance, configuration
                  troubleshooting, and privacy tracking. However, the
                  usability of DIFT is currently limited by its high
                  overhead; complex information flow queries can take
                  up to two orders of magnitude longer to execute than
                  the original execution of the program. This
                  precludes interactive uses in which users
                  iteratively refine queries to narrow down bugs,
                  leaks of private data, or performance anomalies.
                  JetStream applies cluster computing to parallelize
                  and accelerate information flow queries over past
                  executions. It uses deterministic record and replay
                  to time slice executions into distinct contiguous
                  chunks of execution called epochs, and it tracks
                  information flow for each epoch on a separate core
                  in the cluster. It structures the aggregation of
                  information flow data from each epoch as a streaming
                  computation. Epochs are arranged in a sequential
                  chain from the beginning to the end of program
                  execution; relationships to program inputs (sources)
                  are streamed forward along the chain, and
                  relationships to program outputs (sinks) are
                  streamed backward. Jet- Stream is the first system
                  to parallelize DIFT across a cluster. Our results
                  show that JetStream queries scale to at least 128
                  cores over a wide range of applications. JetStream
                  accelerates DIFT queries to run 12–48 times faster
                  than sequential queries; in most cases, queries run
                  faster than the original execution of the program.
---
