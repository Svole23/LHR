
// odred of these definitions will influence the seniority of the rule
// if "template_keys" is defined before "template_set_map"
// "template_keys" will have priority to "template_set_map" setting
export default new Map([

  // keys for fields to be used for template
  ["template_keys", ["page_template"]],

  // map of templates to attribute sets
  ["template_set_map", new Map([
    ["page_home", "Home"],
    ["page_technologies","Technologies"],
    ["page_contact","Contact"],
    ["page_machines","Machines"],
    ["page_gallery","Gallery"],
    //["page_component_list","PageComponentList"],
    //["page_component_dimensions","PageComponentDimensions"]
  ])],

  // map of templates to entity types
  ["template_type_map", new Map([
    ["technology","Technology"]

  ])],

  // default template to use (in cases where specific page template couldn't be found)
  // leave empty or remove this setting if you don't want this behaviour
  ["default_template", "Page"],

  // which template to use for not found (404) case
  ["not_found_template", "NotFound"]

])
