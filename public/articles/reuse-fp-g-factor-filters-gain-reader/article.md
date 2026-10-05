# Can I reuse the same FP G factor after changing filters, gain settings or readers?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/reuse-fp-g-factor-filters-gain-reader/

Know when to verify or recalibrate an FP G factor after changing filters, gains or readers, and why one matching reference value is insufficient.

The fluorescence polarization (FP) G factor describes relative channel response and should be reused only after that response has been checked in the new configuration. A filter change, a different reader or a change in relative channel gain can alter that response. Some instruments manage calibration internally; follow the system's documented method and verify an appropriate reference before carrying the factor into a new protocol. [1]

## G belongs to the measurement configuration

Tecan's Infinite 200 PRO instructions describe G as compensation for differences between the parallel and perpendicular optical measurements. The software stores calibrated values with filter information. [1] The stored factor therefore belongs with the optical configuration used to establish it.

An FP reference needs an assigned polarization value under defined conditions. Thermo Fisher's PolarScreen protocol lists an FP reference kit for checking instrument accuracy and setting G. It also specifies different green and red optical settings: excitation/emission centers of 485/535 nm for green and 535/590 nm for red, with respective excitation/emission bandwidths of 25/20 nm. [2] A factor established in the green path is not automatically valid in the red path.

Changing both channel gains by an identical multiplicative factor would leave their relative response unchanged in an ideal linear instrument. Real gain controls, detector responses and software corrections differ. A gain change therefore calls for verification; it does not imply that every instrument necessarily needs a different numerical G.

## A small channel error can make a substantial mP shift

Suppose a blank-corrected reference gives 1,100 and 900 relative fluorescence units (RFU) in the parallel and perpendicular channels. With the convention that G multiplies the perpendicular channel, G = 1 gives 100 millipolarization units (mP).

Now let the perpendicular response rise by 10%, to 990 RFU, while the parallel response stays at 1,100 RFU. Keeping G = 1 produces about 52.6 mP. For this constructed scaling change, G = 1/1.1, approximately 0.9091, restores 100 mP. Nothing about the reference molecule changed. This example assumes proportional response and correct blank subtraction; it is not a recommended calibration value.

## Check more than the calibration well

Forcing one sample to an assigned mP can absorb a blank mismatch, an incorrect reference value or a signal-dependent detector error into G. The calibration well can land exactly on its target while other samples remain biased.

Use the correct reference solvent, temperature and concentration, with replicate reference blanks. Check a second appropriate polarization level if available, and verify behavior across the intensity range relevant to the assay. A dilution test should preserve polarization within the qualified working range when sample chemistry remains unchanged. Keep the calibration reference distinct from the biological positive and negative controls.

Matched photomultiplier tubes (PMTs) and stable paired optics can support consistent relative response. Simultaneous acquisition reduces differences caused by measuring the two components at different times. Neither capability exempts the full optical path from calibration; BMG's matched-pair architecture is an example of the hardware approach. [3]

## Transfer the record with the factor

Save the reader identity, optical module or filters, gains, plate and volume, temperature, reference identity, assigned mP and date of calibration. Record whether the software applies G to the parallel or perpendicular term and whether exported channels are already corrected. Applying the factor twice creates another error.

After a settings change, measure the reference and assay controls before committing a full screen. Recalibrate when the check fails or the manufacturer requires it, investigate the cause, and keep the previous configuration with its original results. When two readers disagree on absolute mP, those records let you distinguish a calibration difference from a changed sample.

## References

1. Tecan. [Infinite 200 PRO Instructions for Use, revision 1.4](https://www.tecan.com/hubfs/30125944_IFU_Infinite200-PRO_V1_4_English_German-Warnings.pdf), June 2021, pp. 79–84. Channel blank subtraction, G-factor calibration, filter-specific records and polarization calculation.

2. Thermo Fisher Scientific. [PolarScreen Nuclear Receptor Competitor Assays Universal Protocol](https://documents.thermofisher.com/TFS-Assets/LSG/manuals/polarscreen_nr_competitor_assay_universal_man.pdf), MAN0007703 revision A.0, 12 March 2014, pp. 2–3 and 8. Green/red filter settings, FP reference kit, assay controls and room-temperature incubation; check the target-specific product sheet.

3. BMG LABTECH. [PHERAstar detection system](https://www.bmglabtech.com/en/pherastar-detection-system/). Manufacturer description of two matched detector pairs, including a pair optimized for time-resolved fluorescence. Complete page archived 29 September 2026; architecture is not independent performance validation.
