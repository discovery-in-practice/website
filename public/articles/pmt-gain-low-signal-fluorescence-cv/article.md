# Why can increasing PMT gain make low-signal fluorescence CV worse?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/pmt-gain-low-signal-fluorescence-cv/

Why higher PMT gain can leave fluorescence precision unchanged or make it worse, with blank checks, gain tests and practical interpretation.

Increasing photomultiplier tube (PMT) gain does not inherently increase the coefficient of variation (CV). Ideal amplification multiplies the mean and standard deviation by the same factor, leaving CV unchanged. If CV rises, check whether background correction, detector noise, nonlinearity or another acquisition setting changed with gain. Gain amplifies the electrical response to the light already collected; at sufficiently low gain, increasing it can improve precision by making downstream electronic noise less important. [1,2]

## What gain changes

Photons reaching a PMT can release photoelectrons from its photocathode; the PMT then multiplies the resulting charge. Its voltage setting affects that multiplication. Fluorescence excitation power and integration time affect a different part of the measurement: how much useful light reaches the detector and for how long. Turning up PMT voltage does not increase excitation of the fluorophore.

For positive mean signals, CV is 100 times the standard deviation (SD) divided by the mean:

CV = 100 × (SD) divided by (mean)

Suppose a sample has a mean of 100 relative fluorescence units (RFU) and an SD of 10 RFU. Its CV is 10%. Multiplying every reading by five produces a mean of 500 RFU and an SD of 50 RFU: still 10%. This is an arithmetic example, not a measurement of a reader.

Real amplification has its own noise characteristics. Hamamatsu describes photon shot noise, dark noise and multiplication noise separately. Their relative contributions depend on the detector and operating conditions. A higher voltage can also change dark output or the relative importance of different noise sources. Blank and stable-reference measurements help establish whether that matters in your reader. [1]

## Three checks before blaming gain

Check the calculation. Record raw sample readings and matched blanks at each gain. Subtracting a common mean blank reduces the net mean without removing the fluctuations already present in sample readings. A mean of 110 RFU with an SD of 11 RFU has a raw CV of 10%. Subtracting a constant 100 RFU blank leaves a net mean of 10 RFU and the same 11 RFU SD: a net CV of 110%. Near zero, CV becomes a poor summary. Independently measured blanks also contribute their own uncertainty.

Check the scale. A field labelled gain may invoke automatic selection, normalization or a different measurement range. Molecular Devices documents model-specific normalization of RFU across PMT settings. Other implementations must be checked in their own manuals. Do not pool readings obtained on different reporting scales or assume that a displayed gain number is a linear multiplier. [2]

Check the operating range. Include a bright sample as well as the weak sample. Raising gain can bring strong fluorescence or a high background closer to a nonlinear region. Compression can make variability look smaller, so an unusually low CV at another setting is not sufficient evidence that the setting was better.

## A gain test that separates the possibilities

Use a stable fluorophore appropriate to the assay buffer, matched blanks and low, middle and high signal levels. Molecular Devices demonstrates gain testing with fluorescein in phosphate-buffered saline using 485 nm excitation and 525 nm emission; those are example settings, not a prescription for a different dye. [2] Keep plate type, volume, read height, wavelengths, bandwidths, excitation and integration time fixed. Use replicated wells and repeated reads so that dispensing variation can be distinguished from read noise. Alternate gain order or revisit the starting setting to reveal drift or photobleaching.

At each gain, inspect raw mean, raw SD, net mean, net SD and linearity. If raw precision is similar but net CV rises, investigate background and subtraction. If repeated-read CV changes in stable references after checking their reporting scale and background, investigate detector or acquisition behavior. If only independently prepared wells disagree, preparation variability is a stronger candidate.

For a photon-limited measurement, collect more useful photons through suitable excitation, optics or acquisition time. A broader emission band can help when it collects more fluorophore emission without admitting disproportionate background or excitation leakage. Appropriate dichroic separation matters to that balance. Choose settings using weak-sample precision and bright-sample linearity together; the largest RFU value alone does not identify the best setting.

## References

1. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf). Fourth edition, April 2017. Sections 4.3.7 and 6.3; printed pp. 75–79 and 152–153, PDF pp. 88–92 and 165–166. Detector-noise mechanisms; instrument-specific gain behavior still requires the reader manual.

2. Molecular Devices. [PMT Gain Adjustment with Fluorescence and Luminescence Measurement](https://www.moleculardevices.com/en/assets/app-note/br/pmt-gain-adjustment-for-fluorescence-luminescence). Application note. SpectraMax M5e examples and model-specific gain normalization, not a rule for every reader.
