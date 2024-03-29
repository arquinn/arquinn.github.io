---
layout: class
title: CSE 134
term: Winter
description: <s>Embedded</s> Operating Systems
year: 2023-2024
category: syllabus
---

# CSE134 Spring 2024

|-----|-------|
|When: | Monday, Wednesday, and Friday at <b>9:20 AM--10:25 AM</b>|
|Where: | Porter Academy 144 |
|Who: | [Dr. Andrew Quinn](http://arquinn.github.io)|
|Office hours: | TBD |
|Prerequisites: | CSE 120 and CSE 130 |
|Text: | [Operating Systems, Three easy pieces, Arpaci-Dusseau & Arpaci-Dusseau](https://pages.cs.wisc.edu/~remzi/OSTEP/) |
|TA: | [Leo Conrad-Shah](https://www.ssrc.ucsc.edu/person/lconrads.html)|

# Course Description

Students in this course will be introduced to the internal design of operating
systems (OSes).  Students will be exposed to how operating systems provide key
abstractions to user programs.  Students will complete significant programming
projects that put these ideas into practice.  The material covered in this
course will be invaluable for further study of computer systems.

## Learning Objectives

After taking CSE 134, students will...

* [[Skill]] be able to implement complex designs in real systems.
* [[Skill]] be able to extend existing systems to add new functionality.
* [[Skill]] be able to explain system designs, in English.
* [[Skill]] be able to critique system designs.
* [[Knowledge]] know how an OS system supports the process abstraction.
* [[Knowledge]] know the OS's role in providing virtual memory.
* [[Knowledge]] know how an OS provides the file IO abstraction.

## Course Outline

We will cover the following topics:

* Introduction to operating systems
* Concurrency (Review)
* Processes and Scheduling
* Virtualizing Memory
* File Systems

## Prerequisites

The prerequisites are CSE 130 and CSE 120.  Assignments in this course use the C
programming language.  The course relies on `git` for managing assignments, and
you will likely find the course easier if you have familiarity with `gdb`.  We
will review the necessary tools in class, but we suggest that you proactively
seek help if you find yourself behind.

# Evaluation

We will measure your knowledge of the material for the course in the following
ways:

| Evaluation Metric | Percentage |
--------------------|------------
| Projects          |         60%|
| Homework          |         30%|
| Final Exam        |         10%|

## Programming assignments

Like many of my esteemed colleagues, I believe that "students learn best by
implementing".  So, the lion's share of the points in this class will be awarded
based upon your implementation of an actual operating system.  Don't worry---you
won't be building an OS from scratch.  Instead, you'll be working through four
assignments based upon the (Pintos operating
system)[https://web.stanford.edu/class/cs140/projects/pintos/pintos.pdf].  I
will modify the assignments so that they are reasonable to accomplish in a
10-week quarter. Also, I have borrowed/created a good amount of course
infrastructure to help you set Pintos up on your local machine---we'll go
through all of it early in the class.

Other than the first assignment, they build on each other.  I will keep "double
jeopardy" (or, losing points in later assignments because of mistakes in
previous ones) to a minimum.  But, there is some amount of double jeopardy that
is fundamental to this project design.  So, definitely be sure to take the first
few projects seriously and do a good job on them.

You will complete the first assignment individually.  The other three will be
completed in *pairs*; you will have the same partner for the whole quarter.  The
course staff will put some infrastructure in place to help you find a partner
with whom you will work well.  But, the decision is yours and yours alone.  *No,
you cannot do the projects individually, no matter how many times you say
"please"*.  I will consider allowing groups of 3 (especially if there are an odd
number of students enrolled in the course).

I know how group dynamics and politics can become problematic, especially when
the goals and/or standards of members of the group diverge.  The course staff
will do our best to help mediate any tension.  But, it will be largely up to you
to deal with any issues.  In my experience, the best way to address group
problems is to establish boundaries and expectations honestly from the
beginning: before forming a partnership, discuss your expectations, the amount
of time you are willing to put into the project, when and where you plan to work
on your operating system, etc.

Even though you are working as partners, you will all turn in assignments
individually. You will maintain your source code through a git repository on
GitLab@UCSC.  You will turn in assignments by submitting a git commit id through
the assignment submission on canvas.  *You and your partner must use the same
commit ID for your submission*.  We'll go through this setup early in the
course.

The assignments generally have the following structure.  We will award the
majority (60%) of the assignment points for passing tests, which will be
released to you at the start of each assignment.  *I.e., there are no hidden
tests*.  Note that over-fitting your code---hard-coding your operating system's
output for specific tests---will result in a 0 on the test portion of your grade
(even if there are some tests that you passed without such hard-coding).  We will
award the rest of the points (40%) for a design document that you will complete.
We will provide a rubric for the design doc with each assignment.

You will each be given 3 "grace days" that you may use, no explanation
necessary, to extend the due date of assignments 2--4 by 24 hours (this includes
weekends and holidays).  *We will not grant any other extensions*.  Once you’re
out of grace days, late projects will lose 25 points (out of 100) per day.  A
few things to note:

* We will automatically use grace days greedily for you---so, if you turn in A2
  26 hours late, we deduct two grace day.
* Assignments 2--4 will be worth the same number of points.
* In our opinion, the assignment difficulty follow the following ordering from
  easiest to most difficult: A4, A2, A3.
* Because you are in a partnership, you and your partner will have to use grace
  days on the same assignments.
* You can use any number of grace days on any assignment.


## Homework

We will assign homework on most week.  We will use the homeworks to track your
understanding of the material from the week's lectures.  As a result, they are
excellent preparation for the final exam.  The homeworks will be released early
on Fridays and will be due at the EOD on the subsequent Monday.

Many of the homework assignments will be in a take-home quiz format, although
they will include fewer questions than a typical take-home quiz.  Some of the
homeworks assignments will relate to the projects, typically as a mechanism to
encourage you to explore a part of pintos' design.


## Exams

We will have a single final exam, worth 10% of the grade.  You must take the
exam at the scheduled time unless you are ill or have an unexpected family
emergency and have the required documentation (e.g., a note from a doctor).  The
final exam will be cumulative and held at the time slot specified by the
registrar (6/10/24 from 4:00PM--7:00PM).


# Resources

Historically, I have found an extremely high correlation between student success
and attendance and lectures and office hours.  I will not take attendance, and I
will release course material so that missing a single lecture does not derail
your chances at success.  That said, operating systems are complex systems, and
there is a lot to learn.  There is no substitute for actively engaging with the
material during a structured course meeting.  Thus, my advise is to *come to
class*: ask questions in lecture, answer my discussion questions, do the
in-class activities, *take notes (!)*.

## Course Meetings

Our course meetings/lectures will follow the following structure:

* Monday and Wednesday lectures will follow a conventional lecture structure
  and cover the course material for that week.
* Friday lectures will finish lecture material for the week and then include a
  hands-on activity.  The activity will depend on the week, we may: analyze
  code, work on homework assignments, or walk through course projects.  For best
  results, plan on bringing a laptop (or, work together on a friend's laptop) on
  these days.
* Office hours will be open Q&A. If you come to office hours, have *specific
  questions* to ask.  General angst (e.g., ``I don't know where to start'') is
  completely normal for these projects, but will generally be better address
  during Friday lectures. Note that we will typically favor answering general
  design questions, which we can ask/answer in front of a group of students,
  rather than questions that only pertain to an individual.

## Materials

We will provide the following materials to help you in this course:

* We will release slides and/or notes for lectures on Canvas.
* We will release lecture videos on Yuja.
* Most of the material that we cover in course will come from the textbook,
  [Operating Systems, Three easy pieces, Arpaci-Dusseau &
  Arpaci-Dusseau](https://pages.cs.wisc.edu/~remzi/OSTEP/), written by the
  phenomenal Andrea and Remzi Arpaci-Dusseau.  There is some material that we
  will cover that is *not* in the book; when possible, I will release
  supplementary material to cover this other content

## Other Resources

We will also have a piazza for this course.  There are only two of us in the
course staff, so expect a *relatively* high response time on Piazza.  Your
classmates will probably be very helpful at giving advise for public questions.
Note: it is *not OK* to post your own code on piazza (it is *OK* to post code
that we discuss in class or from the original Pintos distribution).


# Academic Integrity

All members of the UCSC community benefit from an environment of trust, honesty,
fairness, respect, and responsibility. You are expected to present your own work
and acknowledge the work of others in order to preserve the integrity of
scholarship.

Academic integrity includes:
* Following assessment rules
* Incorporating proper citation of all sources of information
* Submitting your own original work

Academic misconduct includes, but is not limited to, the following:

* Copying/purchasing any material from another student, or from another source,
  that is submitted for grading as your own
* Plagiarism, including use of Internet material without proper citation
* Submitting your own work in one class that was completed for another class
  (self-plagiarism) without prior permission from the instructor.

Violations of the Academic Integrity policy can result in dismissal from the
university and a permanent notation on a student’s transcript. For the full
policy and disciplinary procedures on academic dishonesty, students and
instructors should refer to the [Academic Integrity for Graduate
Students](https://www.ucsc.edu/academics/academic-integrity/).

# Accessibility

UC Santa Cruz is committed to creating an academic environment that supports its
diverse student body. If you are a student with a disability who requires
accommodations to achieve equal access in this course, please submit your
Accommodation Authorization Letter from the Disability Resource Center (DRC) to
me privately by email, preferably within the first two weeks of the quarter. At
this time, I would like us to discuss ways we can ensure your full participation
in the course. I encourage all students who may benefit from learning more about
DRC services to contact the DRC by phone at 831-459-2089 or by email at
drc@ucsc.edu.


# Intellectual Property

The materials in this course are the intellectual property of their creators. As
a student, you have access to many of the materials in the course for the
purpose of learning, engaging with your peers in the course, completing
assignments, etc. You have a moral and legal obligation to respect the rights of
others by only using course materials for purposes associated with the
course. For instance, you are not permitted to share, upload, stream, sell,
republish, share the login information for, or otherwise disseminate any of the
course materials, such as: video and audio files, assignment prompts, slides,
notes, syllabus, simulations, data-sets, discussion threads. Conversely, any
materials created by you (for example, your videos, essays, images, audio files,
annotations, notes) are your intellectual property and you may use them as you
wish.

# Religious Accommodation

UC Santa Cruz welcomes diversity of religious beliefs and practices, recognizing
the contributions differing experiences and viewpoints can bring to the
community. There may be times when an academic requirement conflicts with
religious observances and practices. If that happens, students may request the
reasonable accommodation for religious practices. The instructor will review the
situation in an effort to provide a reasonable accommodation without
penalty. You should first discuss the conflict and your requested accommodation
with your instructor early in the term. You or your instructor may also seek
assistance from the Dean of Students office (https://deanofstudents.ucsc.edu).


# Principles of Community

The University of California, Santa Cruz expressly prohibits students from
engaging in conduct constituting unlawful discrimination, harassment or bias
(see https://reporthate.ucsc.edu/principles-and-policies/index.html).  I am
committed to providing an atmosphere for learning that respects diversity and
supports inclusively. We need to work together to build this community of
learning.  I ask all members of this class to:

* be open to and interested in the views of others consider the possibility that
  your views may change over the course of the term
* be aware that this course asks you to reconsider some “common sense” notions
  you may hold honor the unique life experiences of your colleagues
* appreciate the opportunity that we have to learn from each other listen to
  each other’s opinions and communicate in a respectful manner
* keep confidential discussions that the community has of a personal (or
  professional) nature
* ground your comments in the work we are studying.  Refer frequently to the
  texts and make them the focus of your questions, comments, and arguments.
  This is the single most effective way to ensure respectful discussion and to
  create a space where we are all learning together.


# Title IX and CARE

UC Santa Cruz is committed to providing a safe learning environment that is free
of all forms of gender discrimination and sexual harassment, which are
explicitly prohibited under Title IX. If you have experienced any form of sexual
harassment, sexual assault, domestic violence, dating violence, or stalking,
know that you are not alone. The Title IX Office, the Campus Advocacy, Resources
& Education (CARE) office, and Counseling & Psychological Services (CAPS) are
all resources that you can rely on for support.

Please be aware that if you tell me about a situation involving Title IX
misconduct, I am required to share this information with the Title IX
Coordinator. This reporting responsibility also applies to course TAs and tutors
(as well to all UCSC employees who are not designated as “confidential”
employees, which is a special designation granted to counselors and CARE
advocates). Although I have to make that notification, you will control how your
case will be handled, including whether or not you wish to pursue a formal
complaint. The goal is to make sure that you are aware of the range of options
available to you and that you have access to the resources you need.

Confidential resources are available through
[CARE](https://care.ucsc.edu). Confidentiality means CARE advocates will not
share any information with Title IX, the police, parents, or anyone else without
explicit permission. CARE advocates are trained to support you in understanding
your rights and options, accessing health and counseling services, providing
academic and housing accommodations, helping with legal protective orders, and
more. You can contact CARE at (831) 502-2273 or care@ucsc.edu.

In addition to CARE, these resources are available to you:

* If you need help figuring out what resources you or someone else might need,
  visit the [resources page from the Title IX
  Office](https://titleix.ucsc.edu/_content-blocks/left-nav-blocks/resources-landing-page.html)
* Counseling & Psychological Services (CAPS) can provide confidential
  [counseling support](https://caps.ucsc.edu). Call them at (831)
  459-2628.
* You can also report gender discrimination and sexual harassment and violence
  directly to the University’s Title IX Office (https://titleix.ucsc.edu), by
  calling (831) 459-2462 or by using their [online reporting
  tool](https://titleix.ucsc.edu/about/staff-contact-us.html).
* Reports to law enforcement can be made to the UC Police Department, (831)
  459-2231 ext. 1.
* For emergencies, call 911.

## Report an Incident of Hate or Bias

The University of California, Santa Cruz is committed to maintaining an
objective, civil, diverse and supportive community, free of coercion, bias,
hate, intimidation, dehumanization or exploitation. The Hate/Bias Response Team
is a group of administrators who support and guide students seeking assistance
in determining how to handle a bias incident involving another student, a staff
member, or a faculty member. To report an incident of hate or bias, please use
this
[form](https://ucsc-advocate.symplicity.com/care_report/index.php/pid894170?)


## Student Services

##### [Counseling and Psychological Services](https://caps.ucsc.edu)

Many students at UCSC face personal challenges or have psychological needs that
may interfere with their academic progress, social development, or emotional
welling. The university offers a variety of confidential services to help you
through difficult times, including individual and group counseling, crisis
intervention, consultations, online chats, and mental health screenings. These
services are provided by staff who welcome all students and embrace a philosophy
respectful of clients’ cultural and religious backgrounds, and sensitive to
differences in race, ability, gender identity and sexual orientation.

##### [Student Success and Engagement Hub](https://studentsuccess.ucsc.edu/)

The Division of Student Success provides campus-wide coordination and leadership
for student success programs and activities across departments, divisions, the
colleges, and administrative units.

##### [Slug Support](https://deanofstudents.ucsc.edu/slug-support/program/index.html)

College can be a challenging time for students and during times of stress it is
not always easy to find the help you need.  Slug Support can give help with
everything from basic needs (housing, food, or financial insecurity) to getting
the technology you need during remote instruction.  To get started with SLUG
Support, please contact the Dean of Students Office at 831-459-4446 or you may
send us an email at deanofstudents@ucsc.edu.

##### [Slug Help/Technology](https://its.ucsc.edu/index.html)

The ITS Support Center is your single point of contact for all issues, problems
or questions related to technology services and computing at UC Santa Cruz. To
get technological help, simply email help@ucsc.edu.

###### [On-Campus Emergency Contacts](https://www.ucsc.edu/help/)

Slug Help/Emergency Services. For all other help and support, including the
health center and emergency services, start here. Always dial 911 in the case of
an emergency.
