---

title: "MC Mutants: Evaluating and Improving Testing for Memory Consistency
        Specifications"

authors:

  - Reese Levine
  - Tianhao Guo
  - Mingun Cho
  - Allen Baker
  - Raph Levien
  - David Neto
  - Andi Quinn
  - Tyler Sorensen

booktitle: Proceedings of the 28th ACM International Conference on Architectural
           Support for Programming Languages and Operating Systems, Volume 2

month: March
year: 2023
abbr: ASPLOS
date: 2023-03-25 12:00:00-0000
location: Vancouver, BC, Canada
type: conference

award:
  - Distinguished Paper
  - Distinguished Artifact

abstract: "Shared memory platforms provide a memory consistency specification
           (MCS) so that developers can reason about the behaviors of their
           parallel programs. Unfortunately, ensuring that a platform conforms
           to its MCS is difficult, as is exemplified by numerous bugs in
           well-used platforms. While existing MCS testing approaches find bugs,
           their efficacy depends on the testing environment (e.g. if synthetic
           memory pressure is applied). MCS testing environments are difficult
           to evaluate since legitimate MCS violations are too rare to use as an
           efficacy metric. As a result, prior approaches have missed critical
           MCS bugs. This work proposes a mutation testing approach for
           evaluating MCS testing environments: MC Mutants. This approach
           mutates MCS tests such that the mutants simulate bugs that might
           occur. A testing environment can then be evaluated using a mutation
           score. We utilize MC Mutants in two novel contributions: (1) a
           parallel testing environment, and (2) An MCS testing confidence
           strategy that is parameterized over a time budget and confidence
           threshold. We implement our contributions in WebGPU, a new web-based
           GPU programming specification, and evaluate our techniques across
           four GPUs. We improve testing speed by three orders of magnitude over
           prior work, empowering us to create a conformance test suite that
           reproduces many mutated tests with high confidence and requires only
           64 seconds per test. We identified two bugs in WebGPU
           implementations, one of which led to a specification
           change. Moreover, the official WebGPU conformance test suite has
           adopted our approach due to its efficiency, effectiveness, and broad
           applicability."

---
