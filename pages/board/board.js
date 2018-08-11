const app = getApp()

Page({
    data: {
        boards: [{
                key: 'in_theaters'
            },
            {
                key: 'new_movies'
            },
            {
                key: 'coming_soon'
            },
            {
                key: 'top250'
            }
        ]
    },
    onLoad() {
        wx.showLoading({
            title: '拼命加载中...'
        })

        const tasks = this.data.boards.map(board => {
            return app.douban.find(board.key, 1, 8)
                .then(data => {
                    board.title = data.title;
                    board.subjects = data.subjects;
                    return board;
                })
        })
        Promise.all(tasks).then(boards=>{
            this.setData({boards: boards, loading: false})
            wx.hideLoading()
        })
    }
})

