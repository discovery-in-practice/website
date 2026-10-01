# What does a dichroic mirror change in a fluorescence measurement?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/dichroic-mirror-fluorescence-plate-reader/

How dichroic mirrors improve fluorescence light collection and excitation rejection, including monochromator optics and practical background checks.

A dichroic mirror routes light according to wavelength. In a common fluorescence arrangement, it reflects excitation toward the sample while transmitting longer-wavelength emission toward the detector. A well-chosen dichroic can deliver more useful excitation and collect more emission while helping keep excitation leakage out of the result. The mirror and the excitation and emission selectors need compatible spectral ranges. [1]

## How the dichroic preserves useful light

The excitation beam and the returning fluorescence can share an objective but need different destinations. An ordinary 50:50 beamsplitter sends half of each beam the wrong way. In an idealized comparison, 50% excitation delivery followed by 50% emission transmission leaves 25% of the signal available with lossless routing.

If a wavelength-selective element instead reflects 95% of the excitation and transmits 95% of the emission, the corresponding product is 90.25%. That is 3.61 times the 25% result, assuming linear excitation, identical collection geometry and no other losses. These are illustrative optical efficiencies, not specifications or measured reader performance. A real instrument loses light elsewhere along the path.

The dichroic's transition region matters. Placing useful emission inside that transition can discard photons before they reach the detector. Raising detector gain afterward cannot retrieve them. Semrock's filter guidance emphasizes choosing excitation, dichroic and emission elements together. [1]

## Monochromators can benefit from dichroics too

Wavelength flexibility does not require abandoning efficient wavelength-dependent routing. Some high-performance monochromator systems incorporate a dichroic into the optical path, combining selectable spectral bands with efficient excitation delivery and emission collection. BMG LABTECH describes this architecture in its plate-reader guidance. [2]

When comparing instruments, ask how the system routes excitation and emission across your required wavelengths. Two readers described as monochromator-based can have substantially different optical paths. Transmission, blocking, focusing and detector response all contribute to the final measurement. Assess the dichroic together with the rest of the system; its presence alone does not establish which reader performs best.

Broad emission bandwidth can improve collection when the added wavelengths contain useful fluorescence. Its benefit depends on maintaining adequate excitation rejection and avoiding excessive matrix fluorescence or another reporter's emission. Some readers select the appropriate dichroic automatically, and others offer fixed optical modules. Use supported combinations rather than treating every optical element as independently adjustable.

## Preventing leakage improves more than the blank

Unwanted photons contribute counting noise even when their average signal can be subtracted. In an ideal photon-counting illustration with negligible detector noise and an exactly known mean background:

SNR = (S) divided by (square root of (S + B))

Here SNR is signal-to-noise ratio, S is the expected useful photon count and B is the expected background count during the same acquisition. With S = 1,000 photons, reducing B from 10,000 to 1,000 photons raises SNR from about 9.5 to 22.4. Uncertainty in an experimentally estimated blank would add another term. Displayed relative fluorescence units are not necessarily photon counts. [3]

Optical rejection prevents some unwanted photons from entering the measurement. Subtraction cannot remove their already-recorded fluctuations. Evaluate a configuration with weak positive samples and representative blanks, then inspect replicate precision as well as raw intensity. Include bright neighboring wells to test interwell leakage separately: a spectral dichroic cannot distinguish your fluorophore from the same fluorophore emitting in the next well.

## References

1. Semrock, IDEX Health & Science. [Introduction to Fluorescence Filters](https://semrock.com/resources/resources-detail/intro-to-fluorescence-filters). Excitation, dichroic and emission elements; transmission, blocking and passband selection.

2. BMG LABTECH. [What is a dichroic mirror?](https://www.bmglabtech.com/en/what-is-a-dichroic-mirror/). Manufacturer explanation of dichroics in plate-reader optical paths, including wavelength-selectable systems; comparative marketing rankings are not adopted here.

3. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 149–153 (PDF pp. 162–166). Counting noise, background and count-rate nonlinearity. Numerical examples here are constructed.
