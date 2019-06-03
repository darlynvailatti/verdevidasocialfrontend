const DateFormatter = {
    install(Vue, options) {

        Vue.prototype.$formatDate = function(date) {
            if (!date) return null
            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        }
    }
  };
  
  export default DateFormatter;