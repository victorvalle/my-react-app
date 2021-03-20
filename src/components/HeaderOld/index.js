import { ButtonOld, IllustrationOld } from '..'
import React from 'react'
import styles from './styles.module.scss'

const HeaderOld = ({ props }) => {
	return (
		<div className={styles.TopArea}>
			<IllustrationOld />
			<div className={styles.MainCall}>
				<h1>María y Víctor</h1>
				<p>
					Queremos que seais parte de nuestra historia y para ello
					necesitamos vuestra confirmación
				</p>
				<ButtonOld />
			</div>
		</div>
	)
}

export default HeaderOld
