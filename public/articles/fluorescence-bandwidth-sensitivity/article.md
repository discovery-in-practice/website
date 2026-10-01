# When does a wider fluorescence bandwidth improve sensitivity—and when does it make results worse?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/fluorescence-bandwidth-sensitivity/

Learn when wider fluorescence bandwidth improves sensitivity, when it adds background and how to compare settings using weak samples and blanks.

A wider bandwidth improves sensitivity when the additional useful fluorescence outweighs the extra background and noise. It can hurt by exciting interfering components, collecting their emission or admitting excitation light. Compare weak samples against matched blanks; a high signal in relative fluorescence units (RFU) may still give poor low-concentration separation. [1]

## A wavelength setting covers a band

An emission setting centered at 535 nm with a 20 nm full width at half maximum (FWHM) has half-height points approximately at 525 nm and 545 nm for a symmetric passband. Transmission falls away around the band rather than stopping at perfectly sharp boundaries. FWHM describes the main band; it does not specify how strongly unwanted wavelengths are blocked. [2]

Broader excitation can excite more of the fluorophore and more interfering compounds. Broader emission collects a larger spectral range from both. Their value depends on sample and blank spectra, optical transmission and detector response.

For a broad-emitting fluorophore, an adjustable wide emission band can be valuable when background is low. An appropriate dichroic mirror separates excitation and emission paths while preserving useful light. Widening the band must remain compatible with that separation and the blocking performance of the full optical path. [1,3]

## Follow the signal and the background separately

Consider three illustrative counting measurements with the same acquisition duration. Let S be the mean detected signal count and B the mean background count in the sample. Assume independent Poisson arrivals and that the mean background is known exactly. After subtracting that mean, the signal-to-noise ratio (SNR) is:

SNR = (S) divided by (square root of (S + B))

The counts refer to detected events, not RFU. SNR is dimensionless. An experimentally estimated blank and detector noise add further uncertainty.

| Illustrative setting | Signal count S | Background count B | Net SNR |
| --- | --- | --- | --- |
| Narrower band | 1,000 | 100 | 30.2 |
| Wider, clean band | 1,600 | 200 | 37.7 |
| Wider, dirty band | 1,600 | 5,000 | 19.7 |

Both wider bands collect more signal. The third performs worse because background photons fluctuate too, even after their average is subtracted. These are calculated examples, not measured optical-system performance. [4]

## Fluorescence intensity and TR-FRET need different choices

In Tecan's 2009 Infinite M1000 study using Invitrogen Quant-iT PicoGreen for double-stranded deoxyribonucleic acid (DNA), broader excitation and emission bands improved the reported detection limit across the tested settings. For its homogeneous time-resolved fluorescence (HTRF) Reader Control Kit, the selected configuration used excitation centered at 317 nm with a 20 nm bandwidth and emission centered at 620 nm and 665 nm, each with a 10 nm bandwidth. These historical examples support separate optimization; use validated settings for the actual kit and reader. [5]

In time-resolved Förster resonance energy transfer (TR-FRET), widening the acceptor band can admit additional long-lived donor emission. Delaying detection does not necessarily remove this contribution. Preserve the validated donor/acceptor separation and examine both raw channels before judging their ratio.

## Compare weak samples at each setting

Start with the reagent manufacturer's recommended configuration. Test a small set of supported excitation and emission bandwidths with matrix-matched blanks, low positives and bright samples. Keep volume, read height, acquisition duration and temperature comparable. Hold gain fixed where the detector remains linear; if gain changes are needed, record them and compare concentration-based performance rather than RFU.

Evaluate the change in response per unit concentration alongside blank variability, then check low-positive precision and recovery. Include likely interfering sample components. Select the band that preserves useful separation across the real sample range, even if another setting makes the top standard brighter.

## References

1. BMG LABTECH. [Wavelength and bandwidth optimisation on a microplate reader](https://www.bmglabtech.com/en/howto-notes/wavelength-and-bandwidth-optimisation-on-a-microplate-reader/).

2. Tecan. [Infinite 200 PRO Instructions for Use](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), no. 30125944, revision 1.4, June 2021, p. 32. 

3. BMG LABTECH. [Monochromator optical architecture](https://www.bmglabtech.com/en/lvf-monochromators/).

4. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 152–153. 

5. Tecan. [Impact of Extended Adjustable Monochromator Bandwidth in Fluorescence Based Application Technologies](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/Infinite_M1000_Impactofbandwidth_396061_V1.0.pdf), 396061 V1.0, August 2009, pp. 6–7.
