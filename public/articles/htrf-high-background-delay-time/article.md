# Why does my HTRF assay still have high background after I increase the delay time?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/htrf-high-background-delay-time/

Troubleshoot persistent HTRF background with donor-only, acceptor-only and assay controls before changing delay, filters or integration time.

A longer delay suppresses fluorescence that decays quickly after excitation. It does not necessarily remove long-lived donor light entering the acceptor channel, unwanted donor-to-acceptor energy transfer, or an inflated ratio caused by a weak donor denominator. Because a longer delay also discards useful delayed photons, identify the source of persistent homogeneous time-resolved fluorescence (HTRF) background before extending it again. [1,2]

## What the delay actually removes

Revvity HTRF assays use long-lived europium or terbium cryptate donors. In a common red-acceptor configuration, the reader detects donor emission at 620 nm and emission from an acceptor such as d2 or XL665 at 665 nm. The scaled HTRF ratio is 10,000 times the 665 nm reading divided by the 620 nm reading. These are channel wavelengths, not complete filter specifications: bandwidth and blocking must also suit the assay. [1,2]

For a concrete example, an Agilent/Cisbio Tag-lite CXCR4 application uses terbium-based HTRF detection on a Synergy H1 with excitation centered at 340 nm and a 30 nm bandwidth. Its emission filters are centered at 620 nm and 665 nm with bandwidths of 10 nm and 8 nm, respectively; the reported delay is 100 µs and collection duration 300 µs. These describe that published configuration, not universal HTRF settings. [4] During time-resolved Förster resonance energy transfer (TR-FRET), a nearby donor continues to excite the acceptor after the source pulse has ended. Consequently, acceptor emission associated with energy transfer persists into the delayed measurement window. The booklet discusses delays of 50–150 µs to reduce prompt background; that range explains the principle and is not a universal setting for every kit and reader. [1]

Unwanted donor emission admitted by the acceptor optics is long-lived too. Nonspecific proximity between labelled reagents can also produce delayed energy transfer. Waiting longer may reduce these contributions and the desired signal together, providing little improvement in discrimination.

## Use controls that identify the source

Buffer or assay-matrix blank: high delayed raw readings without labelled reagents point toward matrix emission, contamination, plate effects or instrumental background. Match the sample medium and compound solvent. Inspect both channels; a large ratio made from two near-blank readings is difficult to interpret.

Donor-only control: a 665 nm response associated with the donor can reveal donor emission admitted by the acceptor channel. Keep donor concentration and matrix matched. The result motivates a check of emission filters, spectral blocking and the reader's validated assay configuration. It is not, by itself, proof that a component is defective.

Acceptor-only control: residual delayed response can reveal direct-excitation background or another contribution in that preparation. Compare it with the matched matrix blank. Do not assume that all of it represents donor-to-acceptor transfer when no donor is present.

Both labels without the intended interaction: this tests the assay's actual negative state. Use a format-appropriate control: no analyte for a suitable sandwich assay, a nonbinding partner, or a validated competitor where appropriate. A binding assay may show a high basal signal because of nonspecific association or reagent concentration, even when the optics are working correctly.

Revvity includes cryptate-only, XL665-only and buffer blanks in its HTRF Reader Control Kit to help diagnose failed qualification. Its current analysis guidance also distinguishes donor-only corrections from negative controls containing both detection reagents. Optical blanks and biological negatives answer different questions. [2,3]

## Change timing after identifying the background

Compare a small matrix of manufacturer-supported delay and integration settings. Record delay in µs, collection duration in µs, pulse count, excitation settings, optical bands and both raw channels. Include useful positive and negative controls, and judge their variability as well as their separation. A very low blank can accompany an unusably dim positive control.

Good spectral separation prevents unwanted light from entering the measurement. Subtracting an average donor contribution cannot remove the photon fluctuations already recorded with it. A suitable laser and dedicated time-resolved detector can help collect useful delayed signal with appropriate timing, but they do not guarantee removal of spectral leakage or nonspecific binding.

Simultaneous dual-emission acquisition can preserve paired-channel timing during a changing assay. It still requires suitable filters and assay controls. If high background remains specific to wells containing both labels, investigate reagent concentrations and binding conditions before extending the delay further.

## References

1. Revvity. [HTRF Technical Booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf). Pages 9–13 and 20. Donor-fed delayed acceptor emission, red acceptors, time-resolved detection and excitation-source guidance.

2. Revvity. [HTRF Signal Treatment and Analysis](https://www.revvity.com/ask/htrf-signal-treatment-and-analysis). Ratio definition, background corrections and assay-format-specific negative controls.

3. Revvity. [HTRF Reader Control Kit 62RCLPEA](https://resources.revvity.com/pdfs/rvty_ls_manual_62RCLPEA.pdf). Version 08, January 2026; PDF pp. 2–4. Defined blank, donor, acceptor and calibrator controls for reader qualification.

4. Goodrich W, Amouretti X, Banks P, Degorce F, Pierre N. [HTRF Ligand Binding Assay for the Chemokine Receptor CXCR4](https://www.agilent.com/cs/library/applications/htrf-ligand-binding-assay-for-cxcr4-5994-3104EN-agilent.pdf). Agilent/Cisbio application note 5994-3104EN; PDF p. 3. Configuration-specific optical bands and read timing.
