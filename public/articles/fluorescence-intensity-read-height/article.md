# How much does read height matter in fluorescence intensity?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/fluorescence-intensity-read-height/

Optimize fluorescence read height using blanks and weak samples, with practical checks for plate geometry, fill volume and top versus bottom reads.

Move the read height in a fluorescence assay and the signal may change substantially: the excitation and collection optics now overlap the sample and background differently. The useful setting depends on plate geometry, fill volume, sample location and reader design. Optimize with matrix-matched blanks and representative weak samples. The height that gives the largest raw signal may not give the best low-concentration measurement. [1,2]

## Start with the location of the fluorescence

In a homogeneous solution, fluorophore occupies the liquid volume. In an adherent-cell assay, much of the relevant fluorescence may be concentrated near the bottom. The meniscus, liquid depth and plate walls affect the optical path. BMG LABTECH's fluorescence guidance specifically distinguishes solution measurements from samples such as adherent cells when discussing focal height. [1]

Top versus bottom reading is a separate choice from focal-height optimization. Bottom reading through a suitable clear base can favor a cell layer near that base, while the plastic and medium can contribute background. A top-read height that works for a soluble dye should not be assumed to work for an adherent-cell assay.

Moving to a different fill volume changes the sample's depth and surface position. Moving to a different plate can change the bottom position, well shape or optical properties. Recheck the height when either changes materially.

## Published height settings need their reference point

Tecan's 2011 technical note for the Infinite M1000 and F500 shows that optimum height varies with plate format and fill volume. Its procedure measures a signal well and a blank during height optimization. Use both types of well when checking a height setting on another instrument. [2]

The note includes a default coordinate of 20,000 µm. That is an instrument setting, not a portable instruction to focus 20 mm above the liquid. Before copying a height value, establish its reference plane and whether it describes the optics position or a focal plane within the sample.

The published F500 fluorescein configuration used excitation centered at 485 nm with a 20 nm bandwidth and emission centered at 535 nm with a 25 nm bandwidth. These settings identify the historical experiment; they do not prescribe a universal fluorescein protocol or height. [2]

## Watch the blank while you move the focus

Consider an illustrative pair of settings. At the first, a sample gives 1,000 relative fluorescence units (RFU) and its matched blank gives 900 RFU, leaving 100 RFU after subtraction. At the second, the sample gives 800 RFU and the blank gives 100 RFU, leaving 700 RFU. The brightest raw sample reading has the smaller net response.

This arithmetic alone cannot select the better measurement. You still need replicate variability, a concentration series and acceptable low-positive recovery. A large signal-to-background ratio can also be misleading when its blank denominator is extremely small or unstable.

## Run a height scan that resembles the assay

Use the actual plate, working volume and sample matrix. Include matched blanks and low, middle and bright responses. Keep gain, wavelengths, bandwidths and acquisition timing fixed during the scan, within the manufacturer's permitted height range. Check that none of the bright samples reaches a nonlinear response.

For a homogeneous assay, prepare independent replicate wells rather than choosing a single unusually bright well as the focus standard. For cells, include the intended cell distribution and controls. Inspect representative center and edge positions; a setting established in one well may miss plate tilt, warping or position-dependent behavior.

Choose a setting that preserves low-positive precision and useful response across the required range. With a narrow optimum, small variations in dispensing volume or plate position could move routine samples away from the chosen focus. Recheck the chosen setting over the expected volume tolerance and plate lots.

Record height with its instrument reference, along with read direction, plate identity, volume and optical bands. Include the instrument model and software definition of height so the next scientist can reproduce the measurement.

## References

1. BMG LABTECH. [Fluorescence intensity](https://www.bmglabtech.com/en/fluorescence-intensity/), focal-height section. Sample location, fill volume and sensitivity. No universal percentage improvement is inferred.

2. Tecan. [Maximize signal to blank intensity ratios](https://www.tecan.com/hubfs/HubDB/Te-DocDB/pdf/TN_Maximize_signal_to_blank_intensity_ratios_M1000_F500_396815_V1.pdf), technical note 396815 V1.0, August 2011, pp. 1–4. Infinite M1000/F500 height optimization and optical settings. Historical, configuration-specific evidence.
