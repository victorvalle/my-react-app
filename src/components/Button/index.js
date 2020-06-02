import React from 'react'
import styles from './styles.module.scss'
import Link from '../Link'

const Button = ({ link, cta }) => {
	return (
		<Link to={link}>
			<button className={styles.boton}>{cta}</button>
		</Link>
	)
}

export default Button