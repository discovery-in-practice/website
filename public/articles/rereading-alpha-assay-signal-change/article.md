# Why does rereading an Alpha assay change its signal?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/rereading-alpha-assay-signal-change/

Separate Alpha signal changes caused by reaction age, temperature and excitation history, with a matched once-read versus reread experiment.

The second reading occurs later and follows a previous excitation; liquid temperature may have changed as well. Any of these conditions can change an Alpha result. Continuing binding or warming may raise the signal; exposure-related damage or other changes may lower it. Compare wells with different reading histories at the same assay age and temperature before deciding that the reader is drifting. [1,2]

## Excitation can alter the next measurement

AlphaScreen donor beads absorb light at 680 nm and generate singlet oxygen. When acceptor beads are sufficiently close, that reactive oxygen initiates the light-producing chemistry. Each excitation initiates a fresh round of reactive chemistry. [1]

Revvity's AlphaPlex development guide describes a small reduction after the first measurement from oxidation of protein recognition elements. In the configuration discussed, a second sequential reading may be lower by a few percent. [2] Revvity describes this mechanism for its AlphaPlex example; the loss need not be the same in another AlphaScreen, AlphaLISA or AlphaPlex assay. Exposure settings, reagents and recognition chemistry matter.

Ambient-light damage to donor beads is a separate exposure problem discussed in the AlphaScreen practical guide. [1] Keep plate handling and light protection consistent while testing reader-induced changes. Extra bench time otherwise becomes extra light exposure as well.

## Reaction age and temperature can hide the loss

Binding may continue toward equilibrium between readings. The AlphaScreen guide recommends determining that time course with separate wells for each time point. It also describes signal gradients while a plate warms or cools during acquisition. [1] A warmer second reading could partly offset an exposure-related loss. Similar first and second counts therefore do not prove that the first excitation had no effect.

Stable measurement close to the assay's validated room-temperature condition makes this comparison easier to interpret. Equilibrate the liquid before reading and keep its thermal conditions consistent inside the chamber. A stable display alone does not establish equal sample temperature, especially when matched plates have different residence times.

## Compare reading histories at the same final time

Prepare matched replicate wells from the same mixture. Designate one set to be read only at the final time and another set to be read earlier and again at that final time. Distribute the sets across the plate to reduce position bias. If selective well reading is unavailable, use matched plates with equivalent handling and temperature histories.

Keep volumes, incubation, mixing, light exposure and final acquisition settings the same. Record the earlier excitation settings and the exact times. Additional sets can test whether the effect increases with the number of prior reads. Use enough replicates to distinguish a small difference from ordinary well variability.

A lower final signal in previously read wells supports a measurement-history effect. If once-read control wells also change across final time points, investigate reaction age, temperature and other shared processes. Either pattern needs appropriate controls; the comparison does not, by itself, identify a particular oxidized protein or damaged bead component.

## In AlphaPlex, the first channel can affect the second

Sequential AlphaPlex acquisition can expose the same sample before collecting its second emission channel. Simultaneous dual-emission detection collects both channels during one acquisition, avoiding the extra excitation required by that sequential arrangement. Properly calibrated paired detectors are useful here because the two observations share the same exposure history.

Revvity also reports configuration-dependent differences in optical throughput and comparable assay sensitivity for its illustrated sequential and simultaneous setups. [2] Avoid turning fewer reads into a universal sensitivity multiplier. The practical benefit is shorter acquisition and a cleaner comparison of two emissions from the same sample state.

Keep the first valid result and record all rereads. If a rerun is needed, apply a predefined rule and compare it with controls that have the same exposure history. A rerun policy should define which result is retained before either reading is inspected.

## References

1. PerkinElmer. [AlphaScreen practical guide](https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/hts/documents/AlphaScreenPracticalGuide.pdf), PDF pp. 8, 30–32 / printed pp. 2, 24–26. Signal chemistry, separate wells for time points, light exposure and temperature effects. Historical numerical examples are assay-specific.

2. Revvity. [AlphaPlex assay development guide](https://resources.revvity.com/pdfs/gde-user-guide-alphaplex-assay-development-guide.pdf), archived edition, p. 13 and pp. 27–28. Oxidation-related second-read loss, simultaneous versus sequential acquisition and configuration-specific optical/sensitivity results.
