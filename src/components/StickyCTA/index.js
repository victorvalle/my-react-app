import React from 'react'
import styles from './styles.module.scss'
import Button from '../Button'

const StickyCTA = ({ top }) => {
	return (
		<div
			className={styles.StickyCTA}
		>
			<div className={styles.calendarIcon}>
				<span>Set</span>
				<span>18</span>
			</div>
			<div className={styles.dayTime}>
				<span>Septiembre 18</span>
				<span>Viernes 18:00</span>
			</div>
			<div style={{margin:'auto'}}/>
			<Button link='#' cta="Confirmar" />
		</div>
	)
}

export default StickyCTA
