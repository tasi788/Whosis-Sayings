/* global Vue */
(async () => {
  const gravatar = {
    hirakujira: { name: 'Hiraku', avatar: 'bf73e08d8bc1db95b62f02d50f8a03e9' },
    Shawn_N: { name: '$踢低吸 舞勺之年', avatar: '34624582cd585ba65e5b5368c84cb1a2' }
  }
  const file = await fetch('public/saying.txt')
  const text = await file.text()
  const saying = text.split(';').slice(0, -1).map(x => x.trim())
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    data: {
      saying: saying,
      uname: '',
      name: '',
      avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
      message: ''
    },
    methods: {
      updateSaying () {
        const idx = Math.floor(Math.random() * this.saying.length)
        const saying = this.saying[idx].split(',')
        this.uname = saying[0]
        this.name = gravatar[this.uname].name
        this.avatar = `https://www.gravatar.com/avatar/${gravatar[this.uname].avatar}`
        this.message = saying[1]
      }
    },
    created () {
      (function f () {
        this.updateSaying()
        return setTimeout(f.bind(this), 5000)
      }).bind(this)()
    }
  })
})()
