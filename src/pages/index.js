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
				¡NOS CASAMOS! Ahora sí, de verdad de la buena.
			</p>
			<br />
			<br />
			<h2>Un poco de chapa sobre nosotros y lo que ocurrió</h2>

			<div className={styles.tile}>
				<div className={styles.text}>
					<p>
						Podríamos contaros la historia bonita de Víctor hincando la rodilla en un atardecer en la playa, pero como todos sabemos la verdad, nos lo vamos a ahorrar.
					</p>
					<p>
						Lo que sí es cierto es que criados en Aluche y Carabanchel, a pocos metros el uno del otro, vimos cómo se cruzaban nuestros caminos una tarde en La Latina. Un concierto de Beyoncé de fondo, un taxista halagüeño, y las coloridas luces de la Cabalgata de Reyes terminaron de obrar la magia (si queréis más detalles os los contamos después de la segunda copa de vino). Después de muchas aventuras decidimos casarnos.
					</p>
					<p>
						El resto de la historia ya la sabéis, un cúmulo de situaciones, dificultades y frustración por todas partes hizo que no pudiéramos celebrar <a href='./old'>la boda del Apocalipsis</a>. Pero estamos de vuelta con más ganas y más ilusión para celebrar “The Wedding Reloaded 2021”. Prometemos que la segunda versión será mejor que la primera, más que nada porque no existió.
					</p>
					<p>
						El resto de la historia ya la sabéis, un cúmulo de situaciones, dificultades y frustración por todas partes hizo que no pudiéramos celebrar la boda del Apocalipsis. Pero estamos de vuelta con más ganas y más ilusión para celebrar “The Wedding Reloaded 2021”. Prometemos que la segunda versión será mejor que la primera, más que nada porque no existió.
					</p>
				</div>
				<div className={`${styles.right} ${styles.map}`}>
					<img
						alt=""
						src={require('../images/trip-mobile.png')}
						width="100%"
					/>
				</div>
			</div>
			<br />
			<br />
			{/* <img
				alt=""
				className={styles.ourTrip}
				src={require('../images/trip-desktop.png')}
				width="100%"
			/>
			<img
				alt=""
				className={styles.ourTripSm}
				src={require('../images/trip-mobile.png')}
				width="100%"
			/>
			<br />
			<br />

			<p>
				El resto de la historia ya la sabéis, un cúmulo de situaciones, dificultades y frustración por todas partes hizo que no pudiéramos celebrar la boda del Apocalipsis. Pero estamos de vuelta con más ganas y más ilusión para celebrar “The Wedding Reloaded 2021”. Prometemos que la segunda versión será mejor que la primera, más que nada porque no existió.
			</p>
			<p>
				El resto de la historia ya la sabéis, un cúmulo de situaciones, dificultades y frustración por todas partes hizo que no pudiéramos celebrar la boda del Apocalipsis. Pero estamos de vuelta con más ganas y más ilusión para celebrar “The Wedding Reloaded 2021”. Prometemos que la segunda versión será mejor que la primera, más que nada porque no existió.
			</p>
			<br/>
			<br/>
			<br/> */}
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
							¡Ayúndanos a construir la fiesta!
						</p>
						<p>	
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
					<p>23 Julio 2021, 18:00</p>
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
