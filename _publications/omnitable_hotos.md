---
title: "You Can't Debug What You Can't See: Expanding Observability with the OmniTable"
authors:
  - Andrew Quinn
  - Jason Flinn
  - Michael Cafarella
booktitle: Proceedings of the Workshop on Hot Topics in Operating Systems
month: may
year: 2019
abbr: HotOS
date: 2019-05-01 12:00:00-0000
location: Bertinoro, Italy
pdf: quinn19.pdf
type: workshop
abstract: "The effectiveness of a debugging tool is fundamentally
                  limited by what program state it can observe. Yet,
                  for performance reasons, all current debugging tools
                  restrict the program state that can be observed in
                  some way. For example, tools like heap analysis
                  restrict what can be observed (i.e., only global
                  variables) and tools like core dump analysis
                  restrict when observations may be made (i.e., only
                  on program termination).  Other tools effectively
                  limit the scope of observation by requiring
                  developers to specify what and when observations
                  will be made before execution (e.g., logging) or
                  during an execution (e.g., gdb).We propose a new
                  abstraction for debugging, called an OmniTable, that
                  logically exposes unrestricted access to all program
                  state at all points in an execution to
                  developers. The OmniTable represents a program
                  execution as a database-style table. Developers
                  inspect the OmniTable using a familiar declarative
                  query language: SQL. SQL simplifies the observation
                  and analysis of large, complex execution
                  state. Iterative queries are inherently consistent
                  since they operate over the same logical
                  table.Clearly, materializing the OmniTable for even
                  a simple program is infeasible due to storage and
                  processing overheads. Thus, our prototype,
                  SteamDrill, selectively materializes only the
                  regions of the OmniTable required to answer each
                  query by using deterministic record and replay to
                  reproduce the execution and dynamic instrumentation
                  to extract needed state. By expressing debugging
                  queries with relational logic, SteamDrill leverages
                  proven optimizations such as query optimization and
                  caching.  In addition, decomposition into relational
                  logic allows a query to be executed via repeated
                  replays, each replay extracting information needed
                  by the next, which can often be more efficient than
                  extracting all information during a single
                  execution."
---