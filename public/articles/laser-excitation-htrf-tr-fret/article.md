# When does laser excitation improve an HTRF or TR-FRET assay?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/laser-excitation-htrf-tr-fret/

When laser excitation improves HTRF and TR-FRET precision or speed, with donor compatibility, paired detection and a practical comparison plan.

Laser excitation helps when too few useful photons are limiting measurement precision or speed, and the laser wavelength efficiently excites the assay's donor. A suitable pulsed laser can deliver more excitation energy at that wavelength than a filtered flash lamp, allowing a shorter acquisition or better precision. The benefit depends on the donor, optics, detection timing and sample; more excitation will not remedy inconsistent reagent delivery or an unstable binding reaction. [1,2]

## What the extra excitation buys

In time-resolved Förster resonance energy transfer (TR-FRET), a long-lived donor excites a nearby acceptor after the original excitation pulse has ended. Delayed detection rejects much of the short-lived fluorescence from other sample components. Homogeneous time-resolved fluorescence (HTRF), supplied by Revvity, commonly uses europium or terbium cryptate donors with red acceptors such as d2 or XL665. In that configuration, donor and acceptor channels are commonly centered at 620 nm and 665 nm, respectively. [1]

A laser concentrates its output into a narrow spectral region. BMG LABTECH's published example is a pulsed nitrogen laser at 337 nm for compatible europium- and terbium-based assays. Its stated pulse rate is 60 s⁻¹. Those are excitation specifications; they do not tell you how many useful photons a particular well will deliver to either detector. Follow the assay manufacturer's validated donor and reader configuration. [2]

Under an ideal shot-noise model, collecting four times as many useful detected photons reduces their relative counting uncertainty by half. Alternatively, obtaining the original photon count in one-quarter of the acquisition time could preserve that uncertainty. These are conditional arithmetic relationships, not promised improvements for a named reader. Detector noise, background, motion and other overheads can change the result. [3]

When miniaturization leaves too few detected photons, better excitation can help a low-volume assay retain acceptable precision without extending every well's read. Confirm that the biological response and assay chemistry remain suitable at the reduced volume or concentration.

## The donor channel needs photons too

For the common red HTRF configuration, the scaled ratio is 10,000 times the 665 nm acceptor reading divided by the 620 nm donor reading. The scaled ratio is dimensionless, and both readings contribute uncertainty. A brighter acceptor channel accompanied by an unreliable donor denominator can still produce a noisy ratio. Inspect the raw channels alongside the ratio and control distributions. [1]

Simultaneous dual-emission collection measures both channels during the same excitation events. Matched, calibrated photomultiplier tubes (PMTs) can support consistent channel response. This is particularly useful when excitation varies between pulses or the sample changes between sequential measurements. Dedicated time-resolved detectors can be designed to tolerate the excitation pulse and recover for the delayed window; verify that behavior at the intended pulse energy and timing. Check these capabilities together using the actual assay and its weakest channels.

## Compare precision at a useful plate-read time

Start with blanks and low, middle and high responses, including the weakest donor levels expected in real samples. Keep plate type, volume, read geometry, temperature and time since reagent addition comparable. Use validated delay and integration settings for each source; an identical flash count does not make the delivered energy identical.

First compare results at a similar total plate-read time. This asks whether the laser improves precision within the time available. Then determine the shortest acquisition that preserves the required control separation and precision of relevant intermediate responses. Record pulse count, delay in µs, collection duration in µs and actual plate-read time in s. Check both channels for nonlinearity.

If repeat readings improve but independently prepared wells remain variable, the next work belongs in assay preparation. If the laser supports the required precision with fewer pulses, its practical benefit may be faster plate processing. A brighter displayed signal alone does not establish either result.

## References

1. Revvity. [HTRF Technical Booklet](https://resources.revvity.com/pdfs/gde-htrf-technical-booklet.pdf), pp. 9–13 and 20. Donors, acceptors, delayed detection and excitation-source guidance.

2. BMG LABTECH. [TRF laser](https://www.bmglabtech.com/en/tr-fret-laser/). Manufacturer description of a 337 nm pulsed nitrogen laser and 60 s⁻¹ pulse rate. No universal performance advantage is inferred from these specifications.

3. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 152–153 (PDF pp. 165–166). Photon-counting signal-to-noise principles.
