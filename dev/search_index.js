var documenterSearchIndex = {"docs":
[{"location":"schema/#Tips-for-Schema-Authors-1","page":"Tips For Schema Authors","title":"Tips for Schema Authors","text":"","category":"section"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"If you're a newcomer to Legolas.jl, please familiarize yourself with via the tour before diving into this documentation.","category":"page"},{"location":"schema/#Simple-Integer-Versioning:-You-Break-It,-You-Bump-It-1","page":"Tips For Schema Authors","title":"Simple Integer Versioning: You Break It, You Bump It","text":"","category":"section"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"While it is fairly established practice to semantically version source code, the world of data/artifact versioning is a bit more varied. As presented in the tour, each Legolas.Schema has a single version integer. In this section, we'll discuss how to interpret this version integer.","category":"page"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"We start with an assumption: source code that defines any given Legolas schema and/or consumes/produces Legolas tables is already semantically versioned, such that consumer/producer packages can determine their compatibility with each other in the usual manner via interpreting major/minor/patch increments.","category":"page"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"With that in mind, here is the central guideline to obey as a Legolas schema author:","category":"page"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"If an update is made to a schema that potentially requires existing data to be rewritten in order to comply with the updated schema, then the version integer associated with that schema should be incremented.","category":"page"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"For example, you must increment the version integer if any of the following changes are made:","category":"page"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"A new non->:Missing required field is added to the schema.\nAn existing required field's type restriction is tightened.\nAn existing required field is renamed.","category":"page"},{"location":"schema/#How-to-Avoid-Breaking-Changes-1","page":"Tips For Schema Authors","title":"How to Avoid Breaking Changes","text":"","category":"section"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"It is preferable to avoid incrementing a schema's version integer (\"making a breaking change\") whenever possible to avoid code/data churn for consumers. Following the below guidelines should help make breaking changes less likely:","category":"page"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"Allow required fields to be Missing whenever reasonable.\nPrefer conservative field type restrictions from the get-go, to avoid needing to tighten them later.\nHandle/enforce \"potential deprecation paths\" in a required field's RHS definition when possible. For example, imagine a schema that contains a required field id::Union{UUID,String} = id where id is either a UUID, or a String that may be parsed as a UUID. Now, let's imagine we decided we wanted to update the schema such that new tables ALWAYS normalize id to a proper UUID. In this case, it is preferable to simply update this required field to id::Union{UUID,String} = UUID(id) instead of id::UUID = id. The latter is a breaking change that requires incrementing the schema's version integer, while the former achieves the same practical result without breaking consumers of old data.","category":"page"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"When making deprecation/API decisions, keep in mind that multiple schema versions may be defined in the same codebase; there's nothing that prevents @row(\"my-schema@1\", ...) and @row(\"my-schema@2\", ...) from being defined/utilized simultaneously.","category":"page"},{"location":"schema/#Other-Tips-For-Composable-Schemas-1","page":"Tips For Schema Authors","title":"Other Tips For Composable Schemas","text":"","category":"section"},{"location":"schema/#","page":"Tips For Schema Authors","title":"Tips For Schema Authors","text":"Prefer idempotency in required field's RHS definitions.\nPrefer authoring child schemas such that they are Liskov substitutable for their parents. A less fancy way of stating the same thing: try to ensure that your child schema only adds additional fields to the parent and doesn't alter existing fields.","category":"page"},{"location":"#API-Documentation-1","page":"API Documentation","title":"API Documentation","text":"","category":"section"},{"location":"#","page":"API Documentation","title":"API Documentation","text":"If you're a newcomer to Legolas.jl, please familiarize yourself with via the tour before diving into this documentation.","category":"page"},{"location":"#","page":"API Documentation","title":"API Documentation","text":"CurrentModule = Legolas","category":"page"},{"location":"#Legolas-Schemas-and-Rows-1","page":"API Documentation","title":"Legolas  Schemas and Rows","text":"","category":"section"},{"location":"#","page":"API Documentation","title":"API Documentation","text":"Legolas.@row\nLegolas.Row\nLegolas.Schema\nLegolas.is_valid_schema_name\nLegolas.schema_name\nLegolas.schema_version\nLegolas.schema_qualified_string\nLegolas.schema_parent\nLegolas.transform","category":"page"},{"location":"#Legolas.@row","page":"API Documentation","title":"Legolas.@row","text":"TODO\n\n\n\n\n\n","category":"macro"},{"location":"#Legolas.Row","page":"API Documentation","title":"Legolas.Row","text":"TODO\n\n\n\n\n\n","category":"type"},{"location":"#Legolas.Schema","page":"API Documentation","title":"Legolas.Schema","text":"TODO\n\n\n\n\n\n","category":"type"},{"location":"#Legolas.is_valid_schema_name","page":"API Documentation","title":"Legolas.is_valid_schema_name","text":"TODO\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.schema_name","page":"API Documentation","title":"Legolas.schema_name","text":"TODO\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.schema_version","page":"API Documentation","title":"Legolas.schema_version","text":"TODO\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.schema_qualified_string","page":"API Documentation","title":"Legolas.schema_qualified_string","text":"TODO\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.schema_parent","page":"API Documentation","title":"Legolas.schema_parent","text":"TODO\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.transform","page":"API Documentation","title":"Legolas.transform","text":"TODO\n\n\n\n\n\n","category":"function"},{"location":"#Validating/Writing/Reading-Legolas-Tables-1","page":"API Documentation","title":"Validating/Writing/Reading Legolas Tables","text":"","category":"section"},{"location":"#","page":"API Documentation","title":"API Documentation","text":"Legolas.validate\nLegolas.write\nLegolas.read","category":"page"},{"location":"#Legolas.validate","page":"API Documentation","title":"Legolas.validate","text":"TODO\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.write","page":"API Documentation","title":"Legolas.write","text":"TODO\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.read","page":"API Documentation","title":"Legolas.read","text":"TODO\n\n\n\n\n\n","category":"function"},{"location":"#Utilities-1","page":"API Documentation","title":"Utilities","text":"","category":"section"},{"location":"#","page":"API Documentation","title":"API Documentation","text":"Legolas.lift\nLegolas.assign_to_table_metadata!\nLegolas.gather\nLegolas.materialize","category":"page"},{"location":"#Legolas.lift","page":"API Documentation","title":"Legolas.lift","text":"lift(f, x)\n\nReturn f(x) unless x isa Union{Nothing,Missing}, in which case return missing.\n\nThis is particularly useful when handling values from Arrow.Table, whose null values may present as either missing or nothing depending on how the table itself was originally constructed.\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.assign_to_table_metadata!","page":"API Documentation","title":"Legolas.assign_to_table_metadata!","text":"TODO\n\nNote that we intend to eventually migrate this function from Legolas.jl to a more appropriate package.\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.gather","page":"API Documentation","title":"Legolas.gather","text":"gather(column_name, tables...; extract=((table, idxs) -> view(table, idxs, :)))\n\nGather rows from tables into a unified cross-table index along column_name. Returns a Dict whose keys are the unique values of column_name across tables, and whose values are tuples of the form:\n\n(rows_matching_key_in_table_1, rows_matching_key_in_table_2, ...)\n\nThe provided extract function is used to extract rows from each table; it takes as input a table and a Vector{Int} of row indices, and returns the corresponding subtable. The default definition is sufficient for DataFrames tables.\n\nNote that this function may internally call Tables.columns on each input table, so it may be slower and/or require more memory if any(!Tables.columnaccess, tables).\n\nNote that we intend to eventually migrate this function from Legolas.jl to a more appropriate package.\n\n\n\n\n\n","category":"function"},{"location":"#Legolas.materialize","page":"API Documentation","title":"Legolas.materialize","text":"materialize(table)\n\nReturn a fully deserialized copy of table.\n\nThis function is useful when table has built-in deserialize-on-access or conversion-on-access behavior (like Arrow.Table) and you'd like to pay such access costs upfront before repeatedly accessing the table. For example:\n\nTODO: make this example runnable\n\njulia> items = read_table(path_to_file);\n\n# iterate through all elements of `items.nested_structures`\njulia> @time foreach(identity, (nested_structure for nested_structure in items.nested_structures));\n0.000126 seconds (306 allocations: 6.688 KiB)\n\njulia> materialized = Onda.materialize(items);\n\njulia> @time foreach(identity, (nested_structure for nested_structure in materialized.nested_structures));\n  0.000014 seconds (2 allocations: 80 bytes)\n\nNote that we intend to eventually migrate this function from Legolas.jl to a more appropriate package.\n\n\n\n\n\n","category":"function"}]
}
