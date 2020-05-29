import React from 'react'
import styles from '../layouts/styles.module.scss'
import { Header } from '../components/Header/index'

const IndexPage = () => (
	<div>
		<div className={styles.Hero}>
			<Header />
			<div className={styles.break1}>
				<div className={styles.b1Leaves}>
					<img src={require('../images/break1.png')} width="100%" />
				</div>
			</div>
			<div className={styles.LeafRight}>
				<img src={require('../images/leaf-right.png')} width="100%" />
			</div>
			<div className={styles.History}>
				<p className={styles.highlight}>
					“¿Qué mejor momento para celebrar una boda que el
					apocalipsis zombie?” Esto podría haberlo dicho Meri
					perfectamente y hubiera sido divertido… de no ser verdad.
					Bueno, a ver… que no se acaba el mundo… (de momento), pero
					sí, ¡NOS CASAMOS!.
				</p>
				<br />
				<br />
				<h2>Un poco de chapa sobre nosotros y lo que ocurrió</h2>
				<span className={styles.underline}></span>

				<div className={styles.tile}>
					<div className={styles.text}>
						<p>
							A veces crees que lo que buscas está lejos, en
							ocasiones demasiado, pero en este caso no podíamos
							imaginar lo cerca que estaba, tanto que, de
							Carabanchel a Aluche, donde nos criamos, solo había
							un pequeño paseo.
						</p>
						<p>
							Hace unos dos años y medio nuestros caminos se
							cruzaron y el amor por los animales, la naturaleza y
							la pasión loca por conocer mundo terminó de unirnos.
							Desde ese momento empezamos a construir una vida
							juntos llenándola de todas esas pasiones y algunas
							más, que hemos ido descubriendo juntos.
						</p>
					</div>
					<div className={styles.rightMap}>
						<img
							src={require('../images/camino.png')}
							width="100%"
						/>
					</div>
				</div>
				<br />
				<br />

				<p>
					Hemos vivido muchísimas aventuras: hemos nadado con
					tiburones, nos hemos quedado sin donde dormir en el culo del
					mundo, hemos sigo acorralados por monos, alguno ha sido
					mordido por un équido, pero sobre todo hemos disfrutado,
					mucho, y hemos construido una preciosa familia
					humano-felina. Y por eso, ha llegado el momento de dar un
					paso más.{' '}
				</p>
				<p>
					De Málaga a Valencia, de Denia a Kenia, de Vietnam al Mar
					Rojo, pasando por Lisboa, Amsterdam… parecía que Victor no
					había encontrado el lugar indicado para la pedida hasta que
					lo vio claro: La Malvarrosa. Sí, amigos, la pedida se hizo
					un soleado día invierno, tirado en una toalla y ataviado con
					un bañador de limones. El éxito estaba asegurado.
				</p>
				<img
					className={styles.ourTrip}
					src={require('../images/OurTrip.png')}
					width="100%"
				/>
				<img
					className={styles.ourTripSm}
					src={require('../images/OurTripSmall.png')}
					width="100%"
				/>
				<br />
				<br />
				<br />
				<br />

				<h2>Ahora te toca a ti</h2>
				<span className={styles.underline}></span>

				<br />
				<br />

				<div className={styles.tile}>
					<div className={styles.calendario}>
						<img
							src={require('../images/calendario.png')}
							width="100%"
						/>
						<br />
						<br />
						<a target="_blank" href="https://google.com">
							<button className={styles.boton}>CONFIRMAR</button>
						</a>
					</div>
					<div class="right">
						<p className={styles.highlight && styles.correctMargin}>
							Queremos que nos acompañes en nuestro gran día
							porque sin ti no sería lo mismo. Y lo decimos de
							verdad, así que no te olvides de confirmárnoslo y no
							pierdas los detalles a continuación:
						</p>
						<br />
						<br />
						<div>
							<img
								src={require('../images/map-point.png')}
								height="50px"
							/>
							<p>
								En{' '}
								<a
									target="_blank"
									href="https://laquintadeillescas.com/"
								>
									La Quinta de Illescas
								</a>
							</p>
							<p>
								Boda y banquete en el mismo sitio, ¿ves qué
								fácil? Todo comodidades…
							</p>
						</div>
						<br />
						<br />
						<div>
							<img
								src={require('../images/bus.png')}
								height="50px"
							/>
							{/* <svg width="auto" height="50" viewBox="0 0 478 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.bus} d="M98.3314 117.326C109.297 117.326 118.188 126.212 118.188 137.183C118.188 148.143 109.297 157.04 98.3314 157.04C87.3608 157.04 78.4694 148.145 78.4694 137.183C78.4711 126.212 87.3625 117.326 98.3314 117.326Z" fill="#BDBDD1"/>
                <path className={styles.bus} d="M371.773 117.326C382.742 117.326 391.63 126.212 391.63 137.183C391.63 148.143 382.743 157.04 371.773 157.04C360.802 157.04 351.909 148.145 351.909 137.183C351.907 126.212 360.8 117.326 371.773 117.326Z" fill="#BDBDD1"/>
                <path className={styles.bus} d="M0.96582 70.6776C0.96582 73.4517 3.2072 75.6845 5.96927 75.6845C8.73134 75.6845 10.9727 73.4517 10.9727 70.6776V55.1362C10.9727 49.4017 15.7882 43.9724 21.471 43.2724L27.2175 42.5896C25.5762 45.7069 24.4193 49.0155 23.9089 52.3603L13.8675 118.812C11.8055 132.46 21.3348 140.786 35.1503 140.629H73.4796C73.2917 139.384 73.09 138.159 73.09 136.864C73.09 123.047 84.2968 111.841 98.1124 111.841C111.936 111.841 123.135 123.047 123.135 136.864C123.135 138.15 122.947 139.384 122.759 140.629H347.424C347.242 139.384 347.057 138.159 347.057 136.864C347.057 123.047 358.245 111.841 372.08 111.841C385.895 111.841 397.102 123.047 397.102 136.864C397.102 138.15 396.902 139.384 396.716 140.629H452.136C465.962 140.453 477.159 126.507 477.159 112.691V25.1138C477.159 11.2983 465.962 0.406885 452.155 0.756885L155.249 8.62069C141.433 8.97069 119.218 11.2466 105.619 13.6828L52.2917 23.2069C46.5003 24.2414 40.9141 27.2862 36.2089 31.4017L20.2882 33.3465C9.46754 34.669 0.991683 44.2362 0.991683 55.1379V70.6793H0.96582V70.6776ZM159.412 34.3017C159.412 28.7759 163.895 24.1707 169.416 24.031L440.457 17.0448C445.973 16.9034 450.455 21.2638 450.455 26.7879V70.1517C450.455 75.6759 445.973 80.1586 440.457 80.1586H169.414C163.893 80.1586 159.411 75.6759 159.411 70.1517V34.3017H159.412ZM39.1693 49.9017C39.9572 44.4293 44.5744 37.9155 49.6934 35.85C80.2572 23.5052 117.704 22.9966 135.266 23.5931C140.79 23.7845 145.255 28.6362 145.255 34.1517V67.5189C145.255 73.0431 140.773 77.5258 135.249 77.5258H125.873C120.349 77.5258 111.619 78.9448 106.383 80.6965L40.6227 102.707C35.3779 104.45 31.771 101.438 32.5589 95.9827L39.1693 49.9017Z" fill="#BDBDD1"/>
              </svg> */}
							<p>
								Si no puedes o no te apetece coger el coche para
								llegar, no te preocupes. Queremos que disfrutes
								y te despreocupes al máximo ese día. Así que un{' '}
								<strong>
									autobús saldrá de la estación de Aluche a
									las 17:00
								</strong>{' '}
								para llevarte al bodorriorrr y luego traerte de
								vuelta.{' '}
							</p>
							<a
								target="_blank"
								href="https://g.page/laquintadeillescas?share"
							>
								Cómo ir en coche
							</a>
						</div>
						<br />
						<br />
						<div>
							<img
								src={require('../images/spotify.png')}
								height="50px"
							/>
							<p>
								Ayúndanos a construir la fiesta.{' '}
								<a
									target="_blank"
									href="https://open.spotify.com/playlist/1JDfLjKeSxInOYKG9Pf2Ur?si=90ygiSAySd6j-2EziZCEKQ"
								>
									Añade a esta playlist
								</a>{' '}
								canciones que te gustaría escuchar
							</p>
						</div>
						<br />
						<br />
						<div>
							<img
								src={require('../images/gift.png')}
								height="50px"
							/>
							<p>
								Con tu presencia es suficiente pero si te
								apetece contribuir con nuestra luna de miel
								(cuando pueda ser que sea), nuestro número de
								cuenta es el siguiente:
							</p>
							<p>ESXX XXXX XXXX XXXXXXXXXXX</p>
						</div>
						<br />
						<br />
					</div>
				</div>
			</div>
			<div className={styles.break2}>
				<div className={styles.b2Leaves}>
					<img src={require('../images/break2.png')} width="100%" />
				</div>
			</div>
			<div className={styles.LeafLeft}>
				<img src={require('../images/leaf-left.png')} width="100%" />
			</div>

			<div className={styles.Place}>
				<h2>En resumen</h2>
				<span className={styles.underline}></span>
				<br />

				<div className={styles.tile}>
					<div className={styles.sixth}>
						<strong>What</strong>
						<p>¡Nos casamos!</p>
					</div>
					<div className={styles.sixth}>
						<strong>When</strong>
						<p>18 Sept 2020</p>
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
			</div>
		</div>
	</div>
)

export default IndexPage
