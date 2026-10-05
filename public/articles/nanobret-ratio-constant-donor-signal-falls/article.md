# Why can my NanoBRET ratio stay constant while the donor signal falls?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/nanobret-ratio-constant-donor-signal-falls/

Why a NanoBRET ratio can stay constant as donor light falls, how precision suffers and which raw signals and controls to inspect.

A NanoBRET ratio can stay constant when donor and acceptor signals fall in roughly the same proportion, concealing the loss of brightness. That loss can reduce measurement precision and may reflect fewer emitting donor molecules, altered substrate chemistry or an optical effect. A stable ratio alone cannot establish stable protein abundance, cell health or assay quality. [1]

## A ratio can hide a poor expression condition

NanoBRET measures bioluminescence resonance energy transfer (BRET). Promega's protein–protein interaction manual compares different NanoLuc-to-HaloTag deoxyribonucleic acid (DNA) ratios. In Figure 8, the 1:100 and 1:1,000 conditions produce similar BRET ratios, yet the latter has much lower raw donor output. The manual warns that operation close to the instrument's detection limit can increase variability. The ratio plot alone gives little reason to reject the dimmer condition. [1]

In this assay, NanoLuc luciferase is the donor and the HaloTag NanoBRET 618 ligand supplies the fluorescent acceptor. Donor emission peaks around 460 nm and acceptor emission around 618 nm. One recommended filter arrangement uses a donor band centered at 450 nm with an 80 nm bandwidth and an acceptor long-pass filter above 610 nm. Confirm the configuration for the actual assay and reader. [1]

The raw acceptor-to-donor ratio is dimensionless. Multiplying it by 1,000 gives milliBRET units (mBU). In the manual's corrected result, the corresponding no-acceptor-ligand control ratio is subtracted. Keep that control alongside the raw donor and acceptor readings; a corrected ratio adds another measurement and its uncertainty. [1]

## The same ratio can have very different precision

Suppose both detected channel counts fall one hundredfold. The following constructed example assumes independent Poisson counting, linear response, negligible background and no control subtraction. Counts are accumulated photons per acquisition, not displayed relative light units (RLU). Precision is reported as the coefficient of variation (CV).

| Expected donor count | Expected acceptor count | Ratio of expected counts | Approximate ratio CV |
| --- | --- | --- | --- |
| 100,000 photons | 10,000 photons | 0.100 | 1.05% |
| 1,000 photons | 100 photons | 0.100 | 10.49% |

First-order error propagation gives:

CV subscript R ≈ square root of ((1) divided by (A) + (1) divided by (D))

Here A and D are expected acceptor and donor counts. The subscript R denotes their measured ratio, and its CV is expressed as a fraction. Multiply it by 100 to report percent. This approximation follows from independent counting variances; background and other noise worsen it. Near-zero denominators also invalidate the approximation. The ratio of expected counts is not exactly the expected value of a noisy ratio. [2]

Both rows describe the same underlying ratio. The dimmer measurement has about ten times the relative uncertainty, despite preserving the underlying ratio.

## Work out why the light fell

Plot donor, acceptor and corrected ratio against concentration or time. Inspect the no-acceptor-ligand controls separately. A falling donor signal can accompany changes in cell number, donor expression or protein degradation, but it can also arise from luciferase inhibition, substrate availability or optical attenuation. Follow up with an appropriate orthogonal protein or viability measurement before assigning a biological cause.

Check acquisition settings and timing after substrate addition, then verify that both channels remain proportional over the intended range. Establish an acceptable weak-signal range experimentally using representative controls and replicate preparations; a universal RLU cutoff cannot transfer reliably between readers.

Simultaneous dual-emission detection can prevent a changing signal from being sampled at two different times. It does not prevent loss of photon-counting precision. Keep temperature consistent too: Promega's live-cell kinetic protocol uses equilibration at 37 °C with 5% carbon dioxide before measurement. Preserve the validated biological conditions when designing the read; room-temperature detection is not a general requirement for live-cell NanoBRET. [1]

## References

1. Promega. [NanoBRET Protein:Protein Interaction System Technical Manual TM439](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/nanobret-proteinprotein-interaction-system-protocol.pdf), revision October 2023. Sections 3.A, 5.D and 6; Figure 8, printed p. 20 (PDF p. 21). Filters, live-cell conditions, corrected ratios and the low-donor example.

2. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 152–153 (PDF pp. 165–166). Photon-counting noise principles. The ratio calculation is an explicitly derived example, not a manufacturer performance claim.
