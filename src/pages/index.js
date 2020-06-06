import React from 'react'
import { Link } from 'gatsby'

import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

const IndexPage = () => (
  <>
    <SEO
      title="Home"
      keywords={[`Sparklinggifst`, `gifts`, `sparkling`, `wine`, `giftst`]}
    />
    <h1>Give something special</h1>
    <p>Sparkling gifst that not only look good, but taste even beter!.</p>
    <ProductGrid />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
