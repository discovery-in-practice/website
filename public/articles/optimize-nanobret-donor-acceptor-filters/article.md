# How should I optimize NanoBRET donor and acceptor filters?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/optimize-nanobret-donor-acceptor-filters/

Choose assay-specific NanoBRET emission filters using raw channels, negative controls, ratio precision and simultaneous dual-emission detection.

Use the validated filter configuration as the reference while comparing alternatives with raw donor and acceptor signals, matched negative controls and a known biological response. Seek adequate photon collection in both channels while limiting donor emission entering the acceptor measurement. A higher raw NanoBRET ratio can arise simply because the filters collect different fractions of the two emissions. [1]

## Specify the assay before selecting the bands

NanoBRET measures bioluminescence resonance energy transfer (BRET) from NanoLuc luciferase to an acceptor. Promega's protein–protein interaction system uses the HaloTag NanoBRET 618 ligand. The donor emits near 460 nm and the acceptor near 618 nm. Other NanoBRET formats use different acceptor reagents; follow their own manuals rather than transferring a filter pair solely because the assay name contains NanoBRET. [1]

For the protein–protein interaction system, Promega describes a donor bandpass centered at 450 nm with an 80 nm bandwidth and an acceptor long-pass filter beginning around 600–610 nm. The manual's explicit example uses 610 nm long pass. These are two emission measurements; no external excitation wavelength is required for the BRET read. [1]

| Channel | Emission peak | Example filter | Meaning |
| --- | --- | --- | --- |
| NanoLuc donor | About 460 nm | 450 nm / 80 nm bandpass | Nominal band about 410–490 nm |
| HaloTag 618 acceptor | About 618 nm | 610 nm long pass | Transmits longer wavelengths above the transition |

Actual transmission curves have slopes and out-of-band leakage. A long-pass specification also does not identify a universal upper wavelength limit: the remaining optics and detector response matter.

## The ratio changes when either collection band changes

If an alternative donor filter collects half as much donor light while acceptor output stays unchanged, the raw acceptor-to-donor ratio doubles. No additional energy transfer is required. This constructed example assumes linear response and unchanged sample emission. Compare a known response range and replicate precision, rather than optimizing the height of the ratio alone.

A broader donor band may improve denominator precision by collecting more light. A broader acceptor measurement may collect more transferred emission but also more of the donor's spectral tail or other background. Evaluate both effects with the complete optical configuration, including dichroic separation when present. Simultaneous collection does not by itself block spectral leakage.

## Carry the negative control through every filter comparison

For the HaloTag assay, include matched samples without the acceptor ligand. Their acceptor-channel reading captures donor-related background and other contributions under those conditions. Follow Promega's ratio correction: calculate acceptor divided by donor, multiply by 1,000 for milliBRET units (mBU), and subtract the corresponding no-ligand control ratio on the same scale. [1]

That subtraction estimates a background contribution; its uncertainty remains. A filter that admits more donor light into the acceptor channel can increase the burden on the control measurement. Preserve raw channels and check low-donor conditions, where a denominator close to background makes ratios unreliable.

## Keep the two observations comparable

Use the same sample preparation, substrate timing and validated temperature across configurations. Balance read order or use matched preparations if output changes during the comparison. Keep detector settings documented and verify both channels across their intended linear ranges.

Simultaneous dual-emission collection with matched, calibrated photomultiplier tubes (PMTs) removes the interval between donor and acceptor observations. That is useful when brightness changes during sequential reads. It does not replace channel calibration or add photons to a weak signal. [2]

Confirm the final filter choice with the expected positive and negative responses, replicate preparations and a concentration series. Save the actual centers, bandwidths or long-pass cutoffs in nm, detector settings and correction method. Include the optical specifications when transferring the method; a filter labelled “BRET” on another reader may transmit a different band.

## References

1. Promega. [NanoBRET Protein:Protein Interaction System Technical Manual TM439](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/nanobret-proteinprotein-interaction-system-protocol.pdf), revision October 2023, sections 1, 3.A and 6. Donor/acceptor identity, filters and ratio correction. Settings are specific to the stated assay format.

2. BMG LABTECH. [Simultaneous dual emission](https://www.bmglabtech.com/en/simultaneous-dual-emission/). Paired channel collection and matched PMTs. Timing benefits require assay-specific verification.
