# How can I tell whether the liquid in my plate has reached the reader's temperature setpoint?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/plate-liquid-temperature-reader-setpoint/

Distinguish chamber and liquid temperatures, understand thermal lag, and qualify equilibration across wells during a realistic plate-reader run.

Measure representative liquid temperatures under actual plate-handling conditions; a stable chamber display does not establish that every well has reached its setpoint. Molecular Devices' SpectraMax L guide explicitly distinguishes its chamber-air sensors from sample temperature and warns that sample equilibration can be prolonged. [1] Verify that the liquid remains within the assay's acceptable temperature range when each well is measured.

## The sensor and the assay can settle at different times

Air, plate plastic and liquid exchange heat at different rates. A chamber may recover its setpoint quickly after loading while the liquid continues warming or cooling. Reagents added just before reading can create another temperature step. A lid, a different fill volume or a different plate material can change the response.

Promega's CellTiter-Glo 2.0 manual warns that plates in tall stacks equilibrate more slowly than plates in a single layer. Incomplete equilibration can create center-to-edge differences, with the pattern also depending on position in the stack. [2] Equal time on the bench therefore need not mean equal liquid temperature.

## A nearly completed temperature change can still matter

A simple illustrative cooling model is:

T(t) = T subscript final + ( T subscript start − T subscript final ) × exp( (−t) divided by (τ) )

T(t) is liquid temperature at time t, T_start is the starting temperature, T_final is the eventual temperature, and τ is an assumed thermal time constant. Here temperatures are in °C and t and τ use the same time units. The model describes one uniform compartment approaching constant surroundings; a real plate may require a more complicated description.

Suppose the liquid starts at 37°C, approaches 22°C and has τ = 5 minutes. After 15 minutes, it is approximately 22.75°C. It has completed about 95% of the temperature change yet remains 0.75°C above the target. Reaching within 0.5°C takes about 17 minutes in this model. None of these times is a recommended waiting period for a real plate.

A residual difference of this size can matter to temperature-sensitive chemistry. The AlphaScreen practical guide describes a historical example with substantial temperature-dependent signal and warns about count gradients while plates warm or cool during reading. [3] Determine the response for the specific assay before setting the allowable temperature deviation.

## Qualify a representative plate

Use a sacrificial plate containing liquid with thermal properties representative of the assay. Match plate construction, well volume, cover and loading sequence. Select a calibrated, instrument-compatible method capable of measuring the relevant liquid volume without materially changing it.

Include center, edge and corner positions, and record temperatures through the actual reading interval. A probe can displace liquid or conduct heat into a small well; a surface infrared measurement may describe the lid or liquid surface rather than the bulk liquid. Establish what the method measures and include its uncertainty when deciding whether the temperature requirement is met.

Run the comparison after the prescribed instrument preparation and during sustained plate throughput. Record the chamber value alongside the liquid measurements. Recheck after substantial changes to volume, plate type, loading cadence or incoming temperature.

## Keep equilibration valid after the plate enters

A plate equilibrated on the bench can drift again inside a warmer chamber. Stable measurement close to the validated room-temperature endpoint reduces that second transition, but the liquid still needs verification. Check individual locations as well as the average across wells.

Specify the acceptable liquid-temperature range, the positions assessed and the handling conditions that produced it. Base the protocol's equilibration and maximum-wait instructions on those measurements.

## References

1. Molecular Devices. [SpectraMax L User Guide, 0112-0174 E](https://www.moleculardevices.com/sites/default/files/en/assets/user-guide/br/spectramax-l-userguide-01120174e.pdf), p. 29, Temperature Regulation. Verified web excerpt distinguishes chamber-air sensing from sample temperature and describes potentially prolonged equilibration. Full PDF download unavailable.

2. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), revised January 2023, PDF pp. 7 and 11. Room-temperature protocol, signal temperature dependence and stack equilibration.

3. PerkinElmer. [AlphaScreen practical guide](https://www.urmc.rochester.edu/MediaLibraries/URMCMedia/hts/documents/AlphaScreenPracticalGuide.pdf), PDF pp. 30 and 32 / printed pp. 24 and 26. Separate time-point wells, binding equilibration and temperature sensitivity. Historical examples are assay-specific.
