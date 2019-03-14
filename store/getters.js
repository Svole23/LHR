const getters = {
  // pages
  Pages: state => state.pages,
  PageBySlug: state => slug => state.pages.find(page => page.slug === slug),
  PageByUrl: state => url => state.pages.find(page => page.url === url),
  Activities: (state, getters) => getters['pages/getByType']('activity'),
  TechnologyPages: (state, getters) => getters['pages/getManyByProp']('attribute_set_code','page_technology'),
  References: (state, getters) => getters['pages/getByType']('reference'),
  RefCategories: (state, getters) => getters['pages/getByType']('reference_category'),
  machineCategories: (state, getters) => getters['pages/getByType']('machine_category'),
  Technologies: (state, getters) => getters['pages/getByType']('technology'),
  Certificates: (state, getters) => getters['pages/getByType']('certificate'),
  Brochure: (state, getters) => getters['pages/getByType']('brochure'),
  Gallery: (state, getters) => getters['pages/getByType']('gallery_image'),
}

export default getters
