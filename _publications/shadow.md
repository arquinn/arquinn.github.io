---
title: "The Case for Determinism on the Edge"
authors:
  - Matthew Furlong
  - Andrew Quinn
  - Jason Flinn
booktitle: Proceedings of the 2nd USENIX Workshop on Hot Topics in Edge Computing
month: July
year: 2019
abbr: HotEdge
date: 2019-07-01 12:00:00-0000
location: Renton, Wa
pdf: furlong19.pdf
type: workshop

abstract: "Emerging edge applications, such as augmented and virtual reality,
           real-time video analytics and thin-client gaming, are
           latency-sensitive, resource-intensive, and stateful. Transitioning
           these applications from cloud deployments to the edge is non-trivial
           since edge deployments will exhibit variable resource availability,
           significant user mobility, and high potential for faults and
           application preemption, requiring considerable developer effort per
           application to maintain stable quality of experience for the user.

           In this paper, we propose deterministic containers, a new abstraction
           that simplifies the development of complex applications on the
           edge. Deterministic containers enforce the property that all activity
           within a container behave deterministically. Determinism provides
           replication, which in turn provides key benefits for edge computing
           including resilience to performance jitter, enhanced fault-tolerance,
           seamless migration, and data provenance.

           We are currently building a prototype, Shadow, that aims to provide
           deterministic containers with minimal performance overhead while
           requiring few application modifications. For all sources of
           non-determinism, Shadow either converts the behavior to be
           deterministic or restricts the allowable application
           behavior. Preliminary results indicate that using Shadow to reduce
           performance jitter at the edge for a vehicle caravan application
           involving video analytics reduces median application response time by
           up to 25%."
---
