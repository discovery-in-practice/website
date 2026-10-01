# Should I always read at a fluorophore's published excitation and emission peaks?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/fluorescence-excitation-emission-wavelengths/

Why published dye peaks are starting points, with FITC wavelengths, bandwidth overlap and practical tests using low positives and realistic blanks.

Start with the published peaks, then test the surrounding wavelengths in your assay. The best settings depend on spectral bandwidth, the sample matrix, excitation rejection and the instrument's optical response. A setting slightly away from a dye's maximum can resolve a weak assay response more clearly if it collects much less background. Optimize with the actual labeled material and representative blanks.

## Check what the published wavelength describes

Thermo Fisher's Molecular Probes Handbook lists fluorescein-5-isothiocyanate, or FITC, with an absorption maximum of 494 nm and an emission maximum of 519 nm at pH 9. The pH and chemical form belong with those numbers whenever you use them. Absorption and excitation spectra are related but describe different measurements. The handbook also documents pH-dependent fluorescence and changes associated with conjugation. [1]

For a FITC-labeled reagent, start near the supplier's recommended excitation and emission bands, then verify the labeled reagent in its assay buffer. Do not raise assay pH to 9 simply because that is where a reference spectrum was measured. The protein, cells or binding reaction may require different conditions.

A small separation between spectral maxima also leaves little room to reject excitation. With illustrative 40 nm-wide bands centered at 494 nm and 519 nm, the nominal intervals are 474–514 nm and 499–539 nm. They overlap by 15 nm. Real passbands have shaped edges rather than rectangular boundaries, but this arithmetic shows why “center both bands on the peaks” can be a poor optical instruction.

## A plate reader collects a band of wavelengths

A 20 nm-wide emission setting centered at 530 nm nominally covers 520–540 nm. It samples part of the emission spectrum rather than just its value at 530 nm. The detected result depends on the fluorescence throughout that band, weighted by optical transmission and detector sensitivity.

Wider bands can collect more useful light. Tecan's bandwidth note illustrates the accompanying tradeoffs in intensity, spectral resolution and application performance. [2] A wavelength-selectable system with high transmission, good excitation blocking and compatible dichroics gives more freedom to use that extra collection efficiently. The widest available band still needs testing in the actual assay.

A lower raw reading can accompany a better measurement. For example, moving the emission band away from a strong medium background can improve the separation between low positives and blanks. Some compounds also fluoresce in the detection band or absorb excitation and emission light, as the Assay Guidance Manual explains. [3]

## Choose settings with low positives and realistic blanks

If scans are available, measure the labeled reagent, an unlabeled matrix control and relevant compound-only controls separately. Keep gain and geometry documented and avoid saturated signals. An apparent spectral peak from a mixed sample may belong partly to the medium or an interfering compound.

Use those scans to choose a small set of plausible center wavelengths and bandwidths. Compare independently prepared low positives, negative controls and intermediate responses at a realistic acquisition time. Inspect blank variability and weak-sample precision alongside signal-to-background. A large ratio can still accompany too few useful photons for reliable discrimination.

For a ratiometric assay, retain the kit's validated donor and acceptor channels while testing permitted adjustments. Changing a band can alter spectral bleed-through and channel balance. Record center wavelengths in nm, bandwidths in nm, read direction, focal setting and acquisition timing. Another laboratory needs those details to reproduce the measurement; “FITC settings” leaves too much unspecified.

## References

1. Thermo Fisher Scientific. [Fluorescein, Oregon Green and Rhodamine Green Dyes, Molecular Probes Handbook section 1.5](https://www.thermofisher.com/us/en/home/references/molecular-probes-the-handbook/fluorophores-and-their-amine-reactive-derivatives/fluorescein-oregon-green-and-rhodamine-green-dyes.html). Table 1.4, FITC F143, and pH-dependence notes. Web passages only; full download unavailable.

2. Tecan. [Impact of Extended Adjustable Monochromator Bandwidth in Fluorescence Based Application Technologies](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/Infinite_M1000_Impactofbandwidth_396061_V1.0.pdf), technical note 396061, pp. 1–2 and assay examples. Historical instrument-specific demonstration of bandwidth, throughput and resolution tradeoffs.

3. Anton Simeonov and Mindy I. Davis. [Interference with Fluorescence and Absorbance](https://www.ncbi.nlm.nih.gov/books/NBK343429/). Assay Guidance Manual, updated 1 July 2018. Reviewed in the supplied June 2026 compilation, PDF pp. 1259–1264, particularly p. 1262; current web access was blocked.
