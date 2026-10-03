# What does a dedicated TR-FRET detector add beyond time-gating a general-purpose PMT?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/dedicated-tr-fret-detector-time-gating/

Understand detector recovery, delayed background, spectral sensitivity and linearity when evaluating dedicated TR-FRET detection and laser excitation.

A dedicated time-resolved Förster resonance energy transfer (TR-FRET) detector path can be optimized to measure weak delayed emission after an intense excitation pulse. Compare spectral sensitivity, prompt-pulse suppression, recovery behavior, noise and linearity. A delayed acquisition window specifies when data are collected; it does not, by itself, establish what happened to the detector before that window opened. [1]

## What happens before the collection window opens?

A photomultiplier tube (PMT) may receive a large burst of stray excitation or prompt fluorescence before the desired delayed signal. Hamamatsu explains that this can saturate the PMT or subsequent circuits and describes electronic gating that suppresses response during unwanted intervals. [1] A software delay that discards early output does not necessarily prevent that exposure. Readers implement timing and protection differently, so ask how the actual detection path works.

Afterpulses are another detector-specific concern. Hamamatsu describes spurious pulses following a preceding signal, including mechanisms operating from nanoseconds into microseconds. [1] Those times should not be stretched into a blanket explanation for every high-background assay collected tens or hundreds of microseconds later. Establish the delay dependence and the instrument's recovery behavior before assigning the cause.

An optimized detector is valuable when these characteristics improve the measurement in the chosen time window. The word “dedicated” is not itself a sensitivity specification. BMG LABTECH, for example, describes a separate matched PMT pair optimized for time-resolved fluorescence and TR-FRET in the PHERAstar FSX. [2] Use assay controls to establish what that architecture delivers at the required read time.

## Good excitation and good detection have to work together

For common europium-based homogeneous time-resolved fluorescence (HTRF), donor and acceptor emissions are measured near 620 nm and 665 nm. After suitable ultraviolet excitation, the donor continues emitting long enough for delayed collection to suppress much of the prompt fluorescence. Revvity's technical booklet discusses excitation-source choice as well as this time discrimination. [3]

A suitable pulsed laser can deliver more useful excitation to the donor, helping weak assays collect sufficient photons in a practical read time. Efficient delayed detection must then collect those photons without a disproportionate rise in background or nonlinear response. The stronger pulse also makes optical rejection and detector protection worth checking.

Optical rejection matters before the electronics apply any correction. Removing an average background cannot undo detector overload, and subtraction does not remove the photon noise of unwanted light that was collected. Check spectral leakage within a well separately from optical crosstalk between wells. Both can compromise a weak acceptor channel.

## Evaluate the complete delayed measurement

Compare matched assay plates using reagent blanks, donor-only controls, acceptor-only controls and low and high assay controls. Scan delay and collection-window duration in microseconds (µs), recording pulse count and total read time in seconds (s). Preserve raw donor and acceptor values.

At very short delays, prompt leakage or recovery may dominate. At longer delays, useful donor emission has also decayed. A lower blank at a longer delay is helpful only if the assay retains adequate precision and separation. Use the same source and timing when isolating a detector comparison; otherwise describe the result as a comparison of complete systems.

Simultaneous dual-emission acquisition allows matched donor and acceptor observations after the same excitation event. Confirm that both channels use the intended timing windows and remain linear across the assay range. Judge performance with replicate variability, control separation and weak-sample behavior at the required throughput. Keep the lowest acceptable acquisition time with the validated protocol, together with the raw-channel limits that made it acceptable.

## References

1. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, sections 4.3.2, 4.3.6–4.3.9 and 5.1.7. Gain, linearity, noise, afterpulsing, polarization dependence and detector gating.

2. BMG LABTECH. [PHERAstar detection system](https://www.bmglabtech.com/en/pherastar-detection-system/). Manufacturer description of two matched detector pairs, including a pair optimized for time-resolved fluorescence. Complete page archived 29 September 2026; architecture is not independent performance validation.

3. Revvity. [HTRF Technical Booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf), pp. 9–13 and 20. Lanthanide donors, emission channels, delayed detection and excitation-source guidance. Archived complete PDF.
