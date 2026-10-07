# Should I read a cell-based luminescence assay at 37°C or at room temperature?

By Andrew Stewart · CC BY 4.0

https://discoveryinpractice.com/articles/cell-luminescence-37c-room-temperature/

Choose detection temperature using CellTiter-Glo, RealTime-Glo MT and HiBiT Lytic protocols, with clear distinctions between live-cell and lytic assays.

Choose the temperature from the exact assay protocol and the stage being measured. A lytic endpoint such as CellTiter-Glo 2.0 calls for room-temperature equilibration. A nonlytic assay following living cells may require a 37°C environment or another specifically qualified measurement procedure. Biological treatment, reporter development and light detection can have different temperature requirements.  [1,2]

## CellTiter-Glo measures an endpoint after lysis

CellTiter-Glo 2.0 estimates viable cell abundance through adenosine triphosphate (ATP), using a reagent that lyses the cells and produces light. Its protocol calls for approximately 30 minutes of plate equilibration to room temperature before reagent addition, two minutes of mixing and ten minutes at room temperature for signal stabilization. Promega also explains that temperature affects both light output and decay. [1]

For this endpoint, a stable chamber near the validated room temperature helps preserve the conditions established before reading. A plate that warms during acquisition can develop a detection gradient after the intended cellular treatment has already finished. The stated protocol times are starting instructions, with stack and volume effects still relevant to qualification.

## A single endpoint read can still involve living cells

RealTime-Glo MT is nonlytic. Living cells reduce a prosubstrate; the resulting substrate reaches NanoLuc luciferase in the surrounding medium and generates light. Promega provides both continuous-read and endpoint formats, and instructs preparation of the assay reagents in equilibrated 37°C medium. This assay remains nonlytic when the experiment uses only one endpoint read. [2]

The manual allows immediate measurement after removal from a 37°C incubator to limit cooling, or equilibration to a consistent temperature before reading. It also describes setting a suitable luminometer to 37°C and discusses consistent measurements at 37°C or 22°C. [2] Select and qualify one approach for the experiment rather than letting the queue determine how far each plate cools.

For a live-cell time course, maintain the environmental conditions required by the cells and medium, including appropriate gas control when needed. Repeated cooling and reheating can become part of the biological treatment. Stable reporter light alone cannot demonstrate that cell physiology remained unchanged.

## Use the instructions for the actual kit variant

Promega's Nano-Glo HiBiT Lytic protocol recommends equilibrating cells and reagents to room temperature and keeping their temperature constant during luminescence measurement. It also specifies a detection incubation after reagent addition. [3] Those instructions belong to the Lytic system; they should not be transferred automatically to another HiBiT reagent or a live-cell experiment.

Similarly, do not transfer a temperature coefficient from Alpha chemistry to NanoLuc or an ATP-dependent luciferase. The relationship between temperature and signal depends on the reagent and conditions. Compare biological responses under matched detection conditions; temperature alone can change the light output.

## Write down the transitions

For each workflow stage, specify the intended temperature and the event that starts its timer. Include removal from the incubator, reagent addition, mixing, loading and acquisition. Verify representative liquid temperatures rather than assuming that the reader display describes every well.

When comparing temperature conditions, use matched preparations with the same treatment and detection ages. For a live-cell assay, include a suitable independent check of the biological response if the handling change could affect metabolism or growth. For a lytic endpoint, examine reagent performance, gradients and signal stability over the whole batch.

Use the stable near-room-temperature chamber where the endpoint benefits from it, and preserve 37°C or other validated conditions where the living system requires them. Record the chosen temperature and transition times in the protocol before the run.

## References

1. Promega. [CellTiter-Glo 2.0 Assay Technical Manual TM403](https://www.promega.com/resources/protocols/technical-manuals/101/celltiterglo-2-0-assay-protocol/), revised January 2023, PDF pp. 7 and 11. Room-temperature protocol, signal temperature dependence and stack equilibration.

2. Promega. [RealTime-Glo MT Cell Viability Assay Technical Manual TM431](https://www.promega.com/-/media/files/resources/protocols/technical-manuals/101/realtimeglo-mt-cell-viability-assay-protocol.pdf), revised December 2021, PDF pp. 3, 6–7 and 14. Nonlytic mechanism, reagent preparation, live-cell example and temperature options.

3. Promega. [Nano-Glo HiBiT Lytic Detection System Technical Manual TM516](https://www.promega.com/resources/protocols/technical-manuals/101/nano-glo-hibit-lytic-detection-system-protocol/), revised June 2023, PDF p. 7. Constant sample/reagent temperature, room-temperature equilibration and detection incubation.
