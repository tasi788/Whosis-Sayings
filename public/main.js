/* global Vue */
(async () => {
  const gravatar = {
    hirakujira: { name: 'Hiraku', avatar: 'bf73e08d8bc1db95b62f02d50f8a03e9' }
  }
  const hiraku = await fetch('public/saying.txt')
  const saying = await hiraku.text()
  const hirakuSaying = saying.split(';').slice(0, -1).map(x => x.trim())
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    data: {
      hiraku: hirakuSaying,
      uname: '',
      name: '',
      avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
      message: ''
    },
    methods: {
      updateHiraku () {
        const idx = Math.floor(Math.random() * this.hiraku.length)
        const saying = this.hiraku[idx].split(',')
        this.uname = saying[0]
        this.name = gravatar[this.uname].name
        this.avatar = `https://www.gravatar.com/avatar/${gravatar[this.uname].avatar}`
        this.message = saying[1]
      }
    },
    created () {
      (function f () {
        this.updateHiraku()
        return setTimeout(f.bind(this), 5000)
      }).bind(this)()
    }
  })
})()
