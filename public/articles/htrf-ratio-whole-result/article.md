# HTRF: the ratio is not the whole result

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/htrf-ratio-whole-result/

A stable HTRF ratio can conceal a major loss of signal, degraded precision, or a channel-specific interference. The article explains how to retain and interpret both emission channels, per-well ratios, and acquisition conditions.

Two HTRF plates give almost identical ratios. On the second plate, both emission channels have lost most of their signal. Has the assay reproduced? Perhaps the ratio has corrected a shared optical effect exactly as intended. Perhaps the measurements are now much noisier, and a weak positive has become difficult to distinguish from background. Inspect the raw channels before deciding.

HTRF combines delayed fluorescence detection with a donor–acceptor measurement. That combination is useful because it rejects much short-lived background and can compensate for effects shared between channels. To use those advantages well, keep the two channel values. They explain what the final number leaves out.

## What the ratio corrects

For a common red-acceptor HTRF configuration, the reported ratio is:

R equals 10000 times A divided by D.

Here A and D are the acceptor- and donor-channel readings, commonly near 665 and 620 nm in that configuration. Other dye combinations need their specified optics. The factor of 10,000 makes the numbers convenient; it adds no information. Revvity recommends calculating the ratio separately for each well before calculating replicate statistics. [[1](https://discoveryinpractice.com/articles/htrf-ratio-whole-result/#ref-1)]

Suppose an effect multiplies both signals by the same factor q. Then qA divided by qD equals A divided by D. This is the useful cancellation at the center of ratiometric detection. It works for a shared proportional effect, not for every event that happens in the well.

Consider these constructed readings in arbitrary linear signal units:

| Condition | Acceptor A | Donor D | Ratio R |
| --- | --- | --- | --- |
| Reference | 2,000 | 10,000 | 2,000 |
| Both signals fall to one fifth | 400 | 2,000 | 2,000 |
| Only donor signal halves | 2,000 | 5,000 | 4,000 |
| Only acceptor signal halves | 1,000 | 10,000 | 1,000 |

The second row illustrates successful cancellation of a common scaling factor. It does not establish unchanged precision. The third row doubles the ratio without increasing acceptor signal at all. These are arithmetic examples, not assignments of a particular compound mechanism. Real changes in energy transfer can themselves affect both channels, so an unusual donor value is a reason to investigate, not an automatic reason to discard a hit.

Additive background behaves differently. With backgrounds present, the ratio contains A plus its background divided by D plus its background. A shared reduction in the genuine signals need not cancel once those backgrounds become substantial. Use the kit's specified controls and reduction method; do not invent an extra subtraction merely because the resulting curve looks better.

## Delta F is not FRET efficiency

A common HTRF normalization compares the sample ratio with the negative-control ratio:

Delta F in percent equals 100 times (R sample minus R negative) divided by R negative.

A sample ratio of 3,000 and a negative-control ratio of 1,000 produce a Delta F of 200%. That does not mean 200% energy transfer, 200% binding or 200% inhibition. It is a relative increase above the negative-control ratio. Revvity uses this normalization to help compare assay signals. [[1](https://discoveryinpractice.com/articles/htrf-ratio-whole-result/#ref-1)]

Converting that response into concentration or activity requires the assay's calibration and direction of response. A sandwich assay and a competitive assay can move in opposite directions as analyte increases. Know which measurement you are plotting before labeling the vertical axis “activity.”

Even the order of averaging matters. Suppose two replicate wells give A/D values of 200/1,000 and 200/2,000. Their scaled ratios are 2,000 and 1,000, averaging 1,500. Dividing the mean acceptor by the mean donor instead gives about 1,333. The latter effectively weights wells by donor intensity. Keep the per-well calculation and investigate the channel variation rather than letting an aggregation choice conceal it.

## Collect the two emissions from the same excitation events

Simultaneous dual-emission collection is particularly valuable here. The donor and acceptor measurements can share the same excitation pulses, observation interval and well position. A fluctuation that affects both proportionally can then cancel in the ratio. Sequential measurements expose the two channels to different excitation events and potentially different sample conditions.

For a simple illustration, assume excitation amplitude varies independently by 2% between the two separate measurements. If all other errors are absent, the ratio acquires approximately 2.8% relative variation from those two independent contributions. With simultaneous collection, a perfectly common multiplicative excitation fluctuation cancels. Actual assays still have photon noise, detector noise and effects that do not scale both channels equally.

This is a precision benefit as well as a throughput benefit. Collecting both emissions together removes the need to repeat the acquisition merely to obtain the denominator. In a long plate queue, saved acquisition time can also reduce differences in assay age between the first and last plates. The actual time saving depends on motion, excitation and other overhead; it is not automatically a twofold speed increase.

Check what “dual” means in a reader specification. Ask whether both channels collect from the same pulses, with appropriate delays and integration windows, or are acquired in succession. Confirm channel calibration and usable linear ranges. Simultaneous acquisition preserves shared information; mismatched gates or nonlinear response can still spoil the comparison.

## Laser excitation can buy useful photons and time

A well-matched pulsed ultraviolet laser can deliver substantial excitation energy in the donor's useful absorption band. Revvity's HTRF technical guide describes the distinction between high-energy fixed-wavelength laser excitation and the broader excitation spectrum of a flash lamp. [[2](https://discoveryinpractice.com/articles/htrf-ratio-whole-result/#ref-2)] The practical question is how efficiently the system turns that excitation into useful detected photons in the required time.

More useful excitation can improve the weak acceptor measurement without requiring more labelled reagent. Alternatively, it can support the required precision with fewer pulses or a shorter acquisition. That matters in small volumes and large screens, where increasing reagent concentration may change binding equilibria or increase background.

Under an ideal photon-limited model, four times as many useful detected photons would halve the relative shot-noise contribution. That is a conditional scaling relationship, not a promised improvement from installing a laser. Displayed fluorescence units are not automatically photon counts, and background or biological variation may dominate the actual error.

Evaluate wavelength compatibility, pulse timing, collection efficiency and precision together. Excitation delivered outside the useful absorption range is not a benefit. Nor is a higher donor count sufficient evidence that the acceptor channel improved. Check low-signal samples, blanks and the brightest controls, using the actual plate and volume.

Laser excitation and simultaneous emission collection address different parts of the measurement. The laser can improve how efficiently the sample is excited; collecting both channels together retains their relationship. Combining them can deliver precise ratios quickly, provided the optics, timing and detector response are qualified for the assay.

## Investigate an unexpected ratio

Plot donor and acceptor signals alongside the ratio across each concentration response. A proportional loss in both channels suggests a different follow-up from an isolated donor collapse or an acceptor increase. None of those patterns uniquely identifies the cause, but they make the next experiment more specific.

For a suspicious compound, use controls suited to the assay architecture: donor-only or acceptor-only conditions where informative, the prescribed negative control, and a detection system that retains the labels while bypassing the biological interaction under investigation. Match compound concentration and matrix. A fluorophore control in clean buffer may miss interference that appears only in the assay mixture.

Revvity's reader control kit provides a separate way to check HTRF optical and software configuration and follow instrument performance. [[3](https://discoveryinpractice.com/articles/htrf-ratio-whole-result/#ref-3)] A successful reader check helps isolate the problem, but it does not validate a compound's behavior or the biological assay. Keep these questions separate when troubleshooting a failed transfer.

Preserve sample conditions during measurement too. Follow the specific assay's incubation temperature and timing, and qualify chamber stability over sustained use. A ratio cannot be expected to cancel temperature-dependent changes in binding or unequal channel behavior. Good focus and low crosstalk also matter: nearby bright wells can contribute different fractions of light to the two channels.

For routine screening, retain both raw channels, the per-well ratio, the normalization controls and the acquisition settings. Assess precision near the decision threshold, not just the maximum ratio. Use the donor and acceptor readings to assess what a stable ratio actually establishes.

## References

1. Revvity. [HTRF Signal Treatment and Analysis](https://www.revvity.com/ask/htrf-signal-treatment-and-analysis). Per-well ratios, Delta F, negative controls and calibration.

2. Revvity. [HTRF Technical Guide](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf). HTRF detection and reader guidance; p. 20 discusses laser and flash-lamp excitation.

3. Revvity. [HTRF Reader Control Kit, 62RCLPEA](https://resources.revvity.com/pdfs/rvty_ls_manual_62RCLPEA.pdf). Version 08, January 2026. Optical/software configuration and instrument-performance checks.
