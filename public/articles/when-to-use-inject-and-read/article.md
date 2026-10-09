# When do I need inject-and-read measurements instead of dispensing the whole plate first?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/when-to-use-inject-and-read/

Choose inject-and-read from reaction kinetics and timing tolerance, with examples distinguishing fast signals from stable glow endpoints.

When signal changes quickly after reagent addition, transfer time and differences in well age can compromise the result; that is when inject-and-read helps. The reader must deliver the trigger and collect the relevant time window with reproducible delay. Stable glow assays often permit whole-plate dispensing, incubation and later reading, provided the reagent protocol and timing tolerance support that workflow. [1,2,3]

## Measure time from reagent addition in each well

The relevant age is time since reaction initiation in each well. It includes dispensing, mixing, any programmed delay and movement into the optical position. Starting a plate scan at a recorded time does not establish a common reaction age if the trigger reached different wells at different times.

As a constructed timing example, consider a signal with a 2 s exponential half-life. After 5 s, its instantaneous intensity is about 17.7% of its initial value. A 0.5 s difference in acquisition delay changes intensity by about 15.9%. These values illustrate sensitivity to timing; they are not a specification for a commercial luciferase reagent.

The detector collects over an interval rather than at a mathematical instant. Define both the delay after injection and the integration duration. Extending collection cannot recover a transient that ended before the acquisition window opened. Mixing and injector-to-detector dead time can also make the earliest phase inaccessible.

## Check the exact luciferase formulation

Promega's Dual-Luciferase Reporter Assay System, TM040, describes a typical 2 s delay followed by a 10 s measurement and recommends dual injectors for multiwell operation. Its instructions also accommodate manual addition in a single-sample workflow. [1] The required synchronization depends on how many samples must be compared and when their signals are read.

Promega's Dual-Glo system instead specifies at least a 10 min incubation before measurement and reading within its stated 2 h window. The manual says the assay was not designed for automated injectors because of foaming. [2] An injector would introduce a compatibility problem unless a suitable procedure were validated.

Nano-Glo Dual-Luciferase has its own injection, mixing and incubation guidance, including requirements for separate reagent paths. [3] Select the manual for the exact formulation; the word “luciferase” does not determine the timing program.

## Establish the allowable age difference

Measure a representative time course after addition under the intended temperature and mixing conditions. Include low and high controls because their kinetics may differ. Identify the interval in which signal separation and variability meet the assay's requirements. Then compare that interval with the actual first-to-last-well age spread in the proposed workflow.

A dispense sequence and read sequence that preserve similar ages can work well for a stable endpoint. Conversely, a repeatable trend across the plate that follows reaction age can require per-well injection, tighter scheduling or a different reagent formulation. Avoid correcting such a trend from plate position alone before establishing its cause.

## Include temperature and mixing in the timing budget

For a validated room-temperature glow endpoint, a stable measurement chamber helps keep the qualified time window applicable throughout a run. Follow equilibration and stabilization instructions; immediate reading can be premature even when the light is detectable. [3]

Verify delivered volumes, mixing, bubble formation and carryover with the actual reagent. Confirm that the complete addition-to-measurement sequence captures the event you need, including the earliest time point you intend to interpret.

## References

1. Promega. [Dual-Luciferase Reporter Assay System, TM040](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/0/dual-luciferase-reporter-assay-system-protocol.pdf), revised August 2023, sections 4.A–4.B and 6.D. Timing, injectors and Stop & Glo reagent carryover.

2. Promega. [Dual-Glo Luciferase Assay System, TM058](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/0/dual-glo-luciferase-assay-system-protocol.pdf), revised January 2023, p. 5. Ten-minute stabilization, two-hour reading window and automated-injector foaming warning.

3. Promega. [Nano-Glo Dual-Luciferase Reporter Assay, TM426](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/101/nanoglo-dual-luciferase-reporter-assay-protocol.pdf), revised February 2024, sections 3.A–3.H and 4.C. Temperature, mixing, injection, reagent carryover and coincidence-reporter design.
