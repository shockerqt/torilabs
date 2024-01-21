var glide = new Glide('.slideshow', {
  type: 'slider',
  perView: 2.5,
  focusAt: 'center',
  // hoverpause: true,
  bound: true,
  autoplay: 3000,
  breakpoints: {
    800: {
      perView: 1
    },
  }
})

glide.mount()
