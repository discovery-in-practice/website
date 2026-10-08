# Why does my sample get brighter when I dilute it?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/fluorescence-increases-after-dilution/

Distinguish raw fluorescence from dilution-corrected recovery, then investigate inner-filter effects, antigen excess, matrix interference and overload.

Dilution can relieve optical absorption, molecular quenching or assay inhibition strongly enough that the measured signal rises despite less sample being present. In a sandwich assay, dilution can also relieve antigen excess and restore productive complexes. Keep raw readings and dilution-corrected results in separate worksheet columns so it is clear which one increased. [1,2]

## Keep the raw result beside the corrected result

Suppose an undiluted sample gives 1,000 relative fluorescence units (RFU), while a twofold dilution gives 700 RFU after matched blank correction. Multiplying by two gives a corrected response of 1,400 RFU. The sample became dimmer in the well even though its dilution-corrected response increased.

That multiplication is a recovery diagnostic only where response is expected to be proportional to concentration. For a nonlinear assay calibration, first convert the diluted result to concentration using the valid standard curve, then apply the dilution factor. Revvity's AlphaLISA IL6 instructions use this concentration-based procedure. [2]

If the twofold dilution instead gives 1,200 RFU at unchanged settings, the raw signal really has increased. Keep that observation distinct from recovery calculations when troubleshooting.

## Absorbing material can intercept the measurement

In fluorescence, primary inner-filter effects reduce the excitation reaching fluorophores in the observed region. Secondary inner-filter effects absorb emitted light before it reaches the detector. The absorber may be the dye itself or another sample component. The Assay Guidance Manual describes this interference at both excitation and emission wavelengths. [1]

Dilution reduces absorber concentration and may improve light transmission enough to outweigh the loss of fluorophore. The effect depends on wavelength, optical geometry and concentration. Dilution can also change molecular quenching, binding equilibria, pH or enzyme inhibition. A rising response does not identify one mechanism on its own.

In a sandwich AlphaLISA assay, excessive analyte can occupy binding partners separately and reduce productive proximity. The AL223 manual excludes the post-hook region from valid standard-curve fitting. Diluting a sample before following the assay protocol can bring it back into the usable region. Diluting an already assembled detection mixture also changes reagent concentrations and is a different experiment. [2]

## Check whether the raw signal actually rose

When detector output increases monotonically with incident light, compression reduces the separation between bright samples but preserves their order. Under those conditions, less incident light cannot produce more raw output. That constraint applies only while the detector response remains monotonic.

Ordinary compression can explain improved dilution-corrected recovery. A higher raw reading after dilution requires another change, such as sample chemistry, acquisition settings or nonmonotonic overload. Hamamatsu describes different high-rate counting responses, including response models that can turn downward. [3] Do not infer a specific overload mechanism from one dilution pair.

## Separate matrix effects from detector response

Prepare a dilution series at constant final well volume using the assay's specified diluent. Where feasible, compare with standards in appropriately matched or analyte-depleted matrix. Keep timing and detection-reagent concentrations consistent. Inspect absorbance at the relevant wavelengths and use a compatible reporter-only interference control to investigate optical or detection effects.

Test reader linearity separately with a qualified reference or validated optical attenuation; diluting the biological assay changes too many things to isolate the detector. A verified linear working range makes this diagnosis easier.

For temperature-sensitive endpoints, give the dilution series the same thermal history. The AL223 procedure specifies 23°C incubations and warns about temperature-dependent signal. [2] Keep the measurement chamber stable near the validated temperature. Read extra dilution points where corrected concentrations begin to agree, and retain the surrounding points when reporting the result.

## References

1. Anton Simeonov and Mindy I. Davis. [Interference with Fluorescence and Absorbance](https://www.ncbi.nlm.nih.gov/books/NBK343429/). Assay Guidance Manual, updated 1 July 2018. Reviewed in the supplied June 2026 compilation, PDF pp. 1259–1264, particularly p. 1262.

2. Revvity. [AlphaLISA human IL6 kit AL223 manual](https://resources.revvity.com/pdfs/MAN_ALPHALISA_HUMAN_IL6_AL223C-F.pdf), Manual-AL223-VRB1, pp. 5–8. Matrix, incubation temperature, hook-effect and sample-dilution guidance. Assay-specific requirements.

3. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 149–153 (PDF pp. 162–166). Counting noise, background and count-rate nonlinearity. Numerical examples here are constructed.
