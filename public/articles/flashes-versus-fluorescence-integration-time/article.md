# Should I increase the number of flashes or the integration time in a fluorescence assay?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/flashes-versus-fluorescence-integration-time/

Choose between more flashes and longer collection windows for prompt fluorescence and TR-FRET, with timing examples and practical checks.

For prompt fluorescence, increasing the number of excitation flashes is usually more useful than extending a collection window after the fluorescence has ended. In time-resolved fluorescence, changing the delayed collection window can capture more of the long-lived emission. The choice depends on when useful light reaches the detector and how that detection mode defines “integration time.” [1]

## Separate flash count from collection time

Flash count is the number of excitation events contributing to a reported result. The per-flash integration window is the time during which emission is collected after each event. Total well time also includes delays, movement, settling and other instrument operations. Increasing one setting does not necessarily change the others in the same proportion.

BMG LABTECH describes averaging the responses from successive flashes, with a tradeoff between variability and acquisition time. A larger flash count can therefore reduce noise while leaving the displayed mean intensity approximately unchanged. Check the replicate scatter even when the reported mean barely changes. [2]

For independent, equally informative acquisitions of a stable sample, increasing from 10 to 40 flashes halves the standard error of their average. Correlation between flashes, photobleaching or sample drift can reduce that benefit. This is an averaging model, not a promised fourfold change in reader speed or sensitivity.

## Prompt fluorescence needs excitation events

Tecan's Infinite 200 PRO manual explicitly notes that extending the prompt-fluorescence integration time does not help once the flash-related signal has vanished. A longer window can include additional background or detector noise. More excitation events provide another opportunity to collect useful emission. [1]

Increasing flash count has limits. Check whether repeated excitation changes the sample, and preserve sufficient time resolution for kinetics. The manual also describes settling effects after plate movement; that waiting time addresses mechanical disturbance rather than photon collection.

## Time-resolved assays have a longer emission tail

In time-resolved Förster resonance energy transfer (TR-FRET), delayed detection collects emission from a long-lived donor and sensitized acceptor after much prompt background has decayed. Revvity's common red homogeneous time-resolved fluorescence (HTRF) configuration uses donor and acceptor channels around 620 nm and 665 nm. Delay and window length must suit that assay's donor and optics. [3]

As an illustrative model, assume a single exponential emission lifetime of 1,000 µs and a delay of 50 µs. A 400 µs collection window captures about 31% of the total post-excitation emission; an 800 µs window captures about 52%. Doubling window length collects only about 1.67 times as much signal in this model. A constant background would accumulate for twice as long. These are calculated fractions, not recommended HTRF settings.

Efficient excitation, including a compatible pulsed laser, can improve the useful photon yield per event. Simultaneous dual-emission collection measures the two channels over the same events and windows. Verify both raw channels; a weak denominator can undermine a precise-looking acceptor signal. [3]

## Compare settings at the time budget you actually have

Use blanks, low positives and representative high signals. Compare a flash-count series first, holding per-flash timing fixed. For time-resolved assays, separately test validated delays and windows. Record times in µs and total plate-read time in s.

Assess repeatability, independently prepared wells and the biological response. Balance measurement order when bleaching or assay age could confound the comparison. Keep the shortest setting that preserves the required response differences across replicate preparations.

## References

1. Tecan. [Infinite 200 PRO Instructions for Use](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), revision 1.4, June 2021, p. 77. Prompt fluorescence, flash count, delayed integration and settling.

2. BMG LABTECH. [How does the number of flashes influence measurement results?](https://www.bmglabtech.com/en/howto-notes/how-does-the-number-of-flashes-influence-measurement-results/). Flash averaging, concentration-dependent variability and acquisition time. Example-specific flash counts are not generalized.

3. Revvity. [HTRF Technical Booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf), pp. 9–13 and 20. Long-lived donors, delayed detection, red donor/acceptor channels and excitation-source guidance.
