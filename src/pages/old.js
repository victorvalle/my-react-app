import React from 'react'
import styles from '../layouts/styles.module.scss'
import { FancyHr, Header, Button, Link, StickyCTA } from '../components'

const IndexPage = () => (
	<main className={styles.wrapper}>
		<Header />
		<FancyHr top />
		<StickyCTA />
		<section className={styles.History}>
			this page is at /old
		</section>
	</main>
)

export default IndexPage
