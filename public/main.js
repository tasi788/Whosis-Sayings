/* global Vue */
(async () => {
  const gravatar = {
    hirakujira: { name: 'Hiraku', avatar: '9f59b29f260e80857166d422498880ff' },
    Shawn_N: { name: '$踢低吸 八嘎 NONO 麻ㄙㄟ麻ㄙㄟ', avatar: '34624582cd585ba65e5b5368c84cb1a2' },
    bill85101: {name: '森喵', avatar: '9e202866b38b7255f282beb005576731'},
    Nebulosa_cat :{name: '小母貓', avatar:'5c4356ac0f7149af60204fd13d1f3dd6'},
    wei1769: {name: 'Wei 10500 俱樂部', avatar: 'fa81ec75c67bda4ad408059ed8b7cf50'}
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
