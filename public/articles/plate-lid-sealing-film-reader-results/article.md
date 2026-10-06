# Can a plate lid or sealing film change my fluorescence, luminescence or absorbance results?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/plate-lid-sealing-film-reader-results/

Check transmission, fluorescence, condensation and read geometry before using a lid or sealing film during microplate measurements.

A cover in the optical path can absorb, scatter or redirect light, and its material or adhesive may contribute fluorescence. Condensation creates additional, uneven optical effects. A cover can also improve an assay by reducing evaporation. Qualify the exact cover, plate and reading mode together. Transmission and fluorescence background depend on material and wavelength. [1,2,4]

## Check whether the cover is in the light path

In top-read fluorescence, excitation and emitted light generally cross the cover. In top-read luminescence, the emitted light crosses it. For ordinary vertical absorbance measurements, the transmitted beam passes through the sample and any cover above it. Bottom-read fluorescence may avoid direct passage through a top cover, though evaporation, condensation and the cellular environment can still change the sample. Tecan describes these mode-specific differences in its plate-selection guidance. [4]

Check the instrument's permitted plate height and lid clearance as well as its optical configuration. A compatible plate footprint does not establish that a raised lid will clear an injector or moving optical assembly. Use the applicable reader instructions. [3]

## Visible transparency says little about ultraviolet transmission

Eppendorf specifies greater than 90% transmission from 350 to 750 nm for its Masterclear real-time polymerase chain reaction (PCR) Film. [1] Use the specified wavelength range when judging compatibility. It does not establish performance at 260 or 280 nm for nucleic-acid or protein absorbance, nor the properties of another film with a similar appearance.

A film's transmission also acts differently in different modes. In a constructed fluorescence example, 90% transmission on the excitation path and 90% on the emission path leave roughly 81% of the original detected signal, before other effects. For luminescence with one passage through the cover, the same assumed transmission leaves roughly 90%. Real performance depends on wavelength, angle and collection geometry.

Blank subtraction can remove a reproducible additive contribution. It cannot restore photons the cover prevented from reaching the sample or detector. If transmission varies across wells because of wrinkles or droplets, a single blank value cannot describe that variation.

## Condensation can create a changing absorbance artifact

Droplets scatter and redirect light, producing a time-dependent optical contribution as they form or clear. BMG LABTECH's bacterial-growth note illustrates lid-condensation effects on optical-density measurements. [2] The mechanism also gives a reason to inspect condensation in other covered plate workflows, though its size must be established for each mode.

Keeping temperatures consistent can reduce thermal transitions that promote condensation. Avoid adding an unvalidated heating step solely to clear a lid: temperature may change enzyme kinetics, luminescence or cell behavior. For glow endpoints, preserve the reagent's specified temperature and equilibration conditions.

## Compare covered and uncovered controls fairly

Use matched wells or plates containing blanks and stable low/high references. Compare the exact lid or seal under the intended incubation and reading conditions. For time-sensitive assays, alternate or balance the order and compare equal-age samples; removing a cover changes handling time and exposure.

Examine raw signal, replicate variability and spatial patterns, including edges. A uniform loss with preserved assay separation may be acceptable; added background, irregular attenuation or changing condensation may require another material or a validated cover-removal step. Include a bright/dim well pattern if optical crosstalk is important.

For living cells, also check whether the closure permits the required gas exchange. Record the cover's product number and handling procedure with the protocol. A change of lid or seal deserves a protocol check even when the plate and reader settings stay the same.

## References

1. Eppendorf. [PCR films and foils](https://www.eppendorf.com/us-en/Products/PCR/PCR-Consumables/PCR-films-foils-p-PF-8642). Masterclear real-time PCR Film transmission specification and closure compatibility.

2. BMG LABTECH. [How to optimise OD600 measurements, HowTo Note 10](https://www.bmglabtech.com/hubfs/1_Webseite/5_Resources/Downloads/Howto%20Notes/HTN10.pdf), p. 5. Condensation-related optical-density artifacts; complete six-page note archived.

3. Tecan. [Infinite 200 PRO Instructions for Use, revision 1.4](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), June 2021, pp. 42–43, 92–99, 132 and 159. Pathlength correction, injector operation and application-dependent cleaning.

4. Tecan. [Selecting the right plate for a measurement](https://www.tecan.com/knowledge-portal/which-plate-for-which-measurement). Manufacturer guidance on covers in absorbance, top/bottom fluorescence and luminescence.
