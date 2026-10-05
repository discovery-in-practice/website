# Are two PMTs enough for accurate ratiometric measurements, or do they need matching and calibration?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/matched-pmts-ratio-calibration/

Learn why simultaneous detection, relative channel calibration and linearity all matter for accurate FP, TR-FRET and BRET measurements.

A pair of photomultiplier tubes (PMTs) provides two detection channels, but a reliable ratio also depends on the optical paths, coordinated acquisition and a known, stable relationship between channel responses. Matched detectors help make that relationship reproducible; calibration establishes how the complete instrument measures a reference. Verify that relationship across the signal range occupied by the assay. [1,2]

## Equal light does not necessarily produce equal numbers

The two channels include filters, polarizers or wavelength-selective mirrors as well as detectors and electronics. Their transmission, spectral sensitivity and gain can differ. A channel viewing red light need not produce the same number as a channel receiving the same photon flux at a different wavelength. PMT gain and response also depend on operating conditions. [3]

In fluorescence polarization (FP), both channels usually view the same emission band through different polarization paths. In time-resolved Förster resonance energy transfer (TR-FRET) and bioluminescence resonance energy transfer (BRET), they view different donor and acceptor bands. Calibration must suit the measurement; an FP correction is not automatically a correction for a BRET ratio.

Consider a constructed spectral-ratio example. The acceptor and donor channels would yield 1,000 and 10,000 relative fluorescence units (RFU), giving a ratio of 0.100. If the acceptor path has an uncorrected 20% higher response, the measured ratio becomes 0.120. The ratio could be highly repeatable and still carry a 20% scaling error. A stable scaling error can be calibrated; it need not spoil every within-run comparison, but it complicates transfer between configurations.

## One calibration point cannot establish linearity

Now suppose the acceptor channel is linear at the reference level but compresses at higher signals. A single scaling factor cannot repair the changing response. Check both channels across the range occupied by blanks, controls and samples. A wide usable linear range matters because a ratio can be biased when either channel departs from proportional response, even while the other behaves well. [3]

For FP, the G factor corrects relative response of the parallel and perpendicular channels. Tecan's instructions explicitly connect it to optical differences and a reference of known polarization. [2] Matching the PMTs does not remove filters, polarizers or alignment from that calibration problem.

## Check when the two channels acquire their light

BMG LABTECH describes two matched PMT pairs in the PHERAstar FSX: one covers several intensity, polarization and luminescence modes, while the other is optimized for time-resolved fluorescence and TR-FRET. [1] For the assay in front of you, establish which detector pair is used and whether its channels acquire the same event.

Simultaneous dual emission keeps donor and acceptor observations on the same time interval. For FP, paired acquisition can similarly keep the two polarization components exposed to the same excitation fluctuation. This reduces timing mismatch when brightness changes between sequential reads. It does not remove independent photon noise or a fixed response bias. Stable relative response supports calibration; paired timing keeps sample changes between reads out of the ratio.

## Qualify the pair under assay conditions

Use an appropriate FP reference or donor/acceptor controls, including blanks and single-label controls where relevant. Examine raw channels as well as the final ratio. A stable-composition dilution series can reveal a brightness-dependent ratio, provided dilution does not change binding, aggregation or the sample matrix.

Record filters, gains, timing windows, plate type and the calibration used. Keep temperature and assay age consistent, so real sample changes are not mistaken for detector mismatch. If the same reference gives different ratios at low and high brightness, investigate that dependence before accepting a one-point correction.

## References

1. BMG LABTECH. [PHERAstar detection system](https://www.bmglabtech.com/en/pherastar-detection-system/). Manufacturer description of two matched detector pairs, including a pair optimized for time-resolved fluorescence. Complete page archived 29 September 2026; architecture is not independent performance validation.

2. Tecan. [Infinite 200 PRO Instructions for Use, revision 1.4](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), June 2021, pp. 79–84. Channel blank subtraction, G-factor calibration, filter-specific records and polarization calculation.

3. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, sections 4.3.2, 4.3.6–4.3.9 and 5.1.7. Gain, linearity, noise, afterpulsing, polarization dependence and detector gating.
