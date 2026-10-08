# Can sequential AlphaPlex channel reads bias the result even if both channels look stable?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/sequential-alphaplex-channel-bias/

See how AlphaPlex channel order can bias a repeatable ratio, and how simultaneous dual emission and matched reading-history controls help.

A consistent difference between first and second AlphaPlex readings can bias one channel even when each channel is precise. Revvity's development guide describes a second sequential reading that can lose a few percent of signal through oxidation of protein recognition elements during the first measurement. Simultaneous dual-emission detection avoids the extra excitation required by that sequential arrangement. [1]

## How channel order changes a ratio

AlphaPlex uses distinguishable acceptor-bead emissions to measure more than one analyte in a well. In the guide's terbium/europium configuration, AlphaPlex 545 and AlphaLISA emissions are resolved with appropriate narrow emission filters. Each analyte may have its own calibration curve; a ratio between them is an optional analysis choice, not a universal AlphaPlex output. [1]

Consider a constructed example in which two background-corrected channels would give 1,000 and 10,000 counts under equivalent conditions. Their dimensionless ratio is 0.100. Suppose a second excitation reduces the subsequently measured channel by 3%.

If the numerator is read second, the ratio becomes 970/10,000 = 0.0970. If the denominator is read second, it becomes 1,000/9,700 = 0.1031. The same assumed loss moves the ratio down by 3% or up by approximately 3.1%, depending on order. Replicates could agree closely while their mean ratio remained biased.

This example illustrates a mechanism; 3% is not a specification for another assay. Even without calculating a ratio, the second analyte's calibration can be affected if standards and samples receive different reading histories.

## Collect both emissions from the same excitation

Simultaneous dual emission gives the channels the same acquisition interval and exposure history. Matched photomultiplier tubes (PMTs), calibrated optical paths and adequate linear range then help preserve the relationship between the two signals. Simultaneity cannot correct spectral leakage, an overloaded detector or an incorrectly assigned calibration curve.

Revvity also reports lower counts along a secondary optical path and comparable assay sensitivity for the sequential and simultaneous configurations in its example. [1] Qualify sensitivity and acquisition time separately, using the intended assay and its controls.

## Test channel order with fresh matched wells

Prepare equivalent replicate sets. Read one in terbium-then-europium order and another in the reverse order; use fresh wells for each sequence. Where available, include the validated simultaneous configuration. Keep excitation settings, incubation age, temperature and final read timing comparable. Distribute controls across the plate and retain both raw channels.

Include single-analyte controls to measure spectral spillover. Standards spanning the sample range reveal whether an order effect changes with brightness. A reproducible order-dependent difference supports a reading-history effect, though it does not identify the damaged molecular component. Disagreement between optical configurations also requires checking their calibration and collection efficiency.

For the sequential configuration described in its guide, Revvity recommends terbium first and the generally stronger europium signal second. [1] Follow the applicable validated protocol. Maintain stable assay temperature, preferably near the specified room-temperature endpoint conditions, because temperature drift could otherwise be mistaken for an order effect. The AlphaScreen guide specifically warns about temperature effects and recommends separate wells for time-course measurements. [2]

## References

1. Revvity. [AlphaPlex assay development guide](https://resources.revvity.com/pdfs/gde-user-guide-alphaplex-assay-development-guide.pdf), p. 13 and pp. 27–28. Sequential-read oxidation, channel order and configuration-specific simultaneous/sequential comparisons.

2. PerkinElmer. [AlphaScreen practical guide](https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/hts/documents/AlphaScreenPracticalGuide.pdf), PDF pp. 30–32 / printed pp. 24–26. Separate wells for time points, light exposure and temperature effects. 
