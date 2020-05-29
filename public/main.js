/* global Vue */
(async () => {
  const hiraku = await fetch('public/hiraku.txt')
  const saying = await hiraku.text()
  const hirakuSaying = saying.split(',').slice().map(x => x.trim())
  new Vue({ // eslint-disable-line no-new
    el: '#app',
    data: {
      hiraku: hirakuSaying,
      message: ''
    },
    methods: {
      updateHiraku () {
        const idx = Math.floor(Math.random() * this.hiraku.length)
        this.message = this.hiraku[idx]
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
