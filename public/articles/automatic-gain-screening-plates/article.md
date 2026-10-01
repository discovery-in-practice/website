# Should I use automatic gain on every plate in a screening run?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/automatic-gain-screening-plates/

When to keep plate reader gain fixed, when calibrated automatic range selection helps and how to check comparability across a screening run.

For directly comparable raw fluorescence values, establish a suitable gain during assay development and usually keep it fixed across the run. Recalculating gain on each plate can change the reporting scale. Automatic range selection can still be appropriate when the reader reports values on a validated common scale or when the analysis has been shown to tolerate the change. Before combining plates, check whether the selected mode changed their reporting scale. [1]

## Automatic gain can mean different operations

An automatic setup may inspect a reference well or scan a plate, choose one gain, then use it for the measurement. BMG LABTECH describes both selected-well and full-plate adjustment; in the latter, the strongest signal influences the chosen gain. A plate containing an unusually bright sample can therefore produce a different setting from a routine plate. [1]

Other systems adjust ranges during acquisition and convert results to a common output scale. That conversion is part of the measurement method. Check the mode's documentation, export fields and behavior with standards rather than assuming that every option called “automatic” works alike.

Gain controls amplification, not the amount of light emitted by a sample. A numerical gain setting also need not be a linear multiplication factor: doubling the setting does not necessarily double the response. Tecan's Infinite 200 PRO manual relates gain to photomultiplier tube (PMT) supply voltage and the electrical range needed by its converter. [2]

## What plate normalization can cancel

Consider a constructed example. On one plate, low controls, high controls and a sample read 100, 1,100 and 600 relative fluorescence units (RFU). The sample lies halfway between the controls. If a change of amplification doubles all three readings to 200, 2,200 and 1,200 RFU, the normalized position is still 50%, although the raw sample value doubled.

This cancellation works because the same linear scale change affects controls and sample. Saturation, unequal backgrounds, weak-signal noise or different gain behavior across wells can break that assumption. A satisfactory normalized control metric does not establish that low positives retain their precision.

Ratiometric assays need an additional check. Independently changing donor and acceptor gain can change their ratio unless the channel responses are calibrated onto the intended scale. Using simultaneous dual-emission detection aligns the observation times; it does not automatically correct a change in their relative amplification.

## Choose a setting with room for the samples you will encounter

During development, include blanks, low positives, routine high controls and the brightest plausible sample. Test the selected gain across that range, allowing for expected plate-to-plate variation. Verify proportional response at the bright end and useful precision near the blank. An unusually fluorescent compound or a sample above the control range can still exceed the chosen window. [1,2]

If no fixed setting resolves the required range, investigate a validated broad-range mode, an alternative assay configuration or a predefined repeat-measurement procedure. Simply lowering gain until overflow disappears can sacrifice weak-signal resolution. Raising it to enlarge every number can compromise the bright end.

## Record enough information to detect a change

Include common reference material and appropriate assay controls throughout the run. Save gain or range information, raw signals and normalization settings with every plate. Track changes in reference response and precision, and flag range transitions for review.

To qualify an automatic mode, challenge it with matched plates that differ in their brightest wells while sharing the same low and middle standards. Compare the shared standards' recovered response and variability. Balance assay age and temperature so those variables do not confound the comparison. Accept the automatic mode when those shared standards retain their recovered response and required precision across the challenge.

## References

1. BMG LABTECH. [How to optimise the gain setting of my microplate reader?](https://www.bmglabtech.com/en/howto-notes/how-to-optimise-the-gain-setting-of-my-microplate-reader/). Gain selection, strongest-well adjustment and fixed-setting comparisons. Instrument-specific numerical settings and targeting percentages are not generalized.

2. Tecan. [Infinite 200 PRO Instructions for Use](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), revision 1.4, June 2021, p. 72. Gain, supply voltage, converter range and fluorescence signal quality.
