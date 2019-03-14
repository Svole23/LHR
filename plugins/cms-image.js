import Vue from 'vue'
import getCMSImageUrl from '@/utils/getCMSImageUrl'

const CmsImagePlugin = {
	install (Vue, options) {
		Vue.getCMSImageUrl = getCMSImageUrl
	}
}

Vue.use(CmsImagePlugin)
Vue.prototype.$getCMSImageUrl