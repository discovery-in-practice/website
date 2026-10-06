# What causes crosstalk in 384- and 1536-well plates?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/crosstalk-384-1536-well-plates/

Find the optical causes of microplate crosstalk, test bright-neighbor interference and distinguish leakage from sample carryover.

Optical crosstalk occurs when the detector assigned to one well also collects light originating in another. It depends on the plate's optical isolation and the reader's collection geometry. In dense plates, a weak well beside a bright sample is vulnerable; the size of the effect depends on leakage and neighbor brightness. [1]

## A small percentage can be a large assay error

Consider a constructed example on a linear signal scale. A bright well emits a signal corresponding to 1,000,000 relative light units (RLU), and 0.01% of that response appears in its neighbor's reading. The neighbor acquires 100 RLU of unwanted signal. If its true signal is 100 RLU, the measured result doubles. If its true signal is 10,000 RLU, the same leakage raises it by only 1%.

The same leakage fraction produces very different errors in the two samples. That is why a plate containing only equally bright standards can be a poor challenge for interwell isolation.

Light can reach the detector through inadequately opaque material or through collection paths that admit neighboring emission. Masking, apertures, focus and plate positioning can limit those paths. Promega's bioluminescence guidance emphasizes isolating the measured well and using opaque plates; its comparison includes bright wells beside nominally empty positions. [1]

## Check the well walls and the plate bottom

For luminescence, white opaque wells often provide useful signal, but a white plate with a transparent bottom behaves differently from a fully opaque plate. Promega's CellTiter-Glo 2.0 manual warns that clear-bottom plates can give lower signal and greater crosstalk. Check the actual plate construction, including the base and any permitted backing. [2]

Fluorescence adds an excitation path: illumination or scattered light may reach material outside the intended measurement region. The appropriate plate, optical footprint and read height therefore need checking in the actual detection mode. Check fluorescence crosstalk in the intended excitation and collection geometry.

## Test a layout that can reveal the source

Prepare an isolated bright well surrounded by blanks and low positives, with equivalent controls far from the bright well. Include a separate all-blank plate and repeat at several source intensities within the verified linear range. Use the same plate type, volume and reader settings planned for screening.

Map the excess signal by distance and direction. Then move the bright source in a newly prepared layout. Excess light that follows the source supports optical leakage. A pattern that follows measurement order warrants a separate check for detector recovery or acquisition history. Neither pattern alone proves that sample preparation was clean.

Optical crosstalk differs from reagent contamination, splashing and injector carryover. Material transferred into a blank can generate a real local signal. Use fresh preparations and appropriate dispensing controls to distinguish these possibilities before adjusting the optics.

For a glow assay, keep assay age and temperature comparable during the challenge. CellTiter-Glo 2.0 calls for room-temperature equilibration and signal stabilization. A stable near-room-temperature chamber helps keep bright-source output consistent while nearby and distant wells are compared. [2]

## Block unwanted light before correcting its average

Optimize plate opacity, reader masking, focus and positioning using the weak responses that matter to the assay. Software correction can subtract an estimated contribution, but it cannot remove the random photon arrivals already added to the measurement. Coefficients may also change with plate geometry or source position.

If correction is needed, retain raw readings and test it on independently prepared layouts. Judge success by recovery and precision of the low positives beside bright wells. Keep the adjacent low-positive challenge in the method qualification; distant blanks can miss the interference.

## References

1. Wieczorek D, Hooper K, Bjerke M. Promega. [How Sensitivity and Crosstalk Affect Your Bioluminescent Assay Results](https://www.promega.com/resources/pubhub/2019/how-sensitivity-and-crosstalk-affect-your-bioluminescent-assay-results/), June 2019, tpub_212. Well isolation, opacity and bright-neighbor testing; historical product rankings are not generalized.

2. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), archived revision January 2023, PDF pp. 7 and 11. Temperature, stabilization and clear-bottom plate caveats.
