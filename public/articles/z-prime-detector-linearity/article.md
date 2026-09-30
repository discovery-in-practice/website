# A better Z′ can hide a worse measurement

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/z-prime-detector-linearity/

A higher Z′ can reflect nonlinear detector compression rather than a better assay. This article explains how bright-well variation can shrink while effect sizes become distorted, and how to check proportionality without confusing detector behavior with assay chemistry.

The bright controls have become unusually consistent. Their coefficient of variation has dropped, the Z-prime factor has improved, and the plate passes QC. Check whether the reader still measures those bright wells proportionally before crediting the assay change.

In a luminescence assay, detector compression can make different bright signals look more alike. Under some conditions, that improves Z′ while making the measurements less accurate. Some of the variation has disappeared in the detector.

## What Z-prime measures

The Z-prime factor, usually written Z′, compares the separation of two control populations with their variability. Using H and L for high- and low-signal controls:

Z prime equals one minus three times the sum of the high and low control standard deviations divided by the absolute difference between their means.

Here, μ is the mean and σ is the standard deviation. Larger separation raises Z′; larger standard deviations lower it. The original formulation by Zhang, Chung and Oldenburg remains a useful way to assess screening controls. [[1](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-1)]

Z′ uses the numbers supplied by the reader. It cannot tell you whether those numbers remain proportional to light input, particularly between the two controls where many compounds will fall.

Simply reducing every value by 20% cannot improve Z′. Both the standard deviations and the difference between the means fall by 20%, leaving their ratio unchanged. The problem considered here is nonlinear compression: the brighter signals lose a greater fraction of their counts.

## How photon counting loses proportionality

Photon counting works by resolving and counting individual detector pulses. The detector and its electronics need a finite interval to distinguish successive events. At sufficiently high arrival rates, pulses overlap and some events are missed. Hamamatsu describes this count-rate dependence and uses a paralyzable detector model in its photon-counting simulator. [[2](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-2)]

Compression can begin while the output is still increasing. A numerical result below an obvious ceiling therefore does not establish linearity. Warning behavior depends on the instrument: Hamamatsu describes both photon-counting heads with over-light detection and heads without it. [[3](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-3)] Check what a reader's warning actually monitors and how that relates to its specified linear range.

This also explains why shortening the integration time may fail to help. For a stable glow, counting for one-tenth as long reduces the accumulated counts, but it does not reduce the rate at which pulses arrive. Pulse overlap depends on the incoming rate, so fewer accumulated counts may leave that problem in place. Whether a particular setting changes either limit depends on the acquisition system.

## A worked example of misleadingly good controls

Take five constructed values in each control group. The high control has a mean of 100 and a sample standard deviation of 10. The low control has a mean of 10 and a standard deviation of 1. Their Z′ is:

Z prime equals one minus three times the quantity ten plus one divided by the quantity one hundred minus ten, which equals 0.633.

Now pass those same values through an illustrative compression curve, f(x) = x × exp(−0.00223144x). This is the shape of the paralyzable mean-response model, expressed in arbitrary units and chosen so that an input of 100 produces an output of 80. It represents no particular reader. [[2](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-2)]

| Quantity | Linear response | Compressed response |
| --- | --- | --- |
| High-control mean | 100.00 | 79.87 |
| High-control standard deviation | 10.00 | 6.22 |
| Low-control mean | 10.00 | 9.78 |
| Low-control standard deviation | 1.00 | 0.96 |
| Z′ | 0.633 | 0.693 |

The inputs have not become more reproducible. Compression has reduced the spread of the high controls enough to outweigh the loss of control separation. Z′ rises from about 0.63 to 0.69, and the high-control CV falls from 10% to about 7.8%.

The same curve distorts intermediate values. An input of 55 lies halfway between the original control means and represents 50% inhibition under high-to-low normalization. After compression, it reads about 48.65. Normalize that value against the compressed control means in the table and it reports about 44.5% inhibition.

The curve is still increasing across this example, so it preserves the order of noiseless inputs. Distorted effect sizes do not require shuffled rankings. A cutoff applied to normalized inhibition can move a compound between hit and non-hit categories even if every well retains its place in the ranking.

These are deterministic calculations on invented well values. They illustrate distortion of between-well differences, without adding photon-counting noise or modeling an instrument's correction electronics. Nor does compression always raise Z′: it changes both the spread and the separation. If low-control variability dominates, the loss of separation can make Z′ worse.

The general statistical concern is already recognized in the Assay Guidance Manual, which notes that saturation artifacts can reduce control variability in imaging assays. [[4](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-4)] Imaging saturation and photon-counting losses have different physical causes, but both can make control variability a misleading guide to measurement quality.

## Test detector linearity without changing the chemistry

A falling slope in a concentration series is a reason to investigate, but it does not identify the detector as the cause. The assay itself may be nonlinear. In CellTiter-Glo, for example, Promega notes that ATP content per cell can change with cell density, altering the relationship between cell number and luminescence. [[5](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-5)]

Optical attenuation helps separate those possibilities. It changes the light reaching the detector while leaving the sample chemistry in place. Hamamatsu describes a check using a neutral-density filter with known transmission: a 10% transmitting filter should reduce the measured count rate to one-tenth within the linear range. [[3](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-3)]

For a microplate reader, use a manufacturer-supported attenuation setting or a suitable calibrated verification device. A piece of dark plastic over the plate is not a calibrated filter. Transmission must be known over the relevant emission wavelengths, and the arrangement must preserve the measurement geometry.

Compare several brightness levels, including the brightest expected samples and intermediate controls. Account for dark/background contributions. Confirm whether the software reports raw attenuated output or automatically compensates for transmission; the expected numerical ratio differs. Hold temperature and assay age steady, and balance measurement order so that glow decay does not masquerade as nonlinearity.

If you use dilution instead, keep the final volume and matrix composition matched as far as the assay permits. Verify that the dilution changes light production proportionally. Diluting an active luciferase mixture can change substrate conditions, inhibitors, and reaction kinetics; diluting cells can change biology. A dilution series tests the combined assay-and-reader response unless those contributions are controlled.

## Changing the settings requires another check

Lowering PMT gain is not interchangeable with reducing the light arriving at a photon counter. It changes pulse amplitudes and can affect which pulses cross the counting threshold. [[3](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-3)] Use the instrument's validated settings and assess linearity again; a smaller displayed number alone is insufficient.

Readers can extend useful range through faster counting electronics, appropriate count-loss correction, optical attenuation, or an alternative acquisition mode. Hamamatsu documents both count-rate correction and the hardware dependence of counting linearity. [[3](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-3)] The relevant specification is the linear range of the measurement mode you will use, with an acceptable error over the signals your assay produces.

An advertised range spanning many orders of magnitude is incomplete information without the test conditions. Ask whether it applies within one acquisition setting, how measurements are combined when settings change, and what happens at the transition. If two modes overlap, compare them there using stable samples. An alternative mode needs its own linearity and background checks.

Choose settings that preserve weak signals while accommodating the brightest plausible wells. Verify intermediate responses before comparing Z′. Otherwise, optimization can favor a setting that suppresses bright-well variation at the expense of accurate effect sizes.

## What to include in assay validation

Inspect the raw control distributions. Save means, standard deviations, CVs, acquisition settings, and the individual well values alongside Z′. Unexpected tightening of the bright controls deserves investigation, but does not by itself prove compression.

Include intermediate controls or a reference concentration series. The two endpoints can look acceptable while the response between them is distorted. The Assay Guidance Manual recommends examining raw trends and reference compounds at multiple concentrations during pilot screening. [[6](https://discoveryinpractice.com/articles/z-prime-detector-linearity/#ref-6)]

Check more than one brightness range. Cover ordinary controls, the brightest expected samples, and enough higher signal to test the margin you intend to rely on.

Repeat the relevant checks after changes. A brighter reagent formulation, a different plate, or new acquisition settings can move the assay outside the range you previously established.

Investigate suspect runs before correcting them. Preserve the original data. Establish the response experimentally and assess whether stored samples can be remeasured under suitable conditions; dividing everything by a guessed recovery factor will not undo nonlinear compression.

## References

1. Zhang JH, Chung TDY, Oldenburg KR. [A simple statistical parameter for use in evaluation and validation of high throughput screening assays](https://journals.sagepub.com/doi/10.1177/108705719900400206). Journal of Biomolecular Screening. 1999;4(2):67–73. DOI: 10.1177/108705719900400206. Formula also presented in reference 4, section 2.

2. Hamamatsu Photonics. [Photon Counting SNR Simulator](https://www.hamamatsu.com/eu/en/resources/interactive-tools/photon-counting-snr-simulator.html). Count Rate Linearity section and paralyzable response equation. Accessed September 24, 2026.

3. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/content/dam/hamamatsu-photonics/sites/documents/99_SALES_LIBRARY/etd/PMT_handbook_v4E.pdf). Printed pp. 145–147 on pulse-height discrimination, pp. 149–150 on count-rate linearity/correction, and p. 181 on over-light detection and attenuation checks; PDF pp. 158–160, 162–163 and 194.

4. Bray MA, Carpenter A. [Advanced Assay Development Guidelines for Image-Based High Content Screening and Analysis](https://www.ncbi.nlm.nih.gov/sites/books/NBK126174/?report=reader). Assay Guidance Manual. July 8, 2017. Section 2, Z′ and V-factor discussions.

5. Promega. [CellTiter-Glo 2.0 Assay technical manual TM403](https://worldwide.promega.com/-/media/files/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol.pdf?la=en). Revised January 2023. Section 4.B, Cellular ATP Content; PDF p. 11 / printed p. 10.

6. [Assay Development for Protein Kinase Enzymes](https://www.ncbi.nlm.nih.gov/sites/books/NBK91991/?report=reader). Assay Guidance Manual. Pilot Screens section. Accessed September 24, 2026.
