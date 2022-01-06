const install = (Vue, vm) => {
	let indexList = (params = {}) => vm.$H.post('/prefix/index/info/index', params);//登录
	vm.$u.api = {
		indexList
	}
}
export default {
	install
}