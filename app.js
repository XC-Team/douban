const wechat = require('./utils/wechat')

const douban = require('./utils/douban')

const baidu = require('./utils/baidu')

App({
    data: {
        name: 'Douban Movie',
        version: '0.0.1',
        currentCity: '广州'
    },

    wechat: wechat,

    douban: douban,

    baidu: baidu,

    onLaunch(){
        wechat
            .getLocation()
            .then(res=>{
                const { latitude, longitude } = res
                return baidu.getCityName(latitude, longitude)
            })
            .then(name=>{
                this.data.currentCity = name.replace('市', '')
                console.log(`currentCity: ${this.data.currentCity}`)
            })
            .catch(err=>{
                this.data.currentCity='广州'
                console.log(err)
            })
    }

})