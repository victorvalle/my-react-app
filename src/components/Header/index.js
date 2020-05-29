import { Illustration } from '../../components'
import React from 'react'
import styles from './styles.module.scss'

const Header = ({ props }) => {
	return (
		<div className={styles.TopArea}>
			<Illustration />
			<div className={styles.MainCall}>
				<h1>María y Víctor</h1>
				<p>
					Queremos que seais parte de nuestra historia y para ello
					necesitamos vuestra confirmación
				</p>
				<a target="_blank" href="https://google.com">
					<button className={styles.boton}>CONFIRMAR</button>
				</a>
			</div>
		</div>
	)
}

export default Header
