# Why does subtracting background make my CV worse?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/background-subtraction-increases-cv/

Learn why blank subtraction raises CV, how shared blanks create correlated uncertainty and why optical background prevention helps.

Subtracting a background value makes the mean signal smaller. If the same value is subtracted from every replicate, their standard deviation stays unchanged, so the coefficient of variation (CV) rises. Estimating background also introduces uncertainty into the net response. A shared blank shifts corrected wells together; independently estimated blanks can add separate scatter to each result. [1,2]

## The same scatter becomes a larger fraction of the signal

Consider constructed sample readings with a mean of 1,000 relative light units (RLU) and a standard deviation (SD) of 20 RLU. CV is SD divided by a positive mean, multiplied by 100: 2% here. Subtract a common value of 900 RLU and the net mean becomes 100 RLU. The SD remains 20 RLU, giving a CV of 20%.

Subtracting a constant shifts every point equally and leaves the distance between any two points unchanged. The higher CV describes scatter relative to the net signal. Using the uncorrected mean in the denominator would lower the percentage without improving the analyte measurement.

## The blank estimate has uncertainty too

For independent sample and blank estimates, subtraction gives:

u subscript net raised to (2) = u subscript sample raised to (2) + u subscript blank raised to (2)

The u terms are standard uncertainties in the same units as the readings; their squares are variances. For correlated estimates, subtract twice their covariance from the right-hand side. NIST's uncertainty framework includes both cases. [2]

For example, suppose a single sample reading has a standard uncertainty of 20 RLU. A blank mean from four independent readings, each with an SD of 20 RLU, has a standard uncertainty of 10 RLU, assuming a stable blank. Their independent difference has a standard uncertainty of approximately 22.4 RLU: the square root of 20² + 10². That uncertainty is about 22.4% of a 100 RLU net estimate.

## A shared blank does not add independent scatter to each well

If every sample on a plate uses that same blank mean, all corrected values move together when the blank estimate changes. In the example, subtracting the realized common blank still leaves the observed within-plate sample SD at 20 RLU. The 22.4 RLU uncertainty describes a different question: uncertainty in an individual corrected estimate across possible repetitions of the sample and blank measurements.

The uncertainty in a plate mean also retains that shared contribution. More sample wells reduce independent noise while retaining uncertainty in the single blank estimate shared by all of them. The analysis must preserve the fact that those wells share one correction.

## Improve the background before the arithmetic

Subtracting a mean background does not remove the counting fluctuations already contributed by those photons. Hamamatsu's photon-counting treatment includes background in the measurement-noise budget. Better optical blocking, plate isolation or assay chemistry can reduce unwanted photons before collection and thereby improve a weak measurement. [3]

Use representative blanks distributed where needed to assess position and time effects. More blank replicates can estimate a stable mean more precisely; they cannot repair a systematic matrix mismatch or unmodelled drift. Keep sample handling and the validated measurement temperature consistent.

Save raw and corrected means, SDs and the blank-estimation method. As the net mean approaches zero, use uncertainty and relevant detection criteria rather than demanding a small CV. Identify the raw or corrected signal beside every reported CV so another scientist can interpret it.

## References

1. National Institute of Standards and Technology (NIST). [Coefficient of Variation](https://itl.nist.gov/div898/software/dataplot/refman2/auxillar/coefvari.htm). Definition, ratio-scale requirement and behavior near zero; checked 29 September 2026.

2. National Institute of Standards and Technology (NIST). [Combining uncertainty components](https://physics.nist.gov/cuu/Uncertainty/combination.html). Propagation of uncertainty, covariance and independent input quantities; checked 29 September 2026. Numerical examples here are derived illustrations.

3. Hamamatsu Photonics. [Photomultiplier Tubes: Basics and Applications, fourth edition](https://www.hamamatsu.com/resources/pdf/etd/PMT_handbook_v4E.pdf), April 2017, printed pp. 149–153 (PDF pp. 162–166). Counting linearity, background and signal-to-noise relationships.
