# Can PMT saturation or signal compression occur without an overload warning?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/pmt-saturation-signal-compression-no-warning/

Learn how luminescence signal compression can precede an overload warning, distort results and appear in a practical detector-linearity check.

Yes. A detector can depart from proportional response before its output reaches a hard ceiling or triggers a software warning. In photon-counting luminescence, closely spaced detector pulses can be missed as the count rate rises. Analog detection can also become nonlinear, through the photomultiplier tube (PMT) or associated electronics. Whether a reader corrects these effects or flags them depends on its implementation. An ordinary-looking number is not proof that the measurement is linear. [1]

## Where counts are lost

Photon counting separates and counts electrical pulses produced by detected light. At high rates, pulses can arrive too close together for the detection chain to resolve them individually. Hamamatsu describes this count loss in terms of pulse-pair resolution and gives examples of both nonlinear response and correction. Pulse separation depends on the PMT and the downstream electronics. [1]

A simplified nonparalyzable dead-time model describes one possible response:

m = (n) divided by (1 + nτ)

Here n is the event rate before counting losses, m is the measured rate, both in counts per second (cps), and τ is the effective dead time in seconds. The model is illustrative; it does not describe every reader or every operating region.

With an assumed τ of 20 ns, a true rate of 12.5 million cps gives a measured rate of 10.0 million cps: 80% of the expected response. A count display can still look entirely ordinary at that level of loss. This calculation does not establish the dead time, warning threshold or error of any commercial reader. A reader with validated correction may report a much more accurate result over its specified range. [1]

## Why controls can become misleading

Compression reduces the separation between different high inputs. If a high-control distribution falls within a region with a shallower response slope, its measured standard deviation can shrink. That can affect Z-prime, the dimensionless statistic describing control separation relative to control variability. [2]

Compression can raise or lower Z-prime because it changes both the control means and their variability. It can also distort intermediate compound responses even when the control statistic remains attractive. A high Z-prime therefore does not substitute for a linearity check. The effect follows from how a nonlinear response changes a distribution.

## Test proportionality without changing the reaction

Use a stable reference and, where the manufacturer supports it, calibrated optical attenuation. Keep the detection geometry, spectral range and reporting scale fixed. Compare the observed signal change with the known change in transmitted light. The attenuator must be characterized for the relevant emission spectrum and optical arrangement; improvised covers are unsuitable.

In the example above, reducing the true input by half gives about 5.56 million cps. Doubling that reading predicts 11.11 million cps, which exceeds the unattenuated reading of 10.0 million cps. The mismatch exposes compression under the stated model. Alternate attenuated and unattenuated measurements or use matched stable references to distinguish nonlinearity from luminescence decay.

A dilution series can be useful, but dilution also changes substrates, inhibitors, enzyme concentrations and matrix effects. Verify that it changes emitted light proportionally before assigning a curved response to the detector. Shortening integration time collects fewer total counts but does not reduce the instantaneous event rate, so it need not cure pulse-overlap losses.

## What to ask of the reader

Ask for the usable linear range in the actual detection mode, the acceptable proportionality error, the role of automatic range changes or correction, and the meaning of overload flags. Relative luminescence units (RLU) are not automatically raw counts or cps.

A wide validated dynamic range is valuable because bright controls and weak residual signals often share a plate. Qualify both ends, including dim wells beside bright wells: optical crosstalk is a separate failure mode that a linear detector can still report faithfully.

## References

1. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf). Fourth edition, April 2017. Section 6.3, printed pp. 149–150, PDF pp. 162–163; equations 6-2 through 6-4 and count-rate correction examples. Component/system examples are not commercial plate-reader specifications.

2. Zhang J-H, Chung TDY, Oldenburg KR. [A Simple Statistical Parameter for Use in Evaluation and Validation of High Throughput Screening Assays](https://doi.org/10.1177/108705719900400206). Journal of Biomolecular Screening. 1999;4(2):67–73. DOI: 10.1177/108705719900400206. Original Z-factor reference; PubMed abstract checked, full publisher article not retrieved for this draft.

## Provenance

Author: Andrew Stewart. Named human technical review: pending. Research and editorial preparation: 29 September 2026. Sources checked: 29 September 2026. Proposed checks and illustrative calculations have not been validated in a laboratory as part of this draft.
