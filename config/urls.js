export default new Map([

  // which entities to include for URL decoration
  // entity types that need to have a URL
  // leave array empty for all entity types
  ["include", new Map([

    ["page", new Map([
      ["default_url_prefix", ""],
      ["default_parent", 0],
      ["default_parent_by_set", ""],
      ["attribute_sets", []],
    ])],
    ["technology", new Map([
      ["default_url_prefix", ""],
      ["default_parent", 0],
      ["default_parent_by_set", ""],
      ["attribute_sets", []],
    ])]

  ])],

  // url for default home page
  ["home_url", "home"],

  // For the case of manual slug input
  // keys for slug fields
  // in case of multiple slug keys, first found will be taken
  // if slug should be generated leave this empty and define title key
  ["slug_keys", ["url_slug"]],

  // For the case of generated slugs
  // keys for fields that should be used for slug generation
  // if entity doesn't have defined fields or there are no defined keys
  // primary field will be used if it's text field, otherwise entity will be excluded
  ["title_keys", ["title"]],

  // what fields should be used as parent relation
  // entities that have defined this field and it has value
  // will have parent prefix in the URL
  // if this is left empty there will be no search for parent
  ["parent_keys", ["page_parent"]]
])
