import React from 'react'
import styles from '../layouts/styles.module.scss'
import { FancyHr, Header, Button, Link, StickyCTA } from '../components'

const IndexPage = () => (
	<main className={styles.wrapper}>
		<Header />
		<FancyHr top />
		<StickyCTA />
		<section className={styles.History}>
			<p className={styles.highlight}>
				“¿Qué mejor momento para celebrar una boda que el apocalipsis
				zombie?” Esto podría haberlo dicho Meri perfectamente y hubiera
				sido divertido… de no ser verdad. Bueno, a ver… que no se acaba
				el mundo… (de momento), pero sí, ¡NOS CASAMOS!.
			</p>
			<br />
			<br />
			<h2>Un poco de chapa sobre nosotros y lo que ocurrió</h2>

			<div className={styles.tile}>
				<div className={styles.text}>
					<p>
						A veces crees que lo que buscas está lejos, en ocasiones
						demasiado, pero en este caso no podíamos imaginar lo
						cerca que estaba, tanto que, de Carabanchel a Aluche,
						donde nos criamos, solo había un pequeño paseo.
					</p>
					<p>
						Hace unos dos años y medio nuestros caminos se cruzaron
						y el amor por los animales, la naturaleza y la pasión
						loca por conocer mundo terminaron de unirnos. Desde ese
						momento empezamos a construir una vida juntos llenándola
						de todas esas pasiones y algunas más, que hemos ido
						descubriendo juntos.
					</p>
				</div>
				<div className={`${styles.right} ${styles.map}`}>
					<img
						alt=""
						src={require('../images/camino.png')}
						width="100%"
					/>
				</div>
			</div>
			<br />
			<br />

			<p>
				Hemos vivido muchísimas aventuras: hemos nadado con tiburones,
				nos hemos quedado sin donde dormir en el culo del mundo, hemos
				sido acorralados por monos, alguno ha sido mordido por un
				équido, pero sobre todo hemos disfrutado, mucho, y hemos
				construido una preciosa familia humano-felina. Y por eso, ha
				llegado el momento de dar un paso más.{' '}
			</p>
			<p>
				De Málaga a Valencia, de Denia a Kenia, de Vietnam al Mar Rojo,
				pasando por Lisboa, Amsterdam… parecía que Victor no había
				encontrado el lugar indicado para la pedida hasta que lo vio
				claro: La Malvarrosa. Sí, amigos, la pedida se hizo un soleado
				día invierno, tirado en una toalla y ataviado con un bañador de
				limones. El éxito estaba asegurado.
			</p>
			<img
				alt=""
				className={styles.ourTrip}
				src={require('../images/OurTrip.png')}
				width="100%"
			/>
			<img
				alt=""
				className={styles.ourTripSm}
				src={require('../images/OurTripSmall.png')}
				width="100%"
			/>
		</section>
		<section className={styles.yourTurn}>
			<h2>Ahora te toca a ti</h2>
			<div className={styles.tile}>
				<div className={styles.calendario}>
					<img
						alt=""
						src={require('../images/calendario.png')}
						width="100%"
					/>
					<br />
					<br />
					<Button />
				</div>
				<div class="right">
					<p
						className={`${styles.highlight} ${styles.correctMargin}`}
					>
						Queremos que nos acompañes en nuestro gran día porque
						sin ti no sería lo mismo. Y lo decimos de verdad, así
						que no te olvides de confirmárnoslo y no pierdas los
						detalles a continuación:
					</p>
					<br />
					<br />
					<div>
						<img
							alt=""
							src={require('../images/map-point.png')}
							height="50px"
						/>
						<p>
							En{' '}
							<Link to="https://laquintadeillescas.com/">
								La Quinta de Illescas
							</Link>
						</p>
						<p>
							Boda y banquete en el mismo sitio, ¿ves qué fácil?
							Todo comodidades…
						</p>
					</div>
					<br />
					<br />
					<div>
						<img
							alt=""
							src={require('../images/bus.png')}
							height="50px"
						/>
						<p>
							Si no puedes o no te apetece coger el coche para
							llegar, no te preocupes. Queremos que disfrutes y te
							despreocupes al máximo ese día. Así que un{' '}
							<strong>
								autobús saldrá de la estación de Aluche a las
								17:00
							</strong>{' '}
							para llevarte al bodorriorrr y luego traerte de
							vuelta.{' '}
						</p>
						<Link to="https://g.page/laquintadeillescas?share">
							Cómo ir en coche
						</Link>
					</div>
					<br />
					<br />
					<div>
						<img
							alt=""
							src={require('../images/spotify.png')}
							height="50px"
						/>
						<p>
							Ayúndanos a construir la fiesta.{' '}
							<Link to="https://open.spotify.com/playlist/1JDfLjKeSxInOYKG9Pf2Ur?si=90ygiSAySd6j-2EziZCEKQ">
								Añade a esta playlist
							</Link>{' '}
							canciones que te gustaría escuchar.
						</p>
					</div>
					<br />
					<br />
					<div>
						<img
							alt=""
							src={require('../images/gift.png')}
							height="50px"
						/>
						<p>
							Con tu presencia es suficiente pero si te apetece
							contribuir con nuestra luna de miel (cuando pueda
							ser que sea), nuestro número de cuenta es el
							siguiente:
						</p>
						<strong>IBAN: ES69 0073 0100 5601 7060 4271</strong>
						<br />
						<strong>Swift / BIC: OPENESMM</strong>
					</div>
					<br />
					<br />
				</div>
			</div>
		</section>
		<FancyHr />
		<section className={styles.Place}>
			<h2>En resumen</h2>
			<br />

			<div className={styles.tile}>
				<div className={styles.sixth}>
					<strong>What</strong>
					<p>¡Nos casamos!</p>
				</div>
				<div className={styles.sixth}>
					<strong>When</strong>
					<p>18 Sept 2020, 18:00</p>
				</div>
				<div className={styles.sixth}>
					<strong>Who</strong>
					<p>Meri y Vic</p>
				</div>
				<div className={styles.sixth}>
					<strong>Where</strong>
					<p>La Quinta de Illescas</p>
				</div>
				<div className={styles.sixth}>
					<strong>How</strong>
					<p>Con mucho love</p>
				</div>
				<div className={styles.sixth}>
					<strong>Why</strong>
					<p>Why not!</p>
				</div>
			</div>
		</section>
	</main>
)

export default IndexPage
