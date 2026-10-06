# Why does absorbance change when I change the volume, even at the same concentration?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/microplate-absorbance-volume-pathlength/

Understand why constant-concentration samples give different absorbance at different volumes, and when pathlength correction can help.

At a fixed concentration and wavelength, adding liquid usually lengthens the absorbance path and increases the reading. A standard cuvette fixes that path, commonly at 1 cm; a microplate well usually does not. Its liquid depth depends on volume, well geometry and the meniscus. [1]

## Account for the liquid depth

For a homogeneous, nonscattering solution within the method's linear range, the Beer–Lambert relationship is:

A = ε × c × l

A is dimensionless absorbance, ε is the molar absorption coefficient in L mol⁻¹ cm⁻¹, c is concentration in mol/L, and l is optical pathlength in cm. Use the coefficient for the measurement wavelength and chemical conditions.

In a constructed example, ε = 10,000 L mol⁻¹ cm⁻¹ and c = 50 µmol/L. A path of 0.30 cm gives A = 0.15; a path of 0.60 cm gives A = 0.30. Both samples have the same concentration. Correcting either result to a 1 cm path gives A = 0.50.

Doubling the volume only approximately doubles depth in a well with constant cross-sectional area. Tapered wells, changing menisci and beam position complicate that approximation. Use a validated pathlength measurement or volume-specific calibration rather than assuming every well behaves like a straight cylinder.

## Water can provide the pathlength reference

Some readers estimate optical pathlength from water's near-infrared absorption and normalize the analyte absorbance to 1 cm. Tecan describes measurements between 900 and 1,000 nm and warns that temperature, solvents, salts and absorption by other components can affect its correction. [1]

The exact algorithm matters. Molecular Devices describes using 1,000 nm near a temperature isosbestic point, where water absorption changes little with temperature, rather than the more temperature-sensitive peak near 977 nm. [2] That design reduces one source of thermal error. It does not establish that the assay chemistry itself is temperature-independent.

Account for plate background before scaling the sample signal by pathlength; otherwise the calculation also scales an optical contribution that did not arise in the liquid. Follow the reader's specified blanking sequence. Neither pathlength normalization nor ordinary blank subtraction repairs bubbles, condensation or all scattering effects. Tecan explicitly cautions that turbidity can produce a falsely short path estimate. [1,2]

## A useful volume check

Prepare one homogeneous sample stock and dispense a volume series within the plate's recommended range. Include matched buffer blanks at each volume, with replicates. Measure at one temperature using the same wavelength and settings, and compare the raw and path-corrected results.

Raw absorbance should follow increasing pathlength. Corrected concentrations should agree within the precision needed for the assay. A volume-dependent corrected result calls for investigation of low fill volumes, meniscus effects, blanking, matrix compatibility or the correction method. Agreement over this range supports that specific plate and sample combination.

Evaporation can make the interpretation especially misleading. In an ideal straight-sided well, loss of solvent raises concentration while reducing depth; those changes can cancel in the product c × l. Uncorrected absorbance might barely move while the concentrations experienced by an enzyme or cell change substantially. This geometric cancellation assumes retained solute, constant well cross-section and ideal optical behavior. Real wells may depart from those assumptions. Track evaporation independently when assay conditions depend on concentration.

## References

1. Tecan. [Infinite 200 PRO Instructions for Use, revision 1.4](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), June 2021, pp. 42–43, 92–99 and 159. Pathlength correction, injector operation and application-dependent cleaning.

2. Molecular Devices. [Optical density measurements automatically corrected to a 1-cm pathlength with PathCheck Technology](https://www.moleculardevices.com/en/assets/app-note/br/optical-density-measurements-automatically-corrected-to-1-cm-pathlength-with-pathcheck-technology). Water absorption, temperature and background correction.
