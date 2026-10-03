# Why does an HTRF assay have good signal-to-background but poor Z-prime?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/htrf-good-signal-background-low-z-prime/

Explain low HTRF Z-prime despite a good signal window using control variability, raw donor and acceptor data, and a worked example.

An assay can have a large signal-to-background ratio and a poor Z-prime when its control wells vary: the ratio compares average signals, while Z-prime also accounts for their spread. For homogeneous time-resolved fluorescence (HTRF), inspect the donor and acceptor readings as well as the calculated ratio: a weak or unstable donor denominator can make the ratio noisy even when the average response looks impressive. [1,2]

## Define the numbers before comparing them

In the common red-acceptor HTRF configuration described by Revvity, acceptor emission is read at 665 nm and donor emission at 620 nm. Calculate the scaled ratio for each well:

R = 10000 × (A) divided by (D)

A is the 665 nm channel reading and D is the 620 nm channel reading on the instrument's corresponding output scales. R is a scaled, dimensionless ratio. The factor 10,000 changes its numerical scale, not its precision. Keep channel settings and normalization consistent. Other fluorophore configurations require their own settings. [2]

For the example below, signal-to-background (S/B) means the mean high-control ratio divided by the mean low-control ratio. It is not Revvity's Delta F percentage, which expresses the ratio increment relative to a negative control. Specify your convention whenever reporting a window.

Z-prime uses the control means and standard deviations:

Z′ = 1 − (3( σ subscript high + σ subscript low )) divided by (| μ subscript high − μ subscript low |)

Here μ denotes the mean and σ the standard deviation (SD) of the per-well ratio distribution. High and low describe the measured response; the biological positive control may be the low signal in a competitive assay. [1]

## The same window can hide very different precision

Both constructed examples have a mean high-control ratio of 10,000 and a mean low-control ratio of 1,000. Their S/B is 10. The ratios and their SDs are dimensionless.

| Example | High-control SD | Low-control SD | Z-prime |
| --- | --- | --- | --- |
| A | 200 | 100 | 0.90 |
| B | 2,500 | 100 | 0.13 |

Only the high-control variability changed. S/B remains unchanged while Z-prime falls sharply. These are arithmetic examples, not measured assay results, and neither establishes a universal acceptance threshold.

## Find where the variation enters

Start with per-well 620 nm, 665 nm and ratio data, plus their positions and read times. Calculate replicate statistics from per-well ratios; a ratio of group-average channels is a different calculation. Check for dim donor wells, bright-channel nonlinearity, outliers and row or column patterns.

Repeat readings of a stable prepared plate using the same settings. If read repeatability is good but separately prepared wells disagree, examine dispensing, mixing, cell loading, reagent concentration and equilibration. If repeated readings themselves vary, investigate photon collection, detector behavior, read timing and sample drift. Do not remove inconvenient wells without a documented reason.

When photon counts are limiting, compatible laser excitation, suitable filters and additional collection time may improve precision. Simultaneous dual-emission detection records donor and acceptor together, avoiding a time difference between the measurements. Matched, calibrated photomultiplier tubes (PMTs) can support consistent channel response, but neither matching nor simultaneity fixes a weak denominator or variable reagent addition.

Revvity's HTRF Reader Control Kit separates optical checks from biological assay performance using donor and acceptor controls, blanks and defined calibrators. Passing that check does not establish that your cell preparation or binding reaction is reproducible. Follow the kit's own incubation and read windows. [3]

Keep temperature and assay age consistent, and examine a realistic plate sequence. A ratio may cancel a shared optical fluctuation but cannot be assumed to cancel temperature-dependent binding or different changes in the two channels. Judge an optimization by the control distributions and the precision of relevant samples. Retain the raw channels so you can see what changed.

## References

1. Zhang J-H, Chung TDY, Oldenburg KR. [A Simple Statistical Parameter for Use in Evaluation and Validation of High Throughput Screening Assays](https://doi.org/10.1177/108705719900400206). Journal of Biomolecular Screening. 1999;4(2):67–73. DOI: 10.1177/108705719900400206. Original Z-factor paper; PubMed abstract accessed, full publisher text not retrieved for this draft. Formula also corroborated in the project’s NIH Assay Guidance Manual.

2. Revvity. [HTRF Signal Treatment and Analysis](https://www.revvity.com/ask/htrf-signal-treatment-and-analysis) and [HTRF Technical Booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf), pp. 13–17 and 20. Per-well ratios, signal treatment, temperature and reader principles; web

3. Revvity. [HTRF Reader Control Kit 62RCLPEA](https://resources.revvity.com/pdfs/rvty_ls_manual_62RCLPEA.pdf). Version 08, January 2026; PDF pp. 2–4. Reader qualification controls and timing conditions.
