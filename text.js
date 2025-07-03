<>
  <p>
    To further strengthen the validation process, OWL reasoners were employed
    alongside SPARQL queries to uncover semantic-level issues related to
    completeness and redundancy. These tools infer implicit facts based on
    ontology axioms, class hierarchies, and property constraints. For example,
    if every hp:Student is expected to have a hp:hasBloodStatus property, the
    absence of this property becomes evident during reasoning. Similarly,
    redundancies such as duplicate assertions—such as symmetric relationships
    explicitly stated in both directions—can be detected. By integrating
    SPARQL-based rule checks with OWL reasoning, we were able to identify both
    surface-level and structural-level validation issues, thereby enhancing the
    overall quality assurance of the knowledge graph <a href="#r31"> [2],</a>{" "}
    <a href="#r32"> [2]</a>. (Written by P.M.P.P.Palihena)
  </p>
</>;
