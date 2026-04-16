#import "@preview/cmarker:0.1.8"

#cmarker.render(
  read("README.md"),
  scope: (image: (source, alt: none, format: auto) => image(source, alt: alt, format: format))
)