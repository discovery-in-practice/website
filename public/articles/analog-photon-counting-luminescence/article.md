# What is the difference between analog and photon-counting luminescence detection?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/analog-photon-counting-luminescence/

Compare analog and photon-counting readout, understand why longer integration cannot fix pulse overlap and qualify a useful linear range.

Analog detection measures the photomultiplier tube's electrical output as current or integrated charge. Photon counting identifies individual pulses above a discriminator threshold and counts them. Photon counting can be especially useful at low light levels. At high event rates, pulses can overlap and the recorded rate becomes nonlinear. Analog operation also has limits, including detector, amplifier and converter saturation. Choose a mode against the assay's weak and bright signals using the complete detector configuration. [1]

## What the electronics measure

A photomultiplier tube (PMT) converts detected light into amplified electron pulses. An analog circuit measures their combined electrical contribution. A counting circuit separates qualifying pulses into events; its discriminator can reject small electronic pulses below the threshold. “Analog” therefore describes how the signal is measured; the instrument can still digitize the result for storage and analysis. Tecan's Infinite 200 PRO documentation, for example, explicitly describes analog-to-digital conversion of a PMT signal in fluorescence mode. [1,2]

The recorded count includes only photons that reach the detector and pass its event threshold. Collection efficiency, wavelength-dependent detection efficiency and pulse discrimination affect which events are registered. Relative light units (RLU) may also include software scaling. Establish what the reported output represents before treating it as a physical count.

## A longer read cannot separate pulses that arrived together

The following calculation isolates one counting limitation. In an ideal nonparalyzable model, each registered event creates a dead time during which additional events are lost without extending that interval:

m = (n) divided by (1 + nτ)

Here n is the true event rate in s⁻¹ before dead-time losses, m is the measured rate in s⁻¹, and τ is dead time in s. This model is described in Hamamatsu's handbook; actual electronics may behave differently. [1]

Assume τ = 20 ns and n = 12,500,000 s⁻¹. The calculated output is 10,000,000 s⁻¹: 80% of the input event rate. At a stable brightness, collecting for 1 s instead of 0.1 s produces ten times as many recorded events, but the same 20% fractional loss. This is illustrative arithmetic, not a specification or test of a plate reader.

Shortening integration can prevent a digital accumulator from filling, yet it does not necessarily fix pulse overlap. To test rate-dependent loss, reduce the light rate reaching the detector with a validated attenuation or dilution experiment. Confirm that dilution preserves the assay chemistry and account for background.

## Precision and proportionality need separate checks

At the weak end, ask whether blanks and low positives remain distinguishable at a useful read time. At the bright end, ask whether a known change in input produces the expected change in output. Smooth replicate values can coexist with a compressed response, so a low coefficient of variation (CV) is insufficient evidence of linearity.

Use independently prepared standards over the intended range and inspect recovery after dilution or attenuation. Compare detection modes at similar total reading time, documenting filters, plate geometry and any processing. Avoid selecting a mode solely because its RLU values are larger.

## Ask how the full range is maintained

Some detection systems switch ranges or apply a calibrated correction. Ask where that occurs, how the reported scale is maintained and how the transition was validated. Measure standards on both sides of the transition. That transition matters when a plate contains both weak samples and exceptionally bright controls.

Keep specimen temperature and assay age stable while making the comparison. Promega's CellTiter-Glo 2.0 manual calls for room-temperature equilibration and identifies temperature-dependent intensity and decay. A stable near-room-temperature chamber helps limit thermal drift during this endpoint comparison. Live-cell measurements retain their validated biological temperature. [3] Record the verified low and high limits with the method so later samples can be checked against them.

## References

1. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 144 and 149–151 (PDF pp. 157 and 162–164). Analog/counting readout, pulse resolution and dead-time models.

2. Tecan. [Infinite 200 PRO Instructions for Use](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), revision 1.4, June 2021, p. 72. Analog-to-digital conversion and gain in the fluorescence path; this example does not identify every reader's luminescence architecture.

3. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), archived revision January 2023, PDF pp. 7 and 11. Equilibration and temperature effects on intensity and decay.

## Provenance

Author: Andrew Stewart. Named human technical review: pending. Research and editorial preparation: 29 September 2026. Sources checked: 29 September 2026. Proposed checks and illustrative calculations have not been validated in a laboratory as part of this draft.
