# Why do filter and monochromator readers perform differently at the same nominal wavelengths?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/filter-monochromator-same-wavelengths/

Why matching wavelengths does not match plate reader performance, with bandwidth, blocking, dichroics and practical method-transfer checks.

Matching the excitation and emission center wavelengths leaves much of the measurement unmatched. Bandwidth, optical transmission, rejection of unwanted light, excitation delivery, read geometry and detector response all influence the result. At 485 nm excitation and 535 nm emission, two readers may still illuminate and collect light differently, and their relative fluorescence units (RFU) may use different scales. Compare assay performance under documented settings before attributing the difference to filters or monochromators alone.

## What center wavelengths leave unspecified

Suppose two hypothetical emission settings are both centered at 535 nm. One has a 10 nm full width at half maximum (FWHM), and the other has a 30 nm FWHM. For symmetric bands, their half-height spans are approximately 530–540 nm and 520–550 nm. These are different spectral measurements. The broader band may admit more desired fluorescence, more background, or both.

Even matching those widths would leave the passband shape, peak transmission and out-of-band blocking unspecified. FWHM describes width at half the maximum transmission; it does not tell you how much excitation light leaks through far from the emission band. For weak fluorescence in the presence of intense excitation, that missing information can matter greatly. [1]

A dichroic mirror can direct excitation toward the well and emission toward the detector according to wavelength. Its transition region must suit the selected bands. Good separation can retain useful photons while excluding unwanted light before detection. Check the installed dichroic against the complete excitation and emission bands. [2]

## Monochromator is a category with different implementations

In a conventional grating monochromator, dispersion and slits select a region of the spectrum. Tecan's Infinite 200 PRO manual describes using two monochromators in series on each side to improve rejection of unwanted wavelengths. Blocking and optical throughput must both be considered when judging such a design. [1]

Other wavelength-selectable readers use movable short-pass and long-pass filters to define the band, together with a wavelength-adjustable dichroic. BMG LABTECH describes that arrangement for its monochromator architecture. Broad selectable bands and efficient excitation/emission separation can preserve useful light while retaining wavelength flexibility. Check the benefit with assay-matched blanks and low positives. [2]

Fixed interference filters can offer high transmission and strong blocking for an established assay. They require the appropriate installed set. Revvity's HTRF guide describes the practical tradeoff between transmission and wavelength flexibility, but the word “monochromator” alone cannot predict the sensitivity of every current implementation. [3]

## Decide whether you are transferring a method or comparing capability

For method transfer, document the complete excitation and emission settings, including centers and bandwidths in nm. Record plate, volume in µL, top or bottom reading, focus or read height, gain, acquisition timing and temperature. Match the assay's age at reading. If the optical configurations differ, preserve that difference in the record rather than calling the methods identical.

For a capability comparison, optimize each reader within its supported settings using the same assay preparations. Compare a low-concentration series with matrix-matched blanks, weak-positive precision and recovery, and linearity through the bright samples. Define the detection-limit calculation and measure total plate-read time. This answers how well each configured system handles the assay.

The two exercises may produce different rankings. A reader with a poor inherited configuration may perform well after optimization. Conversely, more RFU after optimization may simply reflect gain or additional background.

## Keep the reported endpoint in view

For homogeneous time-resolved fluorescence (HTRF), donor and acceptor settings and their measurement timing both matter. Sequential and simultaneous collection are different acquisition schemes, even with the same nominal channels. Simultaneous dual emission with matched, calibrated photomultiplier tubes (PMTs) can preserve paired-channel timing as the sample changes. It still needs suitable spectral blocking and sufficient counts in each channel.

Judge the raw channels as well as the final ratio, and retain the configuration that supports reliable low and intermediate responses. Save the complete optical and acquisition settings with the results so another scientist can reproduce the comparison.

## References

1. Tecan. [Infinite 200 PRO Instructions for Use](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), no. 30125944, revision 1.4, June 2021, pp. 31–34. Grating selection, FWHM, double monochromators and optical geometry.

2. BMG LABTECH. [Monochromator optical architecture](https://www.bmglabtech.com/en/lvf-monochromators/). Manufacturer description of variable filter bands and dichroic separation.

3. Revvity. [HTRF Technical Booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf), pp. 13 and 20. Ratiometric detection and reader-selection considerations.
